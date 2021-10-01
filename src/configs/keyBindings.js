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

function formatSeq(seq) {
  return seq
    .split('+')
    .map((s) => s.trim().toLowerCase())
    .map((s) => KEY_ALIAS.get(s) || s)
    .sort()
    .join('+');
}

export function register(id, seq) {
  byId.set(id, seq);
  bySeq.set(formatSeq(seq), id);
}

export function registerAll(array) {
  array.forEach(([id, seq]) => register(id, seq));
}

export function deregister(id, seq) {
  byId.delete(id);
  bySeq.delete(formatSeq(seq));
}

export function getBinding(id) {
  return byId.get(id);
}

export function getCommandId(seq) {
  return bySeq.get(seq);
}
