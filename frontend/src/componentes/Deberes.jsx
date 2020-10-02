import React from 'react';
import card from '../imagenes/card.jpg';

function Deberes() {
    return (
        <>
        <card>
        
    <h1 className="titulo_4">DEBERES DE LA FAMILIA</h1>
    <div class="card-group">
  <div class="card">
    <img src={card} class="card-img-1" alt="..."/>
    <div class="card-body">
      <p class="card-text">1. Reonocer y fortalecer las habilidades, competencias, destrezas y conocimientos de adulto mayor.</p>
      <p class="card-text">2. Respetar y generar espacios donde se respeten sus derechos.</p>

    </div>
  </div>
  <div class="card">
    <img src={card} class="card-img-2" alt="..."/>
    <div class="card-body">
      <p class="card-text">3. Proporcionar al adulto mayor de un ambiente de amor, respeto, reconocimiento y ayuda.</p>
      <p class="card-text">4. Brindarle un entorno que satisfaga sus necesidades basicas.</p>

    </div>
  </div>
  </div>
  
  
        </card>
        


      
        
        </>
    );
    
}

export default Deberes;