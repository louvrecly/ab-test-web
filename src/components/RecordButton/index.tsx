import React from 'react';
import { IconButton } from '@material-ui/core';
import classes from './styles.module.scss';

const RecordButton: React.FC = () => {
  return (
    <div className={classes['record-button']}>
      <IconButton className={classes.button} aria-label="record">
        9up
      </IconButton>
    </div>
  );
};

export default RecordButton;
