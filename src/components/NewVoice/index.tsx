import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import TimerBar from 'components/TimerBar';
import VoiceForm from 'components/VoiceForm';
import { IRootState, ThunkResult } from 'store';
import { setIsRecordingState } from 'redux/audios/actions';
import { setGeolocation } from 'redux/geolocation/actions';
import { LocationJson, ThreadJson } from 'models';
import { clearGeoLocationWatcher, getGeolocation } from 'utils/geolocation';

interface INewVoiceProps {
  thread: ThreadJson | null;
  isRecording: boolean;
  setIsRecordingState: (isRecording: boolean) => void;
  setGeolocation: (geolocation: LocationJson | null) => void;
}

const NewVoice: React.FC<INewVoiceProps> = (props: INewVoiceProps) => {
  const location = useLocation();
  const [voiceLocation, saveVoiceLocation] = useState<LocationJson | null>(null);

  /* Start recording and temporarily save user location in local state */
  useEffect(() => {
    props.setIsRecordingState(true);
    const watchId = getGeolocation(saveVoiceLocation);

    /* Clear watcher on geolocation and set geolocation to null on cleanup */
    return () => {
      clearGeoLocationWatcher(watchId);
      props.setGeolocation(null);
    };
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  /* Store user location in redux store when recording ends */
  useEffect(() => {
    if (!props.isRecording && location.pathname.endsWith('/new')) props.setGeolocation(voiceLocation);
  }, [props.isRecording]); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    props.isRecording
      ? <TimerBar limit={props.thread ? 900 : 9900} />
      : <VoiceForm thread={props.thread} />
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    isRecording: state.audios.isRecording
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setIsRecordingState: (isRecording: boolean) =>
      dispatch(setIsRecordingState(isRecording)),
    setGeolocation: (geolocation: LocationJson | null) =>
      dispatch(setGeolocation(geolocation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewVoice);
