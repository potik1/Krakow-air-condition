import React from 'react';
import { levels } from '../config/legend';
import './Legend.css';

const LegendList = () => {
  const levelsItem = levels.map(level => (
    <div className="list" key={Math.random()}>
      <span style={{ backgroundColor: level.color }} />
      {level.description}
    </div>
  ));

  return (
    <div className="legend">
      <header>POLLUTION LEVEL:</header>
      <div className="row">
        {levelsItem}
      </div>
    </div>
  );
};

export default LegendList;
