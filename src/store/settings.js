import { proxy } from 'valtio';

export const state = proxy({
  fontFamily: 'circular_std',
  theme: 'light',
  asideSize: '30%',
});

export const actions = {
  update(newState) {
    Object.assign(state, newState);
  },
};
