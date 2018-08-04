import { call, put, takeLatest } from 'redux-saga/effects';
import { getRoutes } from 'services/NextBusApi';
import {
  REQUEST_ROUTES,
  REQUEST_ROUTES_SUCCESS,
  REQUEST_ROUTES_FAILURE,
} from './constants';

// worker Saga: will be fired on REQUEST_ROUTES actions
function* fetchRoutes() {
  try {
    const response = yield call(getRoutes);
    yield put({ type: REQUEST_ROUTES_SUCCESS, response });
  } catch (error) {
    yield put({ type: REQUEST_ROUTES_FAILURE, error });
  }
}

// Individual exports for testing
export default function* routesSaga() {
  yield takeLatest(REQUEST_ROUTES, fetchRoutes);
}
