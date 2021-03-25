import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from 'components/Main';
import Login from 'components/Auth/Login';
import Register from 'components/Auth/Register';
import { subscribeToAuth } from 'utils/firebase';
import { REACT_APP_URL_PREFIX } from 'variables';
import classes from './App.module.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    /* Set up listener on auth state change to update user in auth redux store */
    const unsubscribe = subscribeToAuth(user => dispatch({ type: 'SET_USER', user }));
    return unsubscribe;
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div className={classes.app}>
      <Switch>
        <Route path='/' exact={true} component={() => <Redirect to={REACT_APP_URL_PREFIX as string} />} />

        <Route path={`${REACT_APP_URL_PREFIX}/login`} component={Login} />

        <Route path={`${REACT_APP_URL_PREFIX}/register`} component={Register} />

        <Route path={REACT_APP_URL_PREFIX as string} component={Main} />
      </Switch>
    </div>
  );
};

export default App;
