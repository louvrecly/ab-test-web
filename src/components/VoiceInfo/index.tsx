import React, { useRef, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { FaUserPlus, FaRegHeart } from 'react-icons/fa';
import { VoiceJson, User } from 'models';
import { IRootState, ThunkResult } from 'store';
import { connect } from 'react-redux';
import { sanitizedDate } from 'utils/time';
import classes from './styles.module.scss';

interface IVoiceInfoProps {
  voice: VoiceJson;
  users: Array<User>;
}

const VoiceInfo: React.FC<IVoiceInfoProps> = (props: IVoiceInfoProps) => {
  const [isPlaying, setIsPlayingState] = useState<boolean>(false);

  const audioElement = document.createElement('audio');
  audioElement.src = props.voice.voice_url;
  const audioRef = useRef(audioElement);

  const playOrPauseAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlayingState(prevIsPlaying => !prevIsPlaying);
  };

  return (
    <div className={classes['voice-info']}>
      <IconButton className={classes.profile} aria-label="profile">
        <FaUserPlus />

        <span className={classes.badge}>
          {
            props.users.find(
              user => user.id === props.voice.user_id.split('/')[1]
            )?.followers?.length
          }
          +
        </span>
      </IconButton>

      <div className={classes.info}>
        <p className={classes.date}>
          {sanitizedDate(props.voice.timestamp as any)}
        </p>

        <h3 className={classes.user} onClick={playOrPauseAudio}>
          {
            props.users.find(
              user => user.id === props.voice.user_id.split('/')[1]
            )?.username
          }
        </h3>
      </div>

      <IconButton className={classes.like} aria-label="like">
        <FaRegHeart />

        <span className={classes.badge}>
          {props.voice.liked_by_users.length}+
        </span>
      </IconButton>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VoiceInfo);
