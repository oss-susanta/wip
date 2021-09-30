import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import undoable from 'redux-undo';
import content from './features/content/slice';

const store = configureStore({
  reducer: {
    content: undoable(content.reducer),
  },
  middleware(getDefaults) {
    return getDefaults().concat([logger]);
  },
});

export default store;
