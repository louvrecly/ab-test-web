import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  ButtonGroup,
  Button
} from '@material-ui/core';
import { DrawerState, DrawerSide } from 'redux/components/state';
import DrawerContainer from 'components/DrawerContainer';
import classes from './styles.module.scss';
import { IRootState, ThunkResult } from 'store';
import { setDrawerState } from 'redux/components/actions';
import { connect } from 'react-redux';

interface IHeadNavProps {
  title: string;
  drawerState: DrawerState;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
}

const HeadNav: React.FC<IHeadNavProps> = (props: IHeadNavProps) => {

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

      <DrawerContainer
        side="bottom"
        open={props.drawerState.bottom}
        toggleDrawer={toggleDrawer}
      >
        <p>drawer contents</p>
      </DrawerContainer>

      <DrawerContainer
        side="left"
        open={props.drawerState.left}
        toggleDrawer={toggleDrawer}
      >
        <p>drawer contents</p>
      </DrawerContainer>
    </AppBar>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeadNav);
