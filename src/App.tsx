import React from 'react';
import Map from './components/Map';
import HeadNav from './components/HeadNav';
import RecordButton from './components/RecordButton';
import classes from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Map>
        <HeadNav title="吹水台" />
        <RecordButton />
      </Map>
    </div>
  );
};

export default App;
