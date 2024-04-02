import React from "react";


const Movimiento = (event) => {
   let className = event.target.className;

   // Reemplazar "btn btn-dark" por "move1"
   if (className === "btn btn-dark") {
       className = className.replace("btn btn-dark", "move1");
   } else if (className === "move1") {
       // Si la clase es "move1", cambiarla a "move2"
       className = className.replace("move1", "move2");
   } else if (className === "move2") {
       // Si la clase es "move2", cambiarla a "move1"
       className = className.replace("move2", "move3");
   } else if (className === "move3") {
      // Si la clase es "move3", cambiarla a "btn btn-dark"
      className = className.replace("move3", "move4");
  } else if (className === "move4") {
    className = className.replace("move4", "btn btn-dark");
  }

   event.target.className = className;
};

function Boton() {
    return (
      <div className = "boton" > 
        <button type="button" className="btn btn-dark" onMouseOver={Movimiento}>Push me!</button>
      </div>
    );
}

export default Boton;