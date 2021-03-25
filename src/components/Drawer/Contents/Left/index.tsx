import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IRootState, ThunkResult } from 'store';
import { setShowRecordButtonState } from 'redux/components/actions';
import { logOut } from 'utils/firebase';
import { REACT_APP_URL_PREFIX } from 'variables';
import classes from './styles.module.scss';

interface ILeftDrawerContentsProps {
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const LeftDrawerContents: React.FC<ILeftDrawerContentsProps> = (props: ILeftDrawerContentsProps) => {
  const user = useSelector((state: IRootState) => state.auth.user);
  const history = useHistory();

  const handleButtonClick = async () => {
    if (user) await logOut();

    const pathname = `${REACT_APP_URL_PREFIX}/login`;
    history.push(pathname);
  }

  useEffect(() => {
    /* Hide RecordButton on render */
    props.setShowRecordButtonState(false);
    return () => {
      props.setShowRecordButtonState(true);
    }
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div className={classes.left}>
      <div className={classes.container}>
        <button className={classes.button} onClick={handleButtonClick}>登{user ? '出' : '入'}</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {};
};

const mapDispatchToProps = (dispatch: ThunkResult) => {
  return {
    setShowRecordButtonState: (showRecordButton: boolean) =>
      dispatch(setShowRecordButtonState(showRecordButton))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftDrawerContents);
