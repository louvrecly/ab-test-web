import React from 'react';
import HeadNav from 'components/HeadNav';
import RecordButton from 'components/RecordButton';
import classes from './styles.module.scss';

const Main: React.FC = () => {
  return (
    <div className={classes.main}>
      <HeadNav title="吹水台" />
      <RecordButton />
    </div>
  );
};

export default Main;
