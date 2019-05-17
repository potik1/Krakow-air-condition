import { all } from 'redux-saga/effects';
import { sensorsSaga, measurementSaga, measurementPartialSaga } from '../Map/store/saga';

export default function* rootSaga() {
  yield all([
    sensorsSaga(),
    measurementSaga(),
    measurementPartialSaga(),
  ]);
}
