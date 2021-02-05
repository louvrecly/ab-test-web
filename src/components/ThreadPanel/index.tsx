import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PlayList from 'components/PlayList';
import { IconButton } from '@material-ui/core';
import { FaRegStar, FaPlay, FaPause } from 'react-icons/fa';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { FiShare } from 'react-icons/fi';
import { IRootState, ThunkResult } from 'store';
import { setActiveThread, stopPlayingThread, toggleThreadPlaying } from 'redux/threads/actions';
import {
  setDrawerState,
  setShowPlayListState,
  setShowRecordButtonState
} from 'redux/components/actions';
import { DrawerSide } from 'redux/components/state';
import { loadVoices } from 'redux/voices/thunks';
import { ThreadJson, User, VoiceJson } from 'models';
import { sanitizedDate } from 'utils/time';
import classes from './styles.module.scss';

interface IThreadPanelProps {
  thread: ThreadJson;
  users: Array<User>;
  voices: Array<VoiceJson>;
  threadPlaying: boolean;
  showPlayList: boolean;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
  setActiveThread: (thread: ThreadJson | null) => void;
  loadVoices: (threadId: string) => void;
  stopPlayingThread: () => void;
  toggleThreadPlaying: () => void;
  setShowPlayListState: (showPlayList: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const ThreadPanel: React.FC<IThreadPanelProps> = (props: IThreadPanelProps) => {
  const toggleShowPlayList = () => {
    const showPlayList = !props.showPlayList;
    props.setShowPlayListState(showPlayList);
    props.setShowRecordButtonState(showPlayList);
  };

  const playOrPauseThread = () => {
    props.setShowPlayListState(true);
    props.setShowRecordButtonState(true);
    props.toggleThreadPlaying();
  };

  /* Set active thread and load voices on render */
  useEffect(() => {
    props.stopPlayingThread();
    props.setActiveThread(props.thread);
    props.loadVoices(props.thread.id as string);
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div className={classes['thread-panel']}>
      <div className={classes.container}>
        <div className={classes.handle} onClick={toggleShowPlayList} />

        <div className={classes.contents}>
          <h2 className={classes.title} onClick={toggleShowPlayList}>
            {props.thread.title}
          </h2>

          <p className={classes.info}>
            {
              props.users.find(
                user => user.id === props.thread.user_id!.split('/')[1]
              )?.username
            }
            ・{sanitizedDate(props.thread.timestamp as any)}
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

          <PlayList open={props.showPlayList} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    users: state.users.users,
    voices: state.voices.voices,
    threadPlaying: state.threads.threadPlaying,
    showPlayList: state.components.showPlayList
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setDrawerState: (side: DrawerSide, open: boolean) =>
      dispatch(setDrawerState(side, open)),
    setActiveThread: (thread: ThreadJson | null) =>
      dispatch(setActiveThread(thread)),
    loadVoices: (threadId: string) => dispatch(loadVoices(threadId)),
    stopPlayingThread: () => dispatch(stopPlayingThread()),
    toggleThreadPlaying: () => dispatch(toggleThreadPlaying()),
    setShowPlayListState: (showPlayList: boolean) =>
      dispatch(setShowPlayListState(showPlayList)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPanel);
