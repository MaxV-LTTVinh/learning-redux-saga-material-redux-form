import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
import { getList } from '../apis/task';
import { HTTP_STATUS } from '../constants';
import { fetchListTaskFailed, fetchListTaskSuccess, filterTaskSuccess } from '../actions/task';
import { showLoading, hideLoading } from '../actions/ui';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const res = yield call(getList);
    const { data, status } = res;
    if (status === HTTP_STATUS.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword = '' } = payload;
  const list = yield select(state => state.task.listTask);
  const filteredTask = list.filter(task => task.title.toLowerCase().includes(keyword.toString().trim().toLowerCase()));
  // console.log('keyword',keyword,list, filteredTask);
  yield put(filterTaskSuccess(filteredTask));
  yield '';
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
};
export default rootSaga;
