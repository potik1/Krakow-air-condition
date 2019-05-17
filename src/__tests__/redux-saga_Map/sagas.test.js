import axios from 'axios';
import { call, put, all } from 'redux-saga/effects';
import { getAllId, mergeObjects } from '../../utils/functions';
import {
  apiFetchStations,
  apiFetchDataForOneStation,
  apiFetchPartialData,
} from '../../Map/actions';
import * as TYPES from '../../Map/types';
import { MAX_RESULT, API_KEY } from '../../config/api';

describe('testing saga apiFetchStations', () => {
  let generator = null;
  let result;

  beforeAll(() => {
    generator = apiFetchStations({ LON, LAT, MAX_DISTANCE });
  });

  const LON = 19.9449799;
  const LAT = 50.0646501;
  const MAX_DISTANCE = 20;
  const url = `https://airapi.airly.eu/v2/installations/nearest/?lat=${LAT}&lng=${LON}&maxDistanceKM=${MAX_DISTANCE}&maxResults=${MAX_RESULT}&apikey=${API_KEY}`;
  const response = {
    data: [
      { id: 204 },
    ],
  };
  const arrayOfIds = [204, 503, 222];

  const action = {
    url,
    fetchedStationData: jest.fn().mockReturnValue({ type: TYPES.FETCHED_STATIONS_DATA, payload: response.data }),
    fetchedArrayOfIds: jest.fn().mockReturnValue({ type: TYPES.IDS_ARRAY, arrayOfIds }),
  };

  test('apiFetchStations sagatest', () => {
    result = generator.next();
    expect(result.value).toEqual(call(axios.get, action.url));
    result = generator.next(response);
    expect(result.value).toEqual(put(action.fetchedStationData(response.data[0].id)));
    expect(action.fetchedStationData).toHaveBeenCalled();
    result = generator.next();
    expect(result.value).toEqual(call(getAllId, response.data));
    result = generator.next(arrayOfIds);
    expect(result.value).toEqual(put(action.fetchedArrayOfIds(arrayOfIds)));
    result = generator.next();
    expect(result.done).toEqual(true);
  });
});

describe('testing saga apiFetchDataForOneStation', () => {
  let generator = null;
  let result;

  beforeAll(() => {
    generator = apiFetchDataForOneStation({ installationId });
  });

  const installationId = 204;
  const url = `https://airapi.airly.eu/v2/measurements/installation?installationId=${installationId}&apikey=${API_KEY}`;
  const response = {
    data: {
      current: {},
    },
  };

  const action = {
    url,
    fetchedMeasurementData: jest.fn().mockReturnValue({ type: TYPES.FETCHED_DATA_FOR_ONE_STATION, payload: response.data }),
  };

  test('apiFetchDataForOneStation sagatest', () => {
    result = generator.next();
    expect(result.value).toEqual(call(axios.get, action.url));
    result = generator.next(response);
    expect(result.value).toEqual(put(action.fetchedMeasurementData(response)));
    expect(action.fetchedMeasurementData).toHaveBeenCalled();
    result = generator.next();
    expect(result.done).toEqual(true);
  });
});

describe('testing saga apiFetchPartialData', () => {
  let generator = null;
  let result;

  beforeAll(() => {
    generator = apiFetchPartialData({ idArray });
  });

  const idArray = [204, 58, 1096];
  const urls = [`https://airapi.airly.eu/v2/measurements/installation?installationId=204&apikey=${API_KEY}`,
    `https://airapi.airly.eu/v2/measurements/installation?installationId=58&apikey=${API_KEY}`,
    `https://airapi.airly.eu/v2/measurements/installation?installationId=1096&apikey=${API_KEY}`];

  const response = [{ data: { current: {} } }, { data: { current: {} } }, { data: { current: {} } }];

  const responseAll = [
    { data: { current: { uid: 204 } } },
    { data: { current: { uid: 58 } } },
    { data: { current: { uid: 1096 } } }];

  const uids = idArray.map(id => ({ uid: id }));

  const action = {
    fetchedPartialData: jest.fn().mockReturnValue({ type: TYPES.FETCHED_PARTIAL_DATA, payload: responseAll }),
  };

  test('apiFetchPartialData sagatest', () => {
    result = generator.next();
    expect(result.value).toEqual(all(urls.map(url => (call(axios.get, url)))));
    result = generator.next(response);
    expect(result.value).toEqual(all(response.map((resp, i) => call(mergeObjects, resp.data.current, uids[i]))));
    result = generator.next(responseAll);
    expect(result.value).toEqual(put(action.fetchedPartialData(responseAll)));
    expect(action.fetchedPartialData).toHaveBeenCalled();
    result = generator.next();
    expect(result.done).toEqual(true);
  });
});
