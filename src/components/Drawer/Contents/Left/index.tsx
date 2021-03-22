import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState, ThunkResult } from 'store';
import { setShowRecordButtonState } from 'redux/components/actions';
import { REACT_APP_URL_PREFIX } from 'variables';
import classes from './styles.module.scss';

interface ILeftDrawerContentsProps {
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const LeftDrawerContents: React.FC<ILeftDrawerContentsProps> = (props: ILeftDrawerContentsProps) => {
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
        <Link className={classes.link} to={`${REACT_APP_URL_PREFIX}/login`}>
          <button className={classes.button}>登入</button>
        </Link>
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
