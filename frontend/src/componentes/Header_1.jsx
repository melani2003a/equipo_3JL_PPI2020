import React from 'react';
import {Link} from 'react-router-dom';


function Header () {
    return (
<>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">OAV</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        
     <Link to="/deberes">
      <a class="nav-link active" href="#">Deberes</a>
      </Link>

      <Link to="/denuncia-1">
      <a class="nav-link active" href="#">Denuncia</a>
      </Link>

       <Link to="/ayuda_1">
      <a class="nav-link active" href="#">Ayuda</a>
      </Link>

      <Link to="/configuracion-1">
      <a class="nav-link active" href="#">Configuracion</a>
      </Link>

      <Link to="/">
      <a class="nav-link active" href="#">Cerrar Sesion</a>
      </Link>
    </div>
  </div>
</nav>
</header>
</>

    );
    
    }  
export default Header;