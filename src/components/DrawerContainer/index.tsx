import React from 'react';
import clsx from 'clsx';
import { SwipeableDrawer } from '@material-ui/core';
import { IRootState, ThunkResult } from 'store';
import { DrawerSide, DrawerState } from 'redux/components/state';
import {
  setDrawerState,
  setShowRecordButtonState
} from 'redux/components/actions';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IDrawerContainerProps {
  side: DrawerSide;
  drawerState: DrawerState;
  disableSwipe?: boolean;
  children: React.ReactNode;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const DrawerContainer: React.FC<IDrawerContainerProps> = (
  props: IDrawerContainerProps
) => {
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
    props.setShowRecordButtonState(!open);
    props.setDrawerState(side, open);
  };

  return (
    <SwipeableDrawer
      anchor={props.side}
      open={props.drawerState[props.side]}
      disableSwipeToOpen={props.disableSwipe}
      onClose={toggleDrawer(props.side, false)}
      onOpen={toggleDrawer(props.side, true)}
      className={clsx({
        [classes.drawer]: true,
        [classes['drawer-horizontal']]:
          props.side === 'left' || props.side === 'right'
      })}
    >
      {props.children}
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
      dispatch(setDrawerState(side, open)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
