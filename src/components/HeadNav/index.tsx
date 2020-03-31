import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button
} from '@material-ui/core';
import { DrawerSide } from 'redux/components/state';
import classes from './styles.module.scss';

interface IHeadNavProps {
  title: string;
  toggleDrawer: (
    side: DrawerSide,
    open: boolean
  ) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const HeadNav: React.FC<IHeadNavProps> = (props: IHeadNavProps) => {
  return (
    <AppBar className={classes['head-nav']} position="absolute">
      <Toolbar>
        <IconButton
          className={`${classes.menu} ${classes['nav-button']}`}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={props.toggleDrawer('left', true)}
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
            {props.title}
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
    </AppBar>
  );
};

export default HeadNav;
