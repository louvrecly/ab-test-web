import React from 'react';
import VoicePlayer from 'components/VoicePlayer';
import RecordButton from 'components/RecordButton';
import { Voice } from 'models';
import { IRootState, ThunkResult } from 'store';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IPlayListProps {
  voices: Array<Voice>;
}

const PlayList: React.FC<IPlayListProps> = (props: IPlayListProps) => {
  return (
    <div className={classes['playing-panel']}>
      <ul className={classes.voices}>
        {props.voices.map((voice, idx) => (
          <li key={idx}>
            <VoicePlayer voice={voice} />
          </li>
        ))}
      </ul>

      <RecordButton />
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
