import React from 'react';
import { Redirect, Route, RouteProps, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { IRootState, ThunkResult } from 'store';
import { ThreadJson } from 'models';
import { REACT_APP_URL_PREFIX, ThreadRouteParam } from 'variables';

interface IThreadRouteProps extends RouteProps  {
  component: React.ElementType<{ thread: ThreadJson }>
  threads: Array<ThreadJson>;
}

const ThreadRoute: React.FC<IThreadRouteProps> = ({ component, threads, ...rest }: IThreadRouteProps) =>  {
  const match = useRouteMatch({
    path: `${REACT_APP_URL_PREFIX}/threads/:threadId`
  });

  const { threadId } = match?.params as ThreadRouteParam;
  const thread = threads.find(thread => thread.id === threadId);
  const Component = component;

  return (
    <Route
      {...rest}
      render={() => thread
        ? <Component thread={thread} />
        : <Redirect to={REACT_APP_URL_PREFIX as string} />
      }
    />
  );
}

const mapStateToProps = (state: IRootState) => {
  return {
    threads: state.threads.threads
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadRoute);
