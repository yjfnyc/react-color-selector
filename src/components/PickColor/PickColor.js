import React from 'react';
import Palette from "./Palette";
import {changeColorCode} from '../../actions';
import {connect} from 'react-redux';

function PickColor(props) {
    let style={
        display: "inline-block",
        width: 400,
        height: 500,
        verticalAlign: "top",
        margin: "auto 20px 32px 20px"
    }
  return (
    <div style={style}  className="SelectedColor">
      <Palette {...props} />
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
      colorCode: state.colorCode
  }
}

let mapDispatchToProps = dispatch => {
  return {
    dispatchColorCode: (code) => dispatch(changeColorCode(code))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PickColor);