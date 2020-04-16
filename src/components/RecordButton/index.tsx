import React from 'react';
import clsx from 'clsx';
import { IconButton } from '@material-ui/core';
import classes from './styles.module.scss';

interface IRecordButtonProps {
  isAbsolute?: boolean;
}

const RecordButton: React.FC<IRecordButtonProps> = (
  props: IRecordButtonProps
) => {
  return (
    <div
      className={clsx({
        [classes['record-button']]: true,
        [classes.absolute]: props.isAbsolute
      })}
    >
      <IconButton className={classes.button} aria-label="record">
        9up
      </IconButton>
    </div>
  );
};

export default RecordButton;
