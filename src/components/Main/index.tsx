import React from 'react';
import HeadNav from 'components/HeadNav';
import RecordButton from 'components/RecordButton';
import DrawerContainer from 'components/Drawer/Container';
import BottomDrawerContents from 'components/Drawer/Contents/Bottom';
import { ThreadJson } from 'models';
import { IRootState, ThunkResult } from 'store';
import { DrawerState } from 'redux/components/state';
import { connect } from 'react-redux';
import classes from './styles.module.scss';

interface IMainProps {
  drawerState: DrawerState;
  activeThread: ThreadJson | null;
  showRecordButton: boolean;
  isRecording: boolean;
}

const Main: React.FC<IMainProps> = (props: IMainProps) => {
  return (
    <div className={classes.main}>
      <HeadNav />

      {props.showRecordButton && <RecordButton />}

      <DrawerContainer side="left">
        <p>drawer contents</p>
      </DrawerContainer>

      <DrawerContainer side="bottom" disableSwipe={props.activeThread === null}>
        <BottomDrawerContents
          isRecording={props.isRecording}
          activeThread={props.activeThread}
        />
      </DrawerContainer>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    drawerState: state.components.drawerState,
    activeThread: state.threads.activeThread,
    showRecordButton: state.components.showRecordButton,
    isRecording: state.audios.isRecording
  };
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
