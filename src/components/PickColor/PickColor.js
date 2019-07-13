import React from 'react';
import Palette from "./Palette";

function PickColor() {
    let style={
        display: "inline-block",
        border: "1px solid black",
        width: 400,
        height: 500,
        verticalAlign: "top",
        margin: "auto 20px"
    }
  return (
    <div style={style} className="SelectedColor">
      <Palette />
    </div>
  );
}

export default PickColor;