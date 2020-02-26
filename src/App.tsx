import React from 'react';
import HeadNav from './Components/HeadNav';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <HeadNav title="head nav title" />
      App
    </div>
  );
}

export default App;
