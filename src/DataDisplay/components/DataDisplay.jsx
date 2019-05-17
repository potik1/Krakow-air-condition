import React, { Component } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import BarGraph from './BarGraph';
import './DataDisplay.css';

class DataDisplay extends Component {
  state = {
    dataBar: [],
    title: '',
    open: true,
  };

  componentWillReceiveProps(props) {
    this.setState({ open: props.openData });
  }

  // reset dataBar when station is clicked on the map
  componentDidUpdate(prevProps) {
    const { address } = this.props;
    const { dataBar } = this.state;
    if (prevProps.address !== address) {
      dataBar.length = 0;
    }
  }

  onClickHandler = (name) => {
    this.getHistoricalData(name);
  };

  // get historical data for one parameter
  getHistoricalData = (name) => {
    const { data: { history } } = this.props;
    const allHistoricalData = history.map((hour) => {
      const getValueForName = (hour.values === undefined
          || hour.values.length === 0)
        ? 0
        : hour.values.find(o => o.name === name).value;
      return {
        time: hour.fromDateTime.slice(11, 16),
        value: getValueForName,
      };
    });

    this.setState(
      {
        dataBar: allHistoricalData,
        title: name,
      },
    );
  };

  closeMenu() {
    const open = this.state;
    this.setState({ open: !open });
  }

  // display current values
  renderCurrentParams = () => {
    const { data: { current } } = this.props;
    const getValue = get(current, 'values', []);
    const param = getValue.map(val => (
      <div className="Box" key={Math.random()}>
        <div>
          {val.name}
          {' - '}
          {val.value}
        </div>
        <button
          type="button"
          className="button"
          onClick={() => this.onClickHandler(val.name)}
        >
            History
        </button>
      </div>
    ));
    const emptyDiv = () => (
      <div className="Box">
        <div>Nothing to show</div>
      </div>
    );
    return (
      <div className="Current">
        <hr />
        <p>CURRENT VALUES</p>
        {getValue.length > 0 ? param : emptyDiv()}
      </div>
    );
  };

  render() {
    const { dataBar, title, open } = this.state;
    const { address } = this.props;
    return (
      <div>
        {open && (
        <div className="Data">
          <button
            type="button"
            className="close"
            onClick={() => this.closeMenu()}
          >
X
          </button>
          <div className="Header">
            <h4>
                STATION:&nbsp;
              {address}
            </h4>
          </div>
          <div className="Values">
            {this.renderCurrentParams()}
            <div className="Historical">
              <hr />
              <p>VALUES FROM LAST 24 HOURS</p>
              {(dataBar && dataBar.length > 0)
                ? <BarGraph data={dataBar} title={title} />
                : <div />}
            </div>
          </div>
        </div>)
          }
      </div>
    );
  }
}

DataDisplay.propTypes = {
  data: PropTypes.object,
  address: PropTypes.string,
  openData: PropTypes.bool.isRequired,
};

DataDisplay.defaultProps = {
  data: {},
  address: 'Station Address',
};

export default DataDisplay;
