import React from 'react';
import { IconButton } from '@material-ui/core';
import { FaPlay } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { AudioData } from 'utils/audioRecorder';
import classes from './styles.module.scss';

interface IVoicePlayerProps {
  audio: AudioData | undefined;
}

const VoicePlayer: React.FC<IVoicePlayerProps> = (props: IVoicePlayerProps) => {
  const playAudio = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (props.audio) {
      props.audio.play();
    }
  };

  return (
    <div className={classes['voice-player']}>
      <IconButton
        className={classes.play}
        aria-label="play"
        onClick={playAudio}
      >
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
