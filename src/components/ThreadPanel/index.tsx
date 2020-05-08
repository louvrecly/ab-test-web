import React, { useState } from 'react';
import PlayList from 'components/PlayList';
import { IconButton } from '@material-ui/core';
import { FaRegStar, FaPlay, FaPause } from 'react-icons/fa';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { FiShare } from 'react-icons/fi';
import { Thread, User, Voice } from 'models';
import { IRootState, ThunkResult } from 'store';
import { toggleThreadPlaying } from 'redux/threads/actions';
import { connect } from 'react-redux';
import { sanitizedDate } from 'utils/time';
import classes from './styles.module.scss';

interface IThreadPanelProps {
  activeThread: Thread | undefined;
  users: Array<User>;
  voices: Array<Voice>;
  threadPlaying: boolean;
  toggleThreadPlaying: () => void;
}

const ThreadPanel: React.FC<IThreadPanelProps> = (props: IThreadPanelProps) => {
  const [playListState, setPlayListState] = useState<boolean>(
    props.threadPlaying
  );

  const toggleHasPlayed = () => {
    setPlayListState(!playListState);
  };

  const playOrPauseThread = () => {
    setPlayListState(true);
    props.toggleThreadPlaying();
  };

  return (
    <div className={classes['thread-panel']}>
      {props.activeThread && (
        <div className={classes.container}>
          <div className={classes.handle} onClick={toggleHasPlayed} />

          <div className={classes.contents}>
            <h2 className={classes.title} onClick={toggleHasPlayed}>
              {props.activeThread.title}
            </h2>

            <p className={classes.info}>
              {
                props.users.find(
                  user => user.id === props.activeThread?.user_id.split('/')[1]
                )?.username
              }
              ・{sanitizedDate(props.activeThread.timestamp as any)}
            </p>

            <div className={classes.control}>
              <IconButton
                className={classes['control-star']}
                color="inherit"
                aria-label="star"
              >
                <FaRegStar />
              </IconButton>

              <IconButton
                className={classes['thread-previous']}
                color="inherit"
                aria-label="previous"
              >
                <MdSkipPrevious />
              </IconButton>

              <IconButton
                className={classes['thread-play']}
                color="inherit"
                aria-label="play"
                onClick={playOrPauseThread}
              >
                {props.threadPlaying ? <FaPause /> : <FaPlay />}
              </IconButton>

              <IconButton
                className={classes['thread-next']}
                color="inherit"
                aria-label="next"
              >
                <MdSkipNext />
              </IconButton>

              <IconButton
                className={classes['control-share']}
                color="inherit"
                aria-label="share"
              >
                <FiShare />
              </IconButton>
            </div>

            {<PlayList open={playListState} />}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    activeThread: state.threads.activeThread,
    users: state.users.users,
    voices: state.voices.voices,
    threadPlaying: state.threads.threadPlaying
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    toggleThreadPlaying: () => dispatch(toggleThreadPlaying())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPanel);
