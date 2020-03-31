import React from 'react';
import HeadNav from 'components/HeadNav';
import RecordButton from 'components/RecordButton';
import DrawerContainer from 'components/DrawerContainer';
import ThreadPanel from 'components/ThreadPanel';
import { IRootState, ThunkResult } from 'store';
import { DrawerState, DrawerSide } from 'redux/components/state';
import { setDrawerState } from 'redux/components/actions';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IMainProps {
  drawerState: DrawerState;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    props.setDrawerState(side, open);
  };

  return (
    <div className={classes.main}>
      <HeadNav title="吹水台" toggleDrawer={toggleDrawer} />

      <RecordButton />

      <DrawerContainer
        side="left"
        open={props.drawerState.left}
        toggleDrawer={toggleDrawer}
      >
        <p>drawer contents</p>
      </DrawerContainer>

      <DrawerContainer
        side="bottom"
        open={props.drawerState.bottom}
        toggleDrawer={toggleDrawer}
      >
        <ThreadPanel />
      </DrawerContainer>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    drawerState: state.components.drawerState
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setDrawerState: (side: DrawerSide, open: boolean) =>
      dispatch(setDrawerState(side, open))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
