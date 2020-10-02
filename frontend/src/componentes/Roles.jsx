import React, {Component} from 'react';
import Viejitos from '../imagenes/Viejitos.jpg';

import {Link} from 'react-router-dom';


function Roles_ (){ 
    return (
<>
<header>
    <div className="header">
    <a href=""><img src={Viejitos} className="img-80" /></a>
    <div class="btn-group">
  <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ELIGE TU ROL
  </button>
  <div class="dropdown-menu dropdown-menu-right">
      <Link to="/bienvenido-1">
    <button class="dropdown-item" type="button">Adulto Mayor</button>
    </Link>
    <Link to="/bienvenido">
    <button class="dropdown-item" type="button"> Familiar O Amigo</button>
    </Link>
  </div>
</div>
</div>

</header>
</>
    );
}
export default Roles_;