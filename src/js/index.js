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
            {/* Utilizamos digit %10 para que nos devuelva el valor entero, no con comas. */}
            <div className="seconds">{props.digitSecondsLeft % 10} {props.digitSecondsRight % 10} seconds </div>
            <div className="thousandts">{props.digitThousandthsLeft % 10} {props.digitThousandthsRight % 10} thousandths</div>
        </div>
        );
}


let counter = 1100; //El contador irá bajando desde aquí, es el numero de referencia
let interval = setInterval(function(){
    const secondsLeft = Math.floor(counter / 1000); // 1 - seconds - - thousandths
    const secondsRight = Math.floor(counter /100); // 1 1 seconds - - thousandths
    const thousandthsLeft = Math.floor(counter / 10); // 1 1 seconds 0 - thousandths
    const thousandthsRight = Math.floor(counter / 1); // 1 1 seconds 0 0 thousandths
    counter --; // Contador descendente
    //Si no ponemos un límite el contador seguirá bajando a los números minus. Por lo tanto:
    //cuando el contador llegue a 0 pararemos. clearInterval() se utiliza para detener un intervalo
    if(counter === -1) { 
        clearInterval(interval);
    }

    ReactDOM.render(<div>
      {/* <Video /> */}
      <CuentaAtras digitSecondsLeft={secondsLeft} digitSecondsRight={secondsRight} digitThousandthsLeft={thousandthsLeft} digitThousandthsRight={thousandthsRight} />
      <Imagen />
      <Boton />
      <AlertaInicio />
      <Alerta10 />
      <Alerta20 />
      <AlertaFinal />
      
      </div>,
      document.querySelector("#app"));


    },1000/60);




