import React, { useEffect } from 'react';
import clsx from 'clsx';
import { SwipeableDrawer } from '@material-ui/core';
import { LocationJson } from 'models';
import { IRootState, ThunkResult } from 'store';
import { DrawerSide, DrawerState } from 'redux/components/state';
import {
  setDrawerState,
  setShowRecordButtonState,
  embedRecordButton
} from 'redux/components/actions';
import { setGeolocation } from 'redux/geolocation/actions';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IDrawerContainerProps {
  side: DrawerSide;
  drawerState: DrawerState;
  disableSwipe?: boolean;
  children: React.ReactNode;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
  embedRecordButton: (embeddedRecordButton: boolean) => void;
  setGeolocation: (geolocation: LocationJson | null) => void;
}

const DrawerContainer: React.FC<IDrawerContainerProps> = ({
  side,
  drawerState,
  disableSwipe,
  children,
  setDrawerState,
  setShowRecordButtonState,
  embedRecordButton,
  setGeolocation
}: IDrawerContainerProps) => {
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
    setShowRecordButtonState(!open);
    setDrawerState(side, open);
    embedRecordButton(open); /* reset RecordButton */
  };

  useEffect(() => {
    if (!drawerState.bottom) {
      setGeolocation(null);
    }
  }, [drawerState.bottom, setGeolocation]);

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
      dispatch(setDrawerState(side, open)),
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton)),
    embedRecordButton: (embeddedRecordButton: boolean) =>
      dispatch(embedRecordButton(embeddedRecordButton)),
    setGeolocation: (geolocation: LocationJson | null) =>
      dispatch(setGeolocation(geolocation))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);
