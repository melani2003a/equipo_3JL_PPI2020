import React from 'react';
import {Link} from 'react-router-dom';

function Adulto_2(){
    return (
        <>
        <h1 className="gilo"> Derechos del Adulto mayor</h1>
                <div className="">
                    <h2 className="gilo"> SERVICIO PRIORITARIO DE SALUD</h2>
            <ul>
                <li className="parrafo"> EPS: Asignación de citas medicas no podrán superar los tres dias aviles desde su solicitud. Remitir lo medicamentos al hogar del adulto amyor   </li>
            </ul>
            <ul>gg
            <li className="parrafo"> FAMILIARES: Deben afiliar al sistema de salud a los adulto mayores que estén a su cargo </li>
        </ul> 
        <img src="https://comfaguajira.co/wp-content/uploads/2018/10/salud-mental-en-el-adulto-mayor_800x400.jpg" className="card-img-top-1"alt=""/>
        <img src="https://cdn.shopify.com/s/files/1/0072/8226/2082/articles/atencion_al_adulto_mayor1_1024x1024.png?v=1557851584" className="card-img-top-1"alt=""/>

        </div>
               <Link to="/derechos3">
               <button type="button" class="btn-87 btn-outline-dark">Siguiente</button>
               </Link>


      
        </>
    );
}
export default Adulto_2;