import { combineReducers } from 'redux';
import { chatMessagesReducer } from './chatMessages';

export const rootReducer = combineReducers({
  chatMessages: chatMessagesReducer,
});
