import { call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { BASE_URL, API_KEY, MAX_RESULT } from '../../config/api';
import * as TYPES from '../types';
import { getAllId, mergeObjects } from '../../utils/functions';

// ACTIONS
export const fetchStations = (LAT, LON, MAX_DISTANCE) => ({
  type: TYPES.FETCH_STATIONS,
  LAT,
  LON,
  MAX_DISTANCE,
});

export const fetchedStationsData = payload => ({
  type: TYPES.FETCHED_STATIONS_DATA,
  payload,
});

export const fetchMeasurement = installationId => ({
  type: TYPES.FETCH_DATA_FOR_ONE_STATION,
  installationId,
});

export const fetchedMeasurementData = payload => ({
  type: TYPES.FETCHED_DATA_FOR_ONE_STATION,
  payload,
});

export const fetchPartialData = idArray => ({
  type: TYPES.FETCH_PARTIAL_DATA,
  idArray,
});

export const fetchedPartialData = payload => ({
  type: TYPES.FETCHED_PARTIAL_DATA,
  payload,
});

//  API functions
export function* apiFetchStations({ LAT, LON, MAX_DISTANCE }) {
  const URL = `${BASE_URL}/installations/nearest/?lat=${LAT}&lng=${LON}&maxDistanceKM=${MAX_DISTANCE}&maxResults=${MAX_RESULT}&apikey=${API_KEY}`;
  try {
    const response = yield call(axios.get, URL);
    yield put(fetchedStationsData(response.data));
    // create array of id's for all stations
    const arrayOfIds = yield call(getAllId, response.data);
    yield put({ type: TYPES.IDS_ARRAY, arrayOfIds });
  } catch (error) {
    yield put({ type: TYPES.FETCHED_STATIONS_FAILED, error });
  }
}

export function* apiFetchPartialData({ idArray }) {
  const uids = idArray.map(id => ({ uid: id }));
  try {
    const urls = idArray.map(id => `${BASE_URL}/measurements/installation?installationId=${id}&apikey=${API_KEY}`);
    const response = yield all(urls.map(url => call(axios.get, url)));
    const responseAll = yield all(response.map((resp, i) => call(mergeObjects, resp.data.current, uids[i])));
    yield put(fetchedPartialData(responseAll));
  } catch (error) {
    yield put({ type: TYPES.FETCHED_PARTIAL_FAILED, error });
  }
}

export function* apiFetchDataForOneStation({ installationId }) {
  const URL = `${BASE_URL}/measurements/installation?installationId=${installationId}&apikey=${API_KEY}`;
  try {
    const response = yield call(axios.get, URL);
    yield put(fetchedMeasurementData(response.data));
  } catch (error) {
    yield put({ type: TYPES.FETCHED_ONE_STATION_FAILED, error });
  }
}
