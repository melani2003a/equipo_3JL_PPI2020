import React from 'react';
import {Link} from 'react-router-dom';



function Denuncia() {
    return (
        <>
        <div className="denuncia">
            <h1 className="titulo_1">DENUNCIA</h1>
            <p className="texto"> La organización Mundial de la Salus(OMS) define esta violencia como un acto unico o 
            repetido que causa daño o sufrimiento a una personas de edad, o la falta de medidas apropiadas para evitarlo,y 
            se produce generalmente en una relación basada en la confianza.</p>

            <h1 className="titulo_2">¿CÓMO SE MANIFIESTA ESTA VIOLENCIA?</h1>
            <p className="texto_2">La población adulta mayor es vulnerable a la violencia debido a que van adquiriendo una progresiva
             dependencia del cuidado de otras personas en una sociedad que valora la juventud y que no ha tenido previsiones suficientes 
             para resolver el tema de los cuidados en la tercera edad. De tal manera que resulta siendo victima de violencia en el hogar, 
             en la sociedad y en las instituciones públicas y privadas.</p>
        </div>



        
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">Principales motivos por los que las personas adultas mayores no buscan ayuda</h5>
    <p class="card-text">Generalmente el maltrato configura problemas individuales y sociales
    que se viven en silencio, no se considera necesario darlos a conocer a otras
     personas por razones como:</p>

     <ul>
     <li>Deseo de proteger al agresor de las consecuencias de sus actos.</li>
     <li> Amenazas de institucionalización. </li>
     <li> Vergüenza, miedo y deshonra.</li>
     <li>Una percepción distorsionada que normaliza el maltrato recibido</li>
     <li>Deterioros cognitivos, demencias y déficits sensoriales.</li>
     </ul>
  </div>
</div>





<Link to="/formulario">
        <button type="button" class="btn-120 btn-success">Denunciar</button>
        </Link>



        </>
    );
}
export default Denuncia;