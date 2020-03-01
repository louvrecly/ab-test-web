import React from 'react';
import HeadNav from './Components/HeadNav';
import RecordButton from './Components/RecordButton';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <HeadNav title="吹水台" />
      <RecordButton />
    </div>
  );
};

export default App;
