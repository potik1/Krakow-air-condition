import { takeEvery } from 'redux-saga/effects';
import * as TYPES from '../../types';
import * as ACTIONS from '../../actions';

export function* sensorsSaga() {
  yield takeEvery(TYPES.FETCH_STATIONS, ACTIONS.apiFetchStations);
}

export function* measurementSaga() {
  yield takeEvery(TYPES.FETCH_DATA_FOR_ONE_STATION, ACTIONS.apiFetchDataForOneStation);
}

export function* measurementPartialSaga() {
  yield takeEvery(TYPES.FETCH_PARTIAL_DATA, ACTIONS.apiFetchPartialData);
}
