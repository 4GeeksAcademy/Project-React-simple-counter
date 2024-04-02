import React, { useEffect } from "react";

const AlertaFinal = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            alert("No more Rick and Morty, you officially just killed them, thanks for nothing 💩");
        }, 24000);

        return () => clearTimeout(timeoutId); // Limpiar el temporizador al desmontar el componente
    }, []); 

    return null; // No necesitas renderizar nada en este componente
}

export default AlertaFinal;