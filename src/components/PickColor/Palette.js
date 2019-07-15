import React,{Component} from 'react';

class Palette extends Component {
  constructor(props){
    super(props);
    this.style ={};
    this.state = {
      backgroundColor: "#f00",
      visibility: "hidden",
      left: 154,
      top: -54
    };
    this.prevewStyle = {
      width: "78px",
      height: "20px",
      margin: "auto",
      marginTop: "20px",
    };
    this.hexagonStyle = {
      visibility: "visible", 
      position: "relative", 
      width: "21px", 
      height: "21px",
      backgroundImage: "url(/asset/img_selectedcolor.gif)"
    }
  }
  
  handleChange(event){
    this.colorCode = event.target.value;
  }

  handleClick(event){
    let colorCode = event.target.alt;
    
    if(colorCode != undefined){
      let coords = event.target.coords.split(',');
      let x = parseInt(coords[10]); //minimum x of the coords
      let y = parseInt(coords[1]);  // minimum y of the coords
      let left = x + 82;
      let top = y - 204;
      this.setState({
        left: left,
        top: top
      });
      colorCode = colorCode.replace('#','');
      this.props.dispatchColorCode(colorCode);
    }
  }

  handleHover(event){
    let colorCode = event.target.alt;
    if(colorCode != undefined){
      this.setState({
        visibility: "visible",
        backgroundColor: colorCode
      });
    }
  }

handleHoverOut(event){
  this.setState({
    visibility: "hidden"
  });
}

render(){
  let style = {
    backgroundColor: this.state.backgroundColor,
    visibility: this.state.visibility
  };

  let left = this.state.left.toString();
  let top = this.state.top.toString();

  let hexagonStyle = {
    left: left + "px",
    top: top + "px"
  }
  return (
    <div style={this.style} className="Palette" >
      <h2>Select a Color</h2>
        <div>
            <img src="/asset/img_colormap.gif" useMap="#colormap" alt="colormap" />
            <map id="colormap" name="colormap" onClick={this.handleClick.bind(this)} onMouseOver={this.handleHover.bind(this)} onMouseOut={this.handleHoverOut.bind(this)}>
            <area shape="poly" coords="63,0,72,4,72,15,63,19,54,15,54,4" alt="#003366"  />
            <area shape="poly" coords="81,0,90,4,90,15,81,19,72,15,72,4" alt="#336699"  />
            <area shape="poly" coords="99,0,108,4,108,15,99,19,90,15,90,4"  alt="#3366CC"  />
            <area shape="poly" coords="117,0,126,4,126,15,117,19,108,15,108,4"   alt="#003399" />
                <area  shape="poly" coords="135,0,144,4,144,15,135,19,126,15,126,4"   alt="#000099" />
                    <area  shape="poly" coords="153,0,162,4,162,15,153,19,144,15,144,4"   alt="#0000CC" />
                        <area  shape="poly" coords="171,0,180,4,180,15,171,19,162,15,162,4"   alt="#000066" />
                            <area  shape="poly" coords="54,15,63,19,63,30,54,34,45,30,45,19"   alt="#006666" /><area  shape="poly" coords="72,15,81,19,81,30,72,34,63,30,63,19"   alt="#006699" /><area  shape="poly" coords="90,15,99,19,99,30,90,34,81,30,81,19"   alt="#0099CC" /><area  shape="poly" coords="108,15,117,19,117,30,108,34,99,30,99,19"   alt="#0066CC" /><area  shape="poly" coords="126,15,135,19,135,30,126,34,117,30,117,19"   alt="#0033CC" /><area  shape="poly" coords="144,15,153,19,153,30,144,34,135,30,135,19"   alt="#0000FF" /><area  shape="poly" coords="162,15,171,19,171,30,162,34,153,30,153,19"   alt="#3333FF" /><area  shape="poly" coords="180,15,189,19,189,30,180,34,171,30,171,19"   alt="#333399" /><area  shape="poly" coords="45,30,54,34,54,45,45,49,36,45,36,34"   alt="#669999" /><area  shape="poly" coords="63,30,72,34,72,45,63,49,54,45,54,34"   alt="#009999" /><area  shape="poly" coords="81,30,90,34,90,45,81,49,72,45,72,34"   alt="#33CCCC" /><area  shape="poly" coords="99,30,108,34,108,45,99,49,90,45,90,34"   alt="#00CCFF" /><area  shape="poly" coords="117,30,126,34,126,45,117,49,108,45,108,34"   alt="#0099FF" /><area  shape="poly" coords="135,30,144,34,144,45,135,49,126,45,126,34"   alt="#0066FF" /><area  shape="poly" coords="153,30,162,34,162,45,153,49,144,45,144,34"   alt="#3366FF" /><area  shape="poly" coords="171,30,180,34,180,45,171,49,162,45,162,34"   alt="#3333CC" /><area  shape="poly" coords="189,30,198,34,198,45,189,49,180,45,180,34"   alt="#666699" /><area  shape="poly" coords="36,45,45,49,45,60,36,64,27,60,27,49"   alt="#339966" /><area  shape="poly" coords="54,45,63,49,63,60,54,64,45,60,45,49"   alt="#00CC99" /><area  shape="poly" coords="72,45,81,49,81,60,72,64,63,60,63,49"   alt="#00FFCC" /><area  shape="poly" coords="90,45,99,49,99,60,90,64,81,60,81,49"   alt="#00FFFF" /><area  shape="poly" coords="108,45,117,49,117,60,108,64,99,60,99,49"   alt="#33CCFF" /><area  shape="poly" coords="126,45,135,49,135,60,126,64,117,60,117,49"   alt="#3399FF" /><area  shape="poly" coords="144,45,153,49,153,60,144,64,135,60,135,49"   alt="#6699FF" /><area  shape="poly" coords="162,45,171,49,171,60,162,64,153,60,153,49"   alt="#6666FF" /><area  shape="poly" coords="180,45,189,49,189,60,180,64,171,60,171,49"   alt="#6600FF" /><area  shape="poly" coords="198,45,207,49,207,60,198,64,189,60,189,49"   alt="#6600CC" /><area  shape="poly" coords="27,60,36,64,36,75,27,79,18,75,18,64"   alt="#339933" /><area  shape="poly" coords="45,60,54,64,54,75,45,79,36,75,36,64"   alt="#00CC66" /><area  shape="poly" coords="63,60,72,64,72,75,63,79,54,75,54,64"   alt="#00FF99" /><area  shape="poly" coords="81,60,90,64,90,75,81,79,72,75,72,64"   alt="#66FFCC" /><area  shape="poly" coords="99,60,108,64,108,75,99,79,90,75,90,64"   alt="#66FFFF" /><area  shape="poly" coords="117,60,126,64,126,75,117,79,108,75,108,64"   alt="#66CCFF" /><area  shape="poly" coords="135,60,144,64,144,75,135,79,126,75,126,64"   alt="#99CCFF" /><area  shape="poly" coords="153,60,162,64,162,75,153,79,144,75,144,64"   alt="#9999FF" /><area  shape="poly" coords="171,60,180,64,180,75,171,79,162,75,162,64"   alt="#9966FF" /><area  shape="poly" coords="189,60,198,64,198,75,189,79,180,75,180,64"   alt="#9933FF" /><area  shape="poly" coords="207,60,216,64,216,75,207,79,198,75,198,64"   alt="#9900FF" /><area  shape="poly" coords="18,75,27,79,27,90,18,94,9,90,9,79"   alt="#006600" /><area  shape="poly" coords="36,75,45,79,45,90,36,94,27,90,27,79"   alt="#00CC00" /><area  shape="poly" coords="54,75,63,79,63,90,54,94,45,90,45,79"   alt="#00FF00" /><area  shape="poly" coords="72,75,81,79,81,90,72,94,63,90,63,79"   alt="#66FF99" /><area  shape="poly" coords="90,75,99,79,99,90,90,94,81,90,81,79"   alt="#99FFCC" /><area  shape="poly" coords="108,75,117,79,117,90,108,94,99,90,99,79"   alt="#CCFFFF" /><area  shape="poly" coords="126,75,135,79,135,90,126,94,117,90,117,79"   alt="#CCCCFF" /><area  shape="poly" coords="144,75,153,79,153,90,144,94,135,90,135,79"   alt="#CC99FF" /><area  shape="poly" coords="162,75,171,79,171,90,162,94,153,90,153,79"   alt="#CC66FF" /><area  shape="poly" coords="180,75,189,79,189,90,180,94,171,90,171,79"   alt="#CC33FF" /><area  shape="poly" coords="198,75,207,79,207,90,198,94,189,90,189,79"   alt="#CC00FF" /><area  shape="poly" coords="216,75,225,79,225,90,216,94,207,90,207,79"   alt="#9900CC" /><area  shape="poly" coords="9,90,18,94,18,105,9,109,0,105,0,94"   alt="#003300" /><area  shape="poly" coords="27,90,36,94,36,105,27,109,18,105,18,94"   alt="#009933" /><area  shape="poly" coords="45,90,54,94,54,105,45,109,36,105,36,94"   alt="#33CC33" /><area  shape="poly" coords="63,90,72,94,72,105,63,109,54,105,54,94"   alt="#66FF66" /><area  shape="poly" coords="81,90,90,94,90,105,81,109,72,105,72,94"   alt="#99FF99" /><area  shape="poly" coords="99,90,108,94,108,105,99,109,90,105,90,94"   alt="#CCFFCC" /><area  shape="poly" coords="117,90,126,94,126,105,117,109,108,105,108,94"   alt="#FFFFFF" /><area  shape="poly" coords="135,90,144,94,144,105,135,109,126,105,126,94"   alt="#FFCCFF" /><area  shape="poly" coords="153,90,162,94,162,105,153,109,144,105,144,94"   alt="#FF99FF" /><area  shape="poly" coords="171,90,180,94,180,105,171,109,162,105,162,94"   alt="#FF66FF" /><area  shape="poly" coords="189,90,198,94,198,105,189,109,180,105,180,94"   alt="#FF00FF" /><area  shape="poly" coords="207,90,216,94,216,105,207,109,198,105,198,94"   alt="#CC00CC" /><area  shape="poly" coords="225,90,234,94,234,105,225,109,216,105,216,94"   alt="#660066" /><area  shape="poly" coords="18,105,27,109,27,120,18,124,9,120,9,109"   alt="#336600" /><area  shape="poly" coords="36,105,45,109,45,120,36,124,27,120,27,109"   alt="#009900" /><area  shape="poly" coords="54,105,63,109,63,120,54,124,45,120,45,109"   alt="#66FF33" /><area  shape="poly" coords="72,105,81,109,81,120,72,124,63,120,63,109"   alt="#99FF66" /><area  shape="poly" coords="90,105,99,109,99,120,90,124,81,120,81,109"   alt="#CCFF99" /><area  shape="poly" coords="108,105,117,109,117,120,108,124,99,120,99,109"   alt="#FFFFCC" /><area  shape="poly" coords="126,105,135,109,135,120,126,124,117,120,117,109"   alt="#FFCCCC" /><area  shape="poly" coords="144,105,153,109,153,120,144,124,135,120,135,109"   alt="#FF99CC" /><area  shape="poly" coords="162,105,171,109,171,120,162,124,153,120,153,109"   alt="#FF66CC" /><area  shape="poly" coords="180,105,189,109,189,120,180,124,171,120,171,109"   alt="#FF33CC" /><area  shape="poly" coords="198,105,207,109,207,120,198,124,189,120,189,109"   alt="#CC0099" /><area  shape="poly" coords="216,105,225,109,225,120,216,124,207,120,207,109"   alt="#993399" /><area  shape="poly" coords="27,120,36,124,36,135,27,139,18,135,18,124"   alt="#333300" /><area  shape="poly" coords="45,120,54,124,54,135,45,139,36,135,36,124"   alt="#669900" /><area  shape="poly" coords="63,120,72,124,72,135,63,139,54,135,54,124"   alt="#99FF33" /><area  shape="poly" coords="81,120,90,124,90,135,81,139,72,135,72,124"   alt="#CCFF66" /><area  shape="poly" coords="99,120,108,124,108,135,99,139,90,135,90,124"   alt="#FFFF99" /><area  shape="poly" coords="117,120,126,124,126,135,117,139,108,135,108,124"   alt="#FFCC99" /><area  shape="poly" coords="135,120,144,124,144,135,135,139,126,135,126,124"   alt="#FF9999" /><area  shape="poly" coords="153,120,162,124,162,135,153,139,144,135,144,124"   alt="#FF6699" /><area  shape="poly" coords="171,120,180,124,180,135,171,139,162,135,162,124"   alt="#FF3399" /><area  shape="poly" coords="189,120,198,124,198,135,189,139,180,135,180,124"   alt="#CC3399" /><area  shape="poly" coords="207,120,216,124,216,135,207,139,198,135,198,124"   alt="#990099" /><area  shape="poly" coords="36,135,45,139,45,150,36,154,27,150,27,139"   alt="#666633" /><area  shape="poly" coords="54,135,63,139,63,150,54,154,45,150,45,139"   alt="#99CC00" /><area  shape="poly" coords="72,135,81,139,81,150,72,154,63,150,63,139"   alt="#CCFF33" /><area  shape="poly" coords="90,135,99,139,99,150,90,154,81,150,81,139"   alt="#FFFF66" /><area  shape="poly" coords="108,135,117,139,117,150,108,154,99,150,99,139"   alt="#FFCC66" /><area  shape="poly" coords="126,135,135,139,135,150,126,154,117,150,117,139"   alt="#FF9966" /><area  shape="poly" coords="144,135,153,139,153,150,144,154,135,150,135,139"   alt="#FF6666" /><area  shape="poly" coords="162,135,171,139,171,150,162,154,153,150,153,139"   alt="#FF0066" /><area  shape="poly" coords="180,135,189,139,189,150,180,154,171,150,171,139"   alt="#CC6699" /><area  shape="poly" coords="198,135,207,139,207,150,198,154,189,150,189,139"   alt="#993366" /><area  shape="poly" coords="45,150,54,154,54,165,45,169,36,165,36,154"   alt="#999966" /><area  shape="poly" coords="63,150,72,154,72,165,63,169,54,165,54,154"   alt="#CCCC00" /><area  shape="poly" coords="81,150,90,154,90,165,81,169,72,165,72,154"   alt="#FFFF00" /><area  shape="poly" coords="99,150,108,154,108,165,99,169,90,165,90,154"   alt="#FFCC00" /><area  shape="poly" coords="117,150,126,154,126,165,117,169,108,165,108,154"   alt="#FF9933" /><area  shape="poly" coords="135,150,144,154,144,165,135,169,126,165,126,154"   alt="#FF6600" /><area  shape="poly" coords="153,150,162,154,162,165,153,169,144,165,144,154"   alt="#FF5050" /><area  shape="poly" coords="171,150,180,154,180,165,171,169,162,165,162,154"   alt="#CC0066" /><area  shape="poly" coords="189,150,198,154,198,165,189,169,180,165,180,154"   alt="#660033" /><area  shape="poly" coords="54,165,63,169,63,180,54,184,45,180,45,169"   alt="#996633" /><area  shape="poly" coords="72,165,81,169,81,180,72,184,63,180,63,169"   alt="#CC9900" /><area  shape="poly" coords="90,165,99,169,99,180,90,184,81,180,81,169"   alt="#FF9900" /><area  shape="poly" coords="108,165,117,169,117,180,108,184,99,180,99,169"   alt="#CC6600" /><area  shape="poly" coords="126,165,135,169,135,180,126,184,117,180,117,169"   alt="#FF3300" /><area  shape="poly" coords="144,165,153,169,153,180,144,184,135,180,135,169"   alt="#FF0000" /><area  shape="poly" coords="162,165,171,169,171,180,162,184,153,180,153,169"   alt="#CC0000" /><area  shape="poly" coords="180,165,189,169,189,180,180,184,171,180,171,169"   alt="#990033" /><area  shape="poly" coords="63,180,72,184,72,195,63,199,54,195,54,184"   alt="#663300" /><area  shape="poly" coords="81,180,90,184,90,195,81,199,72,195,72,184"   alt="#996600" /><area  shape="poly" coords="99,180,108,184,108,195,99,199,90,195,90,184"   alt="#CC3300" /><area  shape="poly" coords="117,180,126,184,126,195,117,199,108,195,108,184"   alt="#993300" /><area  shape="poly" coords="135,180,144,184,144,195,135,199,126,195,126,184"   alt="#990000" /><area  shape="poly" coords="153,180,162,184,162,195,153,199,144,195,144,184"   alt="#800000" /><area  shape="poly" coords="171,180,180,184,180,195,171,199,162,195,162,184"   alt="#993333" /></map>
        </div>
        <div id="selectedhexagon" style={{...hexagonStyle, ...this.hexagonStyle}} ></div>
      <div id="colorPreview" style = {{...style, ...this.prevewStyle}}></div>
      <h2>Or Enter a Color:</h2>
      <input type="text" placeholder="Color value" onChange={this.handleChange.bind(this)}></input> 
      <button onClick={()=>{this.props.dispatchColorCode(this.colorCode)}}>OK</button>
    </div>
  );
}
  
}

export default Palette;