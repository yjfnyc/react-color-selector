import React from 'react';

function PickColor() {
    let style={
        display: "inline-block",
        border: "1px solid black",
        width: 400,
        height: 500,
        margin: "auto 20px"
    }
  return (
    <div style={style} className="SelectedColor">
      <h1>Pick a Color</h1>
    </div>
  );
}

export default PickColor;