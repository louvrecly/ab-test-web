import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { SwipeableDrawer } from '@material-ui/core';
import { IRootState, ThunkResult } from 'store';
import { DrawerSide, DrawerState } from 'redux/components/state';
import { setDrawerState } from 'redux/components/actions';
import classes from './styles.module.scss';

interface IDrawerContainerProps {
  side: DrawerSide;
  drawerState: DrawerState;
  disableSwipe?: boolean;
  children: React.ReactNode;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
}

const DrawerContainer: React.FC<IDrawerContainerProps> = ({
  side,
  drawerState,
  disableSwipe,
  children,
  setDrawerState
}: IDrawerContainerProps) => {
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) return;
    setDrawerState(side, open);
  };

  return (
    <SwipeableDrawer
      anchor={side}
      open={drawerState[side]}
      disableSwipeToOpen={disableSwipe}
      onClose={toggleDrawer(side, false)}
      onOpen={toggleDrawer(side, true)}
      className={clsx({
        [classes.drawer]: true,
        [classes['drawer-horizontal']]: side === 'left' || side === 'right'
      })}
    >
      {children}
    </SwipeableDrawer>
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

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
