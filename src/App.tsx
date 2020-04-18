import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Map from 'components/Map';
import Main from 'components/Main';
import { history, IRootState, ThunkResult } from './store';
import { loadThreads } from 'redux/threads/thunks';
import { loadUsers } from 'redux/users/thunks';
import classes from './App.module.scss';

interface IAppProps {
  loadThreads: () => void;
  loadUsers: () => void;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  props.loadThreads();
  props.loadUsers();

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
