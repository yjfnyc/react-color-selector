import React from 'react';

function SelectedColor() {
    let style={
        display: "inline-block",
        border: "1px solid black",
        width: 400,
        height: 500,
        margin: "auto"
    }
  return (
    <div style={style} className="SelectedColor">
      <h1>Selected Color</h1>
    </div>
  );
}

export default SelectedColor;