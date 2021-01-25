import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import ThreadPanel from 'components/ThreadPanel';
import ThreadRoute from 'components/Routes/ThreadRoute';
import NewVoice from 'components/NewVoice';
import { REACT_APP_URL_PREFIX } from 'variables';

const BottomDrawerContents: React.FC = () => {
  const history = useHistory();

  /* Navigate to main page on closing the bottom drawer */
  useEffect(() => {
    return () => {
      const pathname = REACT_APP_URL_PREFIX as string;
      history.push(pathname);
    }
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div>
      <Switch>
        <Route path={`${REACT_APP_URL_PREFIX}/threads/new`} children={<NewVoice thread={null} />} />

        <ThreadRoute path={`${REACT_APP_URL_PREFIX}/threads/:threadId/new`} component={NewVoice} />

        <ThreadRoute path={`${REACT_APP_URL_PREFIX}/threads/:threadId`} component={ThreadPanel} />
      </Switch>
    </div>
  );
};

export default BottomDrawerContents;
