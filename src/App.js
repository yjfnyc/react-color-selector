import React from 'react';
import './App.css';
import PickColor from  './PickColor/PickColor';
import SelectedColor from './SelectedColor/SelectedColor';

function App() {
  return (
    <div className="App">
      <PickColor />
      <SelectedColor />
    </div>
  );
}

export default App;
