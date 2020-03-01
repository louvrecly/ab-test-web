import React from 'react';
import { IconButton } from '@material-ui/core';
import './RecordButton.css';

const RecordButton: React.FC = () => {
  return (
    <div className="record-button">
      <IconButton className="button" aria-label="record">
        9up
      </IconButton>
    </div>
  );
};

export default RecordButton;
