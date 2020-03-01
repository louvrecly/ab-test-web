import React from 'react';
import HeadNav from './Components/HeadNav';
import RecordButton from './Components/RecordButton';
import classes from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <HeadNav title="吹水台" />
      <RecordButton />
    </div>
  );
};

export default App;
