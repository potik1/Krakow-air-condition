import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';
import { AxisBottom, AxisLeft } from '@vx/axis';
import { axisDescription } from '../../utils/functions';
import { desc } from '../../config/axisDescription';
import './BarGraph.css';

const WIDTH = 380;
const HEIGHT = 250;
const MARGIN = { top: 50, bottom: 50, left: 20, right: 20 };

class BarGraph extends Component {
  render() {
    const { data, title } = this.props;

    const xMax = WIDTH - MARGIN.left - MARGIN.right;
    const yMax = HEIGHT - MARGIN.top - MARGIN.bottom;

    const x = d => d.time;
    const y = d => d.value;
    const yMinData = Math.min(...data.map(y));
    const yMaxData = Math.max(...data.map(y));

    const xScale = scaleBand({
      rangeRound: [100, xMax],
      domain: data.map(x),
      padding: 0.2,
    });

    const yScale = scaleLinear({
      rangeRound: [yMax, 0],
      domain: [yMinData - yMinData * 0.01, yMaxData],
    });

    const compose = (scale, accessor) => data1 => scale(accessor(data1));

    const xPoint = compose(xScale, x);
    const yPoint = compose(yScale, y);
    const fill = `#394585`; //eslint-disable-line

    return (
        <>
          <h4>{title}</h4>
          <svg width={WIDTH} height={HEIGHT}>
            {data.map((d) => {
              const barHeight = yMax - yPoint(d);
              return (
                <Group key={Math.random()} fill={fill}>
                  <Bar
                    x={xPoint(d)}
                    y={yMax - barHeight}
                    height={barHeight}
                    width={xScale.bandwidth()}
                  />
                </Group>
              );
            })}
            <AxisBottom
              top={yMax + 20}
              label="Time [h]"
              labelOffset={20}
              scale={xScale}
              stroke="black"
              tickClassName="tick-bottom"
              labelClassName="label"
            />
            <AxisLeft
              left={80}
              scale={yScale}
              tickLabelProps={() => ({ dx: '-5px',
                dy: '7px',
                fill: 'black',
                fontFamily: 'Arial',
                fontSize: 10,
                textAnchor: 'end' })
              }
            />
            <text x="-130" y="35" transform="rotate(-90)" fontSize={16}>
              {title.charAt(0) + title.slice(1).toLowerCase()}
              {' '}
              { axisDescription(desc, title)}
            </text>
          </svg>
        </>
    );
  }
}

BarGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

BarGraph.defaultProps = {
  data: [],
  title: 'missing title',
};

export default BarGraph;
