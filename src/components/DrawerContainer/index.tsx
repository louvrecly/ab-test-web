import React from 'react';
import clsx from 'clsx';
import { SwipeableDrawer } from '@material-ui/core';
import { DrawerSide } from 'redux/components/state';
import classes from './styles.module.scss';

interface IDrawerContainerProps {
  side: DrawerSide;
  open: boolean;
  disableSwipe?: boolean;
  children: React.ReactNode;
  toggleDrawer: (
    side: DrawerSide,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const DrawerContainer: React.FC<IDrawerContainerProps> = (
  props: IDrawerContainerProps
) => {
  return (
    <SwipeableDrawer
      anchor={props.side}
      open={props.open}
      disableSwipeToOpen={props.disableSwipe}
      onClose={props.toggleDrawer(props.side, false)}
      onOpen={props.toggleDrawer(props.side, true)}
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

export default DrawerContainer;
