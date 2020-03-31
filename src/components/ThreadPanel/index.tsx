import React from 'react';
import { IconButton, ButtonGroup } from '@material-ui/core';
import { FaRegStar, FaPlay } from 'react-icons/fa';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { FiShare } from 'react-icons/fi';
import { Thread, User } from 'models';
import { IRootState, ThunkResult } from 'store';
import { connect } from 'react-redux';
import { sanitizedDate } from 'utils/time';
import classes from './styles.module.scss';

interface IThreadPanelProps {
  activeThread: Thread | undefined;
  users: Array<User>;
}

const ThreadPanel: React.FC<IThreadPanelProps> = (props: IThreadPanelProps) => {
  return (
    <div className={classes['thread-panel']}>
      {props.activeThread && (
        <div className={classes.container}>
          <div className={classes.record} />

          <div className={classes.contents}>
            <h2 className={classes.title}>{props.activeThread.title}</h2>

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
                className={`${classes.search} ${classes['control-star']}`}
                color="inherit"
                aria-label="star"
              >
                <FaRegStar />
              </IconButton>

              <ButtonGroup>
                <IconButton
                  className={`${classes.search} ${classes['thread-previous']}`}
                  color="inherit"
                  aria-label="previous"
                >
                  <MdSkipPrevious />
                </IconButton>

                <IconButton
                  className={`${classes.search} ${classes['thread-play']}`}
                  color="inherit"
                  aria-label="play"
                >
                  <FaPlay />
                </IconButton>

                <IconButton
                  className={`${classes.search} ${classes['thread-next']}`}
                  color="inherit"
                  aria-label="next"
                >
                  <MdSkipNext />
                </IconButton>
              </ButtonGroup>

              <IconButton
                className={`${classes.search} ${classes['control-share']}`}
                edge="end"
                color="inherit"
                aria-label="share"
              >
                <FiShare />
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    activeThread: state.threads.activeThread,
    users: state.users.users
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPanel);
