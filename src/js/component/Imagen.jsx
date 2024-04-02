import React from "react";
import imagen from "../../img/imagenRick.jpg"
import Musica from "../../Sonido/cancion.mp3"
import "../../styles/index.css";

const Imagen = () => {
    return(
        <>
            <audio autoPlay loop src={Musica}></audio>
            <img class="imagen" src={imagen}></img>
        </>
    );
}

export default Imagen;