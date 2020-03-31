import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button
} from '@material-ui/core';
import { FiSearch } from 'react-icons/fi';
import {
  MdFormatListBulleted,
  MdChevronLeft,
  MdChevronRight
} from 'react-icons/md';
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
          className={`${classes.menu} ${classes['nav-menu']}`}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={props.toggleDrawer('left', true)}
        >
          <MdFormatListBulleted />
        </IconButton>

        <ButtonGroup className={classes.switch}>
          <IconButton
            className={`${classes.prev} ${classes['stage-previous']}`}
            aria-label="previous"
          >
            <MdChevronLeft />
          </IconButton>

          <Button className={classes.stage} color="inherit">
            {props.title}
          </Button>

          <IconButton
            className={`${classes.next} ${classes['stage-next']}`}
            aria-label="next"
          >
            <MdChevronRight />
          </IconButton>
        </ButtonGroup>

        <IconButton
          className={`${classes.search} ${classes['nav-search']}`}
          edge="end"
          color="inherit"
          aria-label="search"
        >
          <FiSearch />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default HeadNav;
