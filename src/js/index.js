//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Boton from "./component/Boton";
import Imagen from "./component/Imagen";
import AlertaInicio from "./component/Alertas/AlertaInicio";
import Alerta10 from "./component/Alertas/Alerta10";
import Alerta20 from "./component/Alertas/Alerta20";
import AlertaFinal from "./component/Alertas/AlertaFinal";
// import Video from "./component/Video";

// include your styles into the webpack bundle
import "../styles/index.css";

function CuentaAtras(props){
    return(
        <div className="contador">
            <div className="reloj">
                <i className="fa fa-clock"></i>
            </div>
            <div className="four">{props.digitFour % 10} {props.digitThree % 10} seconds </div>
            <div className="two">{props.digitTwo % 10} {props.digitOne % 10} thousandths</div>
        </div>
        );
}


let counter = 1100;
let interval = setInterval(function(){
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter /100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter --;
    if(counter === -1) {
        clearInterval(interval);
    }

    ReactDOM.render(<div>
      {/* <Video /> */}
      <CuentaAtras digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>
      <Imagen />
      <Boton />
      <AlertaInicio />
      <Alerta10 />
      <Alerta20 />
      <AlertaFinal />
      
      </div>,
      document.querySelector("#app"));


    },1000/60);




