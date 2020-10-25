import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { IconButton } from '@material-ui/core';
import AudioPlayer from 'components/AudioPlayer';
import { RiFileAddLine } from 'react-icons/ri';
import { FaMusic, FaCheck } from 'react-icons/fa';
import { ThreadJson, VoiceJson, LocationJson } from 'models';
import { REACT_APP_URL_PREFIX } from 'variables';
import { VoiceFormData } from 'redux/components/state';
import { IRootState, ThunkResult } from 'store';
import { createThread } from 'redux/threads/thunks';
import { createVoice, loadVoices } from 'redux/voices/thunks';
import { setGeolocation } from 'redux/geolocation/actions';
import { setShowRecordButtonState } from 'redux/components/actions';
import { connect } from 'react-redux';
import { AudioData } from 'utils/audioRecorder';
import { getTimestampJson } from 'utils/time';
import classes from './styles.module.scss';

interface IVoiceFormProps {
  audio: AudioData | undefined;
  thread: ThreadJson | null;
  geolocation: LocationJson | null;
  createThread: (newThread: ThreadJson) => Promise<ThreadJson | undefined>;
  createVoice: (
    newVoice: VoiceJson,
    audioBlob: Blob
  ) => Promise<VoiceJson | undefined>;
  setGeolocation: (geolocation: LocationJson | null) => void;
  loadVoices: (threadId: string) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const VoiceForm: React.FC<IVoiceFormProps> = (props: IVoiceFormProps) => {
  const { register, handleSubmit } = useForm<VoiceFormData>();
  const inputRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const history = useHistory();

  const [value, setValue] = useState<string>(
    props.thread ? props.thread.title : ''
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const submitVoice = async (voiceFormData: VoiceFormData) => {
    if (props.audio) {
      const { threadTitle } = voiceFormData;

      const timestamp = getTimestampJson();
      const location = props.geolocation;

      if (!location) return console.log('Location is not available!'); /* tslint:disable-line */
      let threadId = '';
      if (!props.thread) {
        const newThread: ThreadJson = {
          is_active: true,
          title: threadTitle,
          user_id: 'Z1aO565FJD1ZmaOqI9Mi', // TODO: replace hard coded user_id with logged in user.id from redux store
          color_code: 'Y', // TODO: replace hard coded color_code with color_code state from redux store
          bookmarked_by_users: [],
          location,
          timestamp
        };

        const thread = (await props.createThread(newThread)) as ThreadJson;
        threadId = thread.id as string;
      } else {
        threadId = props.thread.id as string;
      }

      const { audioUrl, audioBlob } = props.audio;
      const newVoice: VoiceJson = {
        is_active: true,
        thread_id: threadId,
        user_id: 'Z1aO565FJD1ZmaOqI9Mi', // TODO: replace hard coded user_id with logged in user.id from redux store
        voice_url: audioUrl,
        liked_by_users: [],
        location,
        timestamp
      };

      const voice = await props.createVoice(newVoice, audioBlob);
      const { thread_id } = voice as VoiceJson;

      props.setGeolocation(null);
      const pathname = `${REACT_APP_URL_PREFIX}/${thread_id}`;
      history.push(pathname);
      props.loadVoices(threadId);
      props.setShowRecordButtonState(true);
    } else {
      console.log('No voice has been recorded yet!'); /* tslint:disable-line */
    }
  };

  /* set focus on thread title input on render */
  useEffect(() => {
    if (inputRef.current && !props.thread) {
      inputRef.current.focus();
    }
  }, [props.thread]);

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
                ref={e => {
                  register(e, { required: true });
                  inputRef.current = e;
                }}
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
    audio: state.audios.audio,
    geolocation: state.geolocation.geolocation
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    createThread: (newThread: ThreadJson) => dispatch(createThread(newThread)),
    createVoice: (newVoice: VoiceJson, audioBlob: Blob) =>
      dispatch(createVoice(newVoice, audioBlob)),
    setGeolocation: (geolocation: LocationJson | null) =>
      dispatch(setGeolocation(geolocation)),
    loadVoices: (threadId: string) => dispatch(loadVoices(threadId)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VoiceForm);
