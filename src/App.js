import React from 'react';
import './App.css';
import PickColor from  './components/PickColor/PickColor';
import SelectedColor from './components/SelectedColor/SelectedColor';

function App() {
  return (
    <div className="App">
      <PickColor />
      <SelectedColor />
    </div>
  );
}

export default App;
