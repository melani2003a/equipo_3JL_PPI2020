import React from 'react';
import {Link} from 'react-router-dom';


function Adulto_1(){
    return (
        <>
        <h1 className="gilo"> DERECHOS DEL ADULTO MAYOR </h1>

        <div className="">
        <table className="tabla">

<tr>
    <td className="fila-1">Trato Respetuoso </td>
    <td className="fila-1"> Permitir capacidad de desición en temas personales </td>
    </tr>
</table>
            
        </div>
        <div class="card">
  <img src="http://cdn-ugc.mamaslatinas.com/gen/constrain/500/500/80/2014/08/21/09/ah/0b/poqb4j1awc.jpg" class="card-img-top-1" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ley 1276 de 2009</h5>
    <p class="card-text"> Adultos mayores en nivel I y II del sisben deben ser protegidos por Centros de Vida</p>
  </div>
</div>
<div class="card">
  <div class="card-body-4">
  <h4 className="titulo">ANTE LA COMISARIA DE FAMILIA</h4>
      <table className="tabla">

          <tr>
              <td className="columna-1"> </td>
              
              </tr>
          <tr>
              <td className="fila-1"> Proceso judicial</td>
              <td className="fila-1"> Demanda por alimentos </td>
              <td className="fila-1"> Violencia Intrafamiliar </td>

          </tr>
          <tr>
              <td className="fila-1"> Sanción</td>
              <td className="fila-1"> Cuota obligatoria</td>
              <td className="fila-1"> Prisión de 3 a 6 años</td>
                        </tr>
                 
        
      </table>
   
  </div>
</div>
               <Link to="/derechos2">
               <button type="button" class="btn-87 btn-outline-dark">Siguiente</button>
               </Link>

        </>
    );
}
export default Adulto_1;