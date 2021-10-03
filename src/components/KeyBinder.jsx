import { useRef, useCallback, useEffect } from 'react';

const KEY_MODIFIERS = ['alt', 'ctrl', 'meta', 'shift'];

export function useKeyEvent({ keyBindings, onCommand }) {
  const ref = useRef();
  ref.current = { keyBindings, onCommand };

  const handleEvent = useCallback((event) => {
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
    const { keyBindings, onCommand } = ref.current;
    const commandId = keyBindings.getCommandId(seq);
    if (commandId) {
      onCommand(commandId, event);
    }
  }, []);

  return handleEvent;
}

export default function KeyBinder(props) {
  const handleKeyDown = useKeyEvent(props);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, false);
    return () => document.removeEventListener('keydown', handleKeyDown, false);
  }, []);

  return null;
}
