import React, {Component} from 'react';


function Sesion() {
    return (
        <>
<form>
<div className="form-group" >
    <label for="exampleFormControlInput1"></label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Usuario o correo"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"></label>
    <input type="password" className="form-control" placeholder="Contraseña" id="exampleInputPassword1"/>
  </div>
    <button type="submit" className="btn-1 btn-danger">INICIAR SESIÓN</button>
</form>
<hr/>

<section>
<button type="submit" className="btn-2 btn-primary">INICIAR SESIÓN CON FACEBOOCK</button>
</section>

<section>
<button type="submit" className="btn-3 btn-info">INICIAR SESIÓN CON TWITTER</button>
</section>

<section>
<button type="submit" className="btn-4 btn-secundario">INICIAR SESIÓN CON GOOGLE</button>
</section>
</>
    );
}
export default Sesion;