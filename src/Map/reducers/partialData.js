import * as TYPES from '../types';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.FETCHED_PARTIAL_DATA: {
      return action.payload;
    }
    case TYPES.FETCHED_PARTIAL_FAILED: {
      return [action.error.message];
    }
    default:
      return state;
  }
}
