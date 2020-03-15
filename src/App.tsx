import React from 'react';
import HeadNav from './components/HeadNav';
import RecordButton from './components/RecordButton';
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
