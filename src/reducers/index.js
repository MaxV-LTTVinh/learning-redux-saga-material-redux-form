import { combineReducers } from 'redux';
import modalReducer from './modal';
import taskReducer from './task';
import uiReducer from './ui';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  task: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
  form: formReducer
});

export default rootReducer;
