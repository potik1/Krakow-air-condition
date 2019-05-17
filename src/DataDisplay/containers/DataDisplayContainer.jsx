import { connect } from 'react-redux';
import DataDisplay from '../components/DataDisplay';

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps, null)(DataDisplay);
