import React, { useEffect } from "react";

const Alerta20 = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            alert("Rick and Morty are not going to forgive you this 🙄");
        }, 16000);

        return () => clearTimeout(timeoutId); // Limpiar el temporizador al desmontar el componente
    }, []); 

    return null; // No necesitas renderizar nada en este componente
}

export default Alerta20;