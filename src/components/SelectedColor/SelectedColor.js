import React from 'react';
import {connect} from 'react-redux';
import ColorBoard from './ColorBoard';
import ColorLabel from './ColorLabel';

function SelectedColor(colorCode) {
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
      <h2>Selected Color</h2>
      <ColorBoard {...colorCode} />
      <ColorLabel {...colorCode} />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
      colorCode: state.colorCode
  }
}

let mapDispatchToProps = ()=>({});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedColor);
