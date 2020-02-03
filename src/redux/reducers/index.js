import { combineReducers } from 'redux';
import { chatMessages } from './chatMessages';

export const rootReducer = combineReducers({
  chatMessages,
});
