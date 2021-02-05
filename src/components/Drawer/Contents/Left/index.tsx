import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IRootState, ThunkResult } from 'store';
import { setShowRecordButtonState } from 'redux/components/actions';
import { REACT_APP_URL_PREFIX } from 'variables';

interface ILeftDrawerContentsProps {
  setShowRecordButtonState: (showRecordButton: boolean) => void;
}

const LeftDrawerContents: React.FC<ILeftDrawerContentsProps> = (props: ILeftDrawerContentsProps) => {
  const history = useHistory();

  useEffect(() => {
    /* Hide RecordButton on render */
    props.setShowRecordButtonState(false);
    return () => {
      /* Navigate to main page on cleanup */
      const pathname = REACT_APP_URL_PREFIX as string;
      history.push(pathname);
    }
  }, []); /* eslint-disable-line react-hooks/exhaustive-deps */

  return (
    <div>
      Left Drawer Contents
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
