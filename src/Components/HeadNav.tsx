import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button
} from '@material-ui/core';
import classes from './HeadNav.module.scss';

interface IHeadNavProps {
  title: string;
}

const HeadNav: React.FC<IHeadNavProps> = ({ title }: IHeadNavProps) => {
  return (
    <AppBar className={classes['head-nav']} position="absolute">
      <Toolbar>
        <IconButton
          className={`${classes.menu} ${classes['nav-button']}`}
          edge="start"
          color="inherit"
          aria-label="menu"
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
    </AppBar>
  );
};

export default HeadNav;
