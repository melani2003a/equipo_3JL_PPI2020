import React from 'react';
import Oav from '../imagenes/Oav.jpg';
import {Link} from 'react-router-dom';

function Pant() {
    return (
        <>
        <div className="cuerpo">
        <img src={Oav} className="img-hola"/>
         
         <Link to='/inicio'>
        <button type="button" class="btn-50 btn-exit" > Iniciar Sesion</button> 
        </Link>

        <Link to='/registro'>
        <button type="button" class="btn-51 btn-exit" > Registrarse</button>
        </Link>

          <button type="button" className="btn-52 btn-exit"> Video Introductorio</button>
               
                  </div>
        


        </>
    );
    
}
export default Pant;