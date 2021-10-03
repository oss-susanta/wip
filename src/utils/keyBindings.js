export default function createKeyBindings(bindings) {
  const bySeq = new Map();
  const byId = new Map();

  const KEY_ALIAS = new Map([
    ['esc', 'escape'],
    ['ins', 'insert'],
    ['del', 'delete'],
    ['↑', 'arrowup'],
    ['→', 'arrowright'],
    ['↓', 'arrowdown'],
    ['←', 'arrowleft'],
    ['↵', 'enter'],
    ['command', 'meta'],
    ['cmd', 'meta'],
    ['option', 'alt'],
  ]);

  function format(seq) {
    return seq
      .split('+')
      .map((s) => s.trim().toLowerCase())
      .map((s) => KEY_ALIAS.get(s) || s)
      .sort()
      .join('+');
  }

  bindings.forEach(([commandId, keySeq]) => {
    byId.set(commandId, keySeq);
    bySeq.set(format(keySeq), commandId);
  });

  return {
    getBinding(commandId) {
      return byId.get(commandId);
    },
    getCommandId(seq) {
      return bySeq.get(seq);
    },
  };
}
