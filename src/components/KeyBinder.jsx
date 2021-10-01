import { useRef, useCallback, useEffect } from 'react';
import * as keyBindings from '../configs/keyBindings';

const KEY_MODIFIERS = ['alt', 'ctrl', 'meta', 'shift'];

export default function KeyBinder({ onCommand }) {
  const ref = useRef();
  ref.current = { onCommand };

  const handleKeyDown = useCallback((event) => {
    const { isContentEditable, nodeName } = event.target;
    if (nodeName === 'INPUT' || nodeName === 'TEXTAREA' || isContentEditable) {
      return;
    }
    const detectedKeys = [];
    KEY_MODIFIERS.forEach((key) => {
      if (event[`${key}Key`]) {
        detectedKeys.push(key);
      }
    });
    detectedKeys.push(event.key.toLowerCase());
    const seq = detectedKeys.sort().join('+');
    const commandId = keyBindings.getCommandId(seq);
    if (commandId) {
      ref.current.onCommand(commandId, event);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => document.removeEventListener('keydown', handleKeyDown, false);
  }, []);

  return null;
}
