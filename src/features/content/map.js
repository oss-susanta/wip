import Dummy from './Dummy';
import GridLayout from './GridLayout';
import debugAction from '../actions/Debug';
import removeAction from '../actions/Remove';

const map = new Map();

export function get(type, name) {
  const plugins = map.get(type);
  return plugins && plugins.get(name);
}

export function register(type, name, value) {
  if (!map.has(type)) {
    map.set(type, new Map());
  }
  const plugins = map.get(type);
  plugins.set(name, value);
}

register('container', 'grid-layout', {
  id: 'grid-layout',
  name: 'Grid Layout',
  Component: GridLayout,
});

register('container', 'dummy', {
  Component: Dummy,
  actions: ['debug', 'remove'],
});

register('action', debugAction.id, debugAction);
register('action', removeAction.id, removeAction);
