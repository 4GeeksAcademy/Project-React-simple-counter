import React, { useEffect } from "react";

const Alerta10 = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            alert("You've to be kidding, it's not that hard 🤨");
        }, 8000); // 5000 milisegundos = 5 segundos

        return () => clearTimeout(timeoutId); // Limpiar el temporizador al desmontar el componente
    }, []); 

    return null; // No necesitas renderizar nada en este componente
}

export default Alerta10;