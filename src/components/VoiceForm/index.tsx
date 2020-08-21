import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconButton } from '@material-ui/core';
import AudioPlayer from 'components/AudioPlayer';
import { RiFileAddLine } from 'react-icons/ri';
import { FaMusic, FaCheck } from 'react-icons/fa';
import { Thread } from 'models';
import { VoiceFormData } from 'redux/components/state';
import { IRootState, ThunkResult } from 'store';
import { connect } from 'react-redux';
import { AudioData } from 'utils/audioRecorder';
import classes from './styles.module.scss';

interface IVoiceFormProps {
  audio: AudioData | undefined;
  thread?: Thread;
}

const VoiceForm: React.FC<IVoiceFormProps> = (props: IVoiceFormProps) => {
  const { register, handleSubmit } = useForm<VoiceFormData>();

  const [value, setValue] = useState<string>(
    props.thread ? props.thread.title : ''
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const submitVoice = (voiceFormData: VoiceFormData) => {
    console.log({ voiceFormData }); // tslint:disable-line
  };

  return (
    <div className={classes['voice-form']}>
      <div className={classes.container}>
        <div className={classes.handle} />

        <form
          id="voice-form"
          className={classes.form}
          onSubmit={handleSubmit(submitVoice)}
        >
          <ul className={classes.fields}>
            {props.thread ? null : (
              <li className={classes.field}>
                <label className={classes.label} htmlFor="channel">
                  選擇版區：
                </label>

                <select
                  className={classes.select}
                  name="channel"
                  ref={register}
                >
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
                name="threadTitle"
                ref={register({ required: true })}
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

            <IconButton
              className={classes.submit}
              aria-label="submit"
              type="submit"
              form="voice-form"
            >
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
