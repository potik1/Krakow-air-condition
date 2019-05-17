import { combineReducers } from 'redux';
import stations from '../Map/reducers/stations';
import data from '../Map/reducers/data';
import idArray from '../Map/reducers/idArray';
import partial from '../Map/reducers/partialData';

const rootReducer = combineReducers({
  stations,
  data,
  idArray,
  partial,
});

export default rootReducer;
