import { connect } from 'react-redux';
import { fetchStations,
  fetchMeasurement,
  fetchPartialData,
} from '../actions';
import MapComponent from '../components/Map';

const mapStateToProps = ({ stations, data, idArray, partial }) => ({ stations, data, idArray, partial });

const mapDispatchToProps = {
  fetchStations,
  fetchMeasurement,
  fetchPartialData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
