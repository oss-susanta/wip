import { proxy } from 'valtio';

export const state = proxy({
  showSettings: false,
});

export const actions = {
  toggleSettings(showOrHide) {
    state.showSettings = showOrHide == null ? !state.showSettings : showOrHide;
  },
};
