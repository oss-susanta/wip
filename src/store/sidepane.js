import { proxy } from 'valtio';

export const state = proxy({
  selected: null,
});

export const actions = {
  select(next) {
    state.selected = next;
  },
};
