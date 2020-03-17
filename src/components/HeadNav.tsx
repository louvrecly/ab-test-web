import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button
} from '@material-ui/core';
import DrawerContainer from './DrawerContainer';
import classes from './HeadNav.module.scss';
import { DrawerSide } from '../models/models';

interface IHeadNavProps {
  title: string;
}

const HeadNav: React.FC<IHeadNavProps> = ({ title }: IHeadNavProps) => {
  const [state, setState] = useState({
    top: false,
    right: false,
    bottom: false,
    left: false
  });

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
    setState({ ...state, [side]: open });
  };

  return (
    <AppBar className={classes['head-nav']} position="absolute">
      <Toolbar>
        <IconButton
          className={`${classes.menu} ${classes['nav-button']}`}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer('left', true)}
        >
          三
        </IconButton>

        <ButtonGroup className={classes.switch}>
          <IconButton
            className={`${classes.prev} ${classes['switch-button']}`}
            aria-label="previous"
          >
            &lt;
          </IconButton>

          <Button className={classes.title} color="inherit">
            {title}
          </Button>

          <IconButton
            className={`${classes.next} ${classes['switch-button']}`}
            aria-label="next"
          >
            &gt;
          </IconButton>
        </ButtonGroup>

        <IconButton
          className={`${classes.search} ${classes['nav-button']}`}
          edge="end"
          color="inherit"
          aria-label="search"
        >
          Q
        </IconButton>
      </Toolbar>

      <DrawerContainer
        side="left"
        open={state.left}
        toggleDrawer={toggleDrawer}
      >
        <p>drawer contents</p>
      </DrawerContainer>
    </AppBar>
  );
};

export default HeadNav;
