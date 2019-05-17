import * as TYPES from '../types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.FETCHED_DATA_FOR_ONE_STATION: {
      return action.payload;
    }
    case TYPES.FETCHED_ONE_STATION_FAILED: {
      return { ...state, error: action.error.message };
    }
    default:
      return state;
  }
}
