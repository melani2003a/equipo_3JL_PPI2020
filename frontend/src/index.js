import React from 'react';
import ReactDOM from 'react-dom';


//Pages primera entrega
import App from './routes/App';
import Principal_1 from './pages/Principal_1';
import Den from './pages/Denuncia';
//import Le from './pages/Leyes';
//import Resg from './pages/Registro';
//import Deb from './pages/Debere';

//Pages segunda entrega
//import Cent from './pages/CentroAyuda';
//import Prog from './pages/Programas';
//import Adulto_ from './pages/DbAdulto_1';
//import Ayuda from './pages/Ayuda_u';

//Pages tercera entrega 
//import Act from './pages/Actividad';


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


