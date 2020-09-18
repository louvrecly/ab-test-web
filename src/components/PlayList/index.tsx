import React from 'react';
import clsx from 'clsx';
import VoiceInfo from 'components/VoiceInfo';
import { VoiceJson } from 'models';
import { IRootState, ThunkResult } from 'store';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IPlayListProps {
  open: boolean;
  voices: Array<VoiceJson>;
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
            <VoiceInfo voice={voice} />
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
