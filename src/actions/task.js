import * as taskApis from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK
  };
};

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: data
  };
};

export const fetchListTaskFailed = (err) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: err
  };
};

export const filterTask = keyword => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: { keyword }
  };
};

export const filterTaskSuccess = data => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: { data }
  };
};

export const filterTaskFailed = keyword => {
  return {
    type: taskConstants.FILTER_TASK_FAILED,
    payload: { keyword }
  };
};

export const fetchListTaskRequest = () => {
  return dispatch => {
    dispatch(fetchListTask());
    taskApis.getList().then(res => {
      dispatch(fetchListTaskSuccess(res));
    }).catch(err => {
      dispatch(fetchListTaskFailed(err));
    });
  };
};
