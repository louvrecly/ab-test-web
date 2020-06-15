import React from 'react';
import { IconButton } from '@material-ui/core';
import { FaPlay } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import classes from './styles.module.scss';

const VoicePlayer: React.FC = () => {
  return (
    <div className={classes['voice-player']}>
      <IconButton className={classes.play} aria-label="play">
        <FaPlay />
      </IconButton>

      <div className={classes['wave-form']}>WaveForm</div>

      <IconButton className={classes.delete} aria-label="delete">
        <IoMdClose />
      </IconButton>
    </div>
  );
};

export default VoicePlayer;
