import * as TYPES from '../types';

export default function (state = [], action) {
  switch (action.type) {
    case TYPES.IDS_ARRAY: {
      return action.arrayOfIds;
    }
    default:
      return state;
  }
}
