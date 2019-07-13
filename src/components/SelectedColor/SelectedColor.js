import React from 'react';
import ColorBoard from './ColorBoard';

function SelectedColor() {
    let style={
        display: "inline-block",
        border: "1px solid black",
        width: 400,
        height: 500,
        "vertical-align": "top",
        margin: "auto 20px"
    }
  return (
    <div style={style} className="SelectedColor">
      <h2>Selected Color</h2>
      <ColorBoard />
    </div>
  );
}

export default SelectedColor;