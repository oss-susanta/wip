import { proxy } from 'valtio';

export const state = proxy({
  sidebar: true,
  about: false,
  settings: false,
  userProfile: false,
});

export const actions = {
  toggle(name, value) {
    state[name] = value;
  },
};
