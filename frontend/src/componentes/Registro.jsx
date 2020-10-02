import React from 'react';
import { Link } from 'react-router-dom';

function Registro() {
    return(
        <>
        <form>
<div class="form-group">
<label for="formGroupExampleInput">Nombre</label>    
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre"/>
  </div>
  <div class="form-group">
<label for="formGroupExampleInput">Apellidos</label>    
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese sus apellidos"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Correo</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su correo"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" class="form-control" placeholder="Ingrese su contraseña" id="exampleInputPassword1"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirmacion Contraseña</label>
    <input type="password" class="form-control" placeholder="Confirme su contraseña" id="exampleInputPassword1"/>
  </div>
  <Link to="/roles">
  <button type="submit" className="btn-5 btn-dark">REGISTRARSE</button>
  </Link>
  </form>
       </> 
    );
    
}

export default Registro;