import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Map from 'components/Map';
import Main from 'components/Main';
import { history, IRootState, ThunkResult } from './store';
import { loadThreads } from 'redux/threads/thunks';
import { loadUsers } from 'redux/users/thunks';
// import { audioRecorder, AudioRecorder } from 'utils/audioRecorder';
import classes from './App.module.scss';
// import { setRecorder } from 'redux/audios/actions';

interface IAppProps {
  loadThreads: () => void;
  loadUsers: () => void;
  // setRecorder: (recorder?: AudioRecorder) => void;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  const initializeRecorder = async () => {
    console.log('initializeRecorder()'); // tslint:disable-line
    // const recorder = await audioRecorder();
    // props.setRecorder(recorder);
  };

  props.loadThreads();
  props.loadUsers();

  initializeRecorder();

  return (
    <ConnectedRouter history={history}>
      <div className={classes.app}>
        <Map />
        <Main />
      </div>
    </ConnectedRouter>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    loadThreads: () => dispatch(loadThreads()),
    loadUsers: () => dispatch(loadUsers())
    // setRecorder: (recorder?: AudioRecorder) => dispatch(setRecorder(recorder))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
