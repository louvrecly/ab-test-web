import React from 'react';
import classes from './styles.module.scss';

const TimerBar: React.FC = () => {
  return (
    <div className={classes['timer-bar']}>
      <h2 className={classes.timer}>00:00</h2>
    </div>
  );
};

export default TimerBar;
