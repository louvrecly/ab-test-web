import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import AudioPlayer from 'components/AudioPlayer';
import { RiFileAddLine } from 'react-icons/ri';
import { FaMusic, FaCheck } from 'react-icons/fa';
import { Thread } from 'models';
import { AudioData } from 'utils/audioRecorder';
import { IRootState, ThunkResult } from 'store';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IVoiceFormProps {
  audio: AudioData | undefined;
  thread?: Thread;
}

const VoiceForm: React.FC<IVoiceFormProps> = (props: IVoiceFormProps) => {
  const [value, setValue] = useState<string>(
    props.thread ? props.thread.title : ''
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <div className={classes['voice-form']}>
      <div className={classes.container}>
        <div className={classes.handle} />

        <form className={classes.form}>
          <ul className={classes.fields}>
            {props.thread ? null : (
              <li className={classes.field}>
                <label className={classes.label} htmlFor="channel">
                  選擇版區：
                </label>

                <select className={classes.select} name="channel">
                  <option className={classes.option} value="吹水台">
                    吹水台
                  </option>
                </select>
              </li>
            )}

            <li className={classes.field}>
              <label className={classes.label} htmlFor="thread">
                {`${props.thread ? '回應' : '新貼'}題目：`}
              </label>

              <input
                className={classes.input}
                name="thread"
                type="text"
                value={value}
                onChange={handleInput}
                readOnly={Boolean(props.thread)}
              />
            </li>
          </ul>

          <AudioPlayer audioUrl={props.audio?.audioUrl as string} />

          <div className={classes.control}>
            <div className={classes.buttons}>
              <IconButton className={classes.new} aria-label="new">
                <RiFileAddLine />
              </IconButton>

              <IconButton className={classes.music} aria-label="music">
                <FaMusic />
              </IconButton>
            </div>

            <IconButton className={classes.submit} aria-label="submit">
              <FaCheck />
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    audio: state.audios.audio
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VoiceForm);
