import React from 'react';
import {Link} from 'react-router-dom';

function Adulto() {
    return (
        <>
        <h1 className="gilo"> DERECHOS DEL ADULTO MAYOR </h1>

      <div className="card">
  <div className="card-columns">
  <div className="card">
    <img src="https://observatoriodenoticias.redue-alcue.org/wp-content/uploads/2020/02/mexico.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <p className="card-text">
        <ul>
          <li>En colombia hay 4.626.419 adultos mayores</li>
          <li>Representan el 11% de la población</li>
        </ul>
      </p>
    </div>
  </div>
  <div className="card p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>Ley 1276 de 2009 Adultos mayores en nivel I y II del sisben deben ser protegidos por Centros de Vida</p>
    
    </blockquote>
  </div>
  <div className="card">
    <img src="https://canitas.mx/wp-content/uploads/2019/11/que-son-los-derechos-del-adulto-mayor.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Ante La Comisaria De Familia</h5>
      <p className="card-text">
        <ul>
          <li>Proceso judicial</li>
          <li>Demanda por alimentos</li>
          <li>Cuota obligatoria</li>
          <li>Violencia Intrafamiliar</li>
          <li>Prision de 3 a 6 años</li>
          <li>Sanción</li>
        </ul>
        </p>
          </div>
  </div>
    <div className="card text-center">
    <div className="card-body">
      <h5 className="card-title">Servicio Prioritario De Salud</h5>
      <p className="card-text">
        
        <ul>
          <li>EPS: Asignación de citas medicas no podrán superar los tres dias aviles desde su solicitud. Remitir lo medicamentos al hogar del adulto mayor
              </li>
          <li>FAMILIARES: Deben afiliar al sistema de salud a los adulto mayores que estén a su cargo</li>
        </ul>
      </p>
         </div>
  </div>
  
  <div className="card p-3 text-left">
  <h5 className="card-title">Vida Y Muerte Digna</h5>
    <blockquote className="blockquote mb-0">
      <p>
        <ul>
          <li>Las persona tienen drecho a acceder a los tratamientos médicos necesarios, cuando no exista un mecanismo para asegurar una vida digna</li>
        </ul>
      </p>
       </blockquote>
  </div>
  <div className="card p-3 text-left">
  <h5 className="card-title">Alimentos</h5>
    <blockquote className="blockquote mb-0">
      <p> Familiares deben garantizar
        <ul>
          <li>Dieta para sobrevivir</li>
          <li>Atencón psicológica</li>
          <li>Afliación al sistema de salud</li>
        </ul>
      </p>
       </blockquote>
  </div>
  <div className="card">
    <div className="card-body">
      <p className="card-text">
        <ul>
          <li>Trato Respetuoso</li>
          <li>Permitir capacidad de desición en temas personales</li>
        </ul>
      </p>
        </div>
  </div>
</div>
</div>

        </>
    );
    
    
}

export default Adulto;