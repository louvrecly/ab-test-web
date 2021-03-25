import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from 'components/Main';
import Login from 'components/Auth/Login';
import { REACT_APP_URL_PREFIX } from 'variables';
import classes from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Switch>
        <Route path='/' exact={true} component={() => <Redirect to={REACT_APP_URL_PREFIX as string} />} />

        <Route path={`${REACT_APP_URL_PREFIX}/login`} component={Login} />

        <Route path={REACT_APP_URL_PREFIX as string} component={Main} />
      </Switch>
    </div>
  );
};

export default App;
