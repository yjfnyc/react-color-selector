import React from 'react';
import logo from './logo.svg';
import './App.css';
import PickColor from  './PickColor';
import SelectedColor from './SelectedColor';

function App() {
  return (
    <div className="App">
      <PickColor />
      <SelectedColor />
    </div>
  );
}

export default App;
