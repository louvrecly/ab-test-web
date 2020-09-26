import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { FaPlay, FaPause } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import RecordButton from 'components/RecordButton';
import { setAudio } from 'redux/audios/actions';
import {
  setShowRecordButtonState,
  embedRecordButton
} from 'redux/components/actions';
import { IRootState, ThunkResult } from 'store';
import { connect } from 'react-redux';
import { AudioData } from 'utils/audioRecorder';
import classes from './styles.module.scss';

interface IAudioPlayerProps {
  audioUrl: string;
  setAudio: (audio?: AudioData) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
  embedRecordButton: (embeddedRecordButton: boolean) => void;
}

const AudioPlayer: React.FC<IAudioPlayerProps> = (props: IAudioPlayerProps) => {
  const [isPlaying, setIsPlayingState] = useState<boolean>(false);

  const audio = new Audio(props.audioUrl);
  audio.addEventListener('ended', () => setIsPlayingState(false));

  const playAudio = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (isPlaying) {
      // TODO: cannot pause audio, fix needed
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlayingState(!isPlaying);
  };

  const removeAudio = () => {
    props.setAudio();
    props.embedRecordButton(true);
    props.setShowRecordButtonState(true);
  };

  return (
    <div className={classes['voice-player']}>
      {props.audioUrl ? (
        <div className={classes.control}>
          <IconButton
            className={classes.play}
            aria-label="play"
            onClick={playAudio}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </IconButton>

          <div className={classes['wave-form']}>WaveForm</div>

          <IconButton
            className={classes.delete}
            aria-label="delete"
            onClick={removeAudio}
          >
            <IoMdClose />
          </IconButton>
        </div>
      ) : (
        // TODO: capture global mouseup event and dispatch in RecordButton to trigger stopRecording
        <RecordButton />
      )}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setAudio: (audio?: AudioData) => dispatch(setAudio(audio)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton)),
    embedRecordButton: (embeddedRecordButton: boolean) =>
      dispatch(embedRecordButton(embeddedRecordButton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);
