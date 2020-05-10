import React from 'react';
import clsx from 'clsx';
import VoicePlayer from 'components/VoicePlayer';
import { Voice } from 'models';
import { IRootState, ThunkResult } from 'store';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IPlayListProps {
  open: boolean;
  voices: Array<Voice>;
}

const PlayList: React.FC<IPlayListProps> = (props: IPlayListProps) => {
  return (
    <div
      className={clsx({
        [classes['play-list']]: true,
        [classes.open]: props.open
      })}
    >
      <ul className={classes.voices}>
        {props.voices.map((voice, idx) => (
          <li key={idx}>
            <VoicePlayer voice={voice} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    voices: state.voices.voices
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);
