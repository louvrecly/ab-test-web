import React from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Map from 'components/Map';
import Main from 'components/Main';
import { history, IRootState, ThunkResult } from './store';
import { getThreads } from 'redux/threads/thunks';
import classes from './App.module.scss';

interface IAppProps {
  getThreads: () => void;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  props.getThreads();

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
    getThreads: () => dispatch(getThreads())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
