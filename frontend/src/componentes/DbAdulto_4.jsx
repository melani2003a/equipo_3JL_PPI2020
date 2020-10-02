import React from 'react';
import {Link} from 'react-router-dom';

function Adulto_3(){
    return (
        <>
        <h1 className="gilo">Derechos del Adulto Mayor</h1>
        <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">VIDA Y MUERTE DIGNA</h5>
        <ul className="card-text">
            <li> Las persona tienen drecho a acceder a los tratamientos médicos necesarios, cuando no exista un mecanismo para asegurar una vida digna</li>
            </ul>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">ALIMENTOS</h5>
        <p>Familiares deben garantizar:</p>
        <ul className="card-text">
            <li>Dieta para sobrevivir</li>
            <li>Atencón psicológica</li>
            <li>Afiliación al sistema de salud</li>
        </ul>
      </div>
    </div>
  </div>
  <img src="https://comfaguajira.co/wp-content/uploads/2018/10/salud-mental-en-el-adulto-mayor_800x400.jpg" className="card-img-top-18"alt=""/>

</div>
               <Link to="/derechos">
               <button type="button" class="btn-87 btn-outline-dark">Anterior</button>
               </Link>
        </>
    );
}
export default Adulto_3;