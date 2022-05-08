import React from "react";
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(props){ //componente
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require('../imagenes/testimonio-Emma.png')}
        alt='Foto de emma'/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre} in {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} at {props.empresa}</p>
        <p className="texto-testimonio">{props.Testimonio}</p>
      </div>
    </div>
  );
} 

//export default Testimonio;