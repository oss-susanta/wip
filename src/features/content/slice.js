import { createSlice } from '@reduxjs/toolkit';
import { set } from 'lodash';

const initialState = {
  0: {
    id: '0',
    type: 'grid-layout',
    offspring: [
      { id: '1', x: 0, y: 0, w: 24, h: 4 },
      { id: '2', x: 0, y: 4, w: 12, h: 3 },
      { id: '3', x: 12, y: 4, w: 12, h: 3 },
      { id: '4', x: 0, y: 7, w: 16, h: 5 },
    ],
  },
  1: {
    id: '1',
    type: 'dummy',
  },
  2: {
    id: '2',
    type: 'dummy',
  },
  3: {
    id: '3',
    type: 'dummy',
  },
  4: {
    id: '4',
    type: 'dummy',
  },
};

export default createSlice({
  name: 'content',
  initialState,
  reducers: {
    init(_, action) {
      return action.payload;
    },
    add(state, action) {
      state[action.payload.id] = action.payload;
    },
    update(state, { payload: { id, name, value } }) {
      const componentState = state[id];
      if (componentState == null) return;
      set(componentState, name, value);
    },
    remove(state, action) {
      delete state[action.payload];
    },
  },
});
