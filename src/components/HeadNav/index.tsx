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
import { ThunkResult, IRootState } from 'store';
import { DrawerSide, DrawerState } from 'redux/components/state';
import {
  setDrawerState,
  setShowRecordButtonState
} from 'redux/components/actions';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IHeadNavProps {
  channel: string;
  drawerState: DrawerState;
  setDrawerState: (side: DrawerSide, open: boolean) => void;
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const HeadNav: React.FC<IHeadNavProps> = (props: IHeadNavProps) => {
  const toggleLeftDrawer = () => {
    const open = !props.drawerState.left;
    props.setDrawerState('left', open);
  };

  return (
    <AppBar className={classes['head-nav']} position="absolute">
      <Toolbar>
        <IconButton
          className={`${classes.menu} ${classes['nav-menu']}`}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleLeftDrawer}
        >
          <MdFormatListBulleted />
        </IconButton>

        <ButtonGroup className={classes.switch}>
          <Button
            className={`${classes.prev} ${classes['stage-previous']}`}
            aria-label="previous"
          >
            <MdChevronLeft />
          </Button>

          <Button className={classes.stage} color="inherit">
            {props.channel}
          </Button>

          <Button
            className={`${classes.next} ${classes['stage-next']}`}
            aria-label="next"
          >
            <MdChevronRight />
          </Button>
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

const mapStateToProps = (state: IRootState) => {
  return {
    channel: state.channels.channel,
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

export default connect(mapStateToProps, mapDispatchToProps)(HeadNav);
