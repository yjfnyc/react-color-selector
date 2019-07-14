import React from 'react';
import Palette from "./Palette";
import {changeColorCode} from '../../actions';
import {connect} from 'react-redux';

function PickColor(dispatchColorCode) {
    let style={
        display: "inline-block",
        border: "1px solid black",
        width: 400,
        height: 500,
        verticalAlign: "top",
        margin: "auto 20px"
    }
  return (
    <div style={style}  className="SelectedColor">
      <Palette {...dispatchColorCode} />
    </div>
  );
}

let mapStateToProps = state => ({});

let mapDispatchToProps = dispatch => {
  return {
    dispatchColorCode: (code) => dispatch(changeColorCode(code))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PickColor);