import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const ErrorComponent = ({ message }) => (
  <div className="error">
    <p>ERROR:</p>
    <br />
    {message}
  </div>);

ErrorComponent.propTypes = {
  message: PropTypes.string,
};

ErrorComponent.defaultProps = {
  message: '',
};

export default ErrorComponent;
