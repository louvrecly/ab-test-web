import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Map from 'components/Map';
import Main from 'components/Main';
import { history, IRootState, ThunkResult } from './store';
import { getThreads } from 'redux/threads/thunks';
import { getUsers } from 'redux/users/thunks';
import classes from './App.module.scss';

interface IAppProps {
  getThreads: () => void;
  getUsers: () => void;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  props.getThreads();
  props.getUsers();

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
    getThreads: () => dispatch(getThreads()),
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
