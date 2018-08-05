import { call, put, takeLatest } from 'redux-saga/effects';
import { getRoute } from 'services/NextBusApi';
import {
  REQUEST_ROUTE,
  REQUEST_ROUTE_SUCCESS,
  REQUEST_ROUTE_FAILURE,
} from './constants';

// worker Saga: will be fired on REQUEST_ROUTE actions
function* fetchRoute(routeTag) {
  try {
    const response = yield call(getRoute, routeTag);
    yield put({ type: REQUEST_ROUTE_SUCCESS, response });
  } catch (error) {
    yield put({ type: REQUEST_ROUTE_FAILURE, error });
  }
}

// Individual exports for testing
export default function* routeSaga({
  match: {
    params: { routeTag },
  },
}) {
  yield takeLatest(REQUEST_ROUTE, fetchRoute, routeTag);
}
