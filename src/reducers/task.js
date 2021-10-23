import * as taskConstants from '../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
  listTask: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: []
      };
    }
    case taskConstants.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTask: data
      };
    }
    case taskConstants.FETCH_TASK_FAILED: {
      const { message } = action.payload;
      toastError(message);
      return {
        ...state,
        listTask: []
      };
    }
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data = [] } = action.payload;
      return {
        ...state,
        listTask: data
      };
    }
    case taskConstants.FILTER_TASK_FAILED: {
      return {
        ...state,
      };
    }
    default: return state;
  }
};

export default reducer;
