import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import { DrawerSide } from '../models/models';
import classes from './DrawerContainer.module.scss';
import classNames from 'classnames';

interface IDrawerContainerProps {
  side: DrawerSide;
  open: boolean;
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
      open={props.open}
      onClose={props.toggleDrawer(props.side, false)}
      onOpen={props.toggleDrawer(props.side, true)}
      className={classNames({
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