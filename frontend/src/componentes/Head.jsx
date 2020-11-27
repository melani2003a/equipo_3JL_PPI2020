import React from 'react';
import {Link} from 'react-router-dom';

function Header_1() {
    return (
<>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-info">
 <Link to="/">
  <a class="navbar-brand" href="#">OAV</a>
  </Link>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
        
     <Link to="/inicio">
      <a className="nav-link active" href="#">Iniciar Sesion</a>
      </Link>

      <Link to="/registro">
      <a className="nav-link active" href="#">Resgistrarse</a>
      </Link>
 
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
       </div>
  
 </div>
 </div>
 </div>
 </nav>
 </header> 
        </>

    );
}      
 export default Header_1;