import React from 'react';
import Map from './components/Map';
import HeadNav from './components/HeadNav';
import RecordButton from './components/RecordButton';
import classes from './App.module.scss';

const App: React.FC = () => {
  const markersData: [number, number][] = [
    [22.2988, 114.1742],
    [22.4423, 114.1655],
    [22.3119, 114.2569],
    [22.3837, 114.2708],
    [22.2885, 114.1928],
    [22.2801, 114.1588],
    [22.3908, 113.9725]
  ];

  return (
    <div className={classes.app}>
      <Map markersData={markersData} />
      <HeadNav title="吹水台" />
      <RecordButton />
    </div>
  );
};

export default App;
