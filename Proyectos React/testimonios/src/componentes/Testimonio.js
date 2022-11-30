import React from 'react';
import '../css/Testimonios.css';

function Testimonio(props){
    return(
      <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}`)} />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
          <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
      </div>
    );
}

export default Testimonio;