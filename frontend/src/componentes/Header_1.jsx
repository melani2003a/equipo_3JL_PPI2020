import React from 'react';
import {Link} from 'react-router-dom';


function Header () {
    return (
<>
<header>
<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="#">OAV</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        
     <Link to="/deberes">
      <a className="nav-link active" href="#">Deberes</a>
      </Link>

      <Link to="/denuncia-1">
      <a className="nav-link active" href="#">Denuncia</a>
      </Link>
      
       <Link to="/ayuda_1">
      <a className="nav-link active" href="#">Ayuda</a>
      </Link>

      <Link to="/configuracion-1">
      <a className="nav-link active" href="#">Configuracion</a>
      </Link>

      <Link to="/">
      <a className="nav-link active" href="#">Cerrar Sesion</a>
      </Link>
    </div>
  </div>
</nav>
</header>
</>

    );
    
    }  
export default Header;