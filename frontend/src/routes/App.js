import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Pantalla from '../pages/Pantalla';
import Home from '../pages/Home';
import Register from '../pages/Registro';
import Den from '../pages/Denuncia';

//Adulto Mayor
import Bienido from '../pages/Principal_1';
import Prin from '../pages/Principal';
import Adulto_ from '../pages/DbAdulto_1';
import Adulto_2 from '../pages/DbAdulto_2';
import Adulto_3 from '../pages/DbAdulto_3';
import Adulto_4 from '../pages/DbAdulto_4';
import Le from '../pages/Leyes';
import Ayuda from '../pages/Ayuda_u';
import Cent from '../pages/CentronAyuda';

//Familiar O Amigo
import Deb from '../pages/Deberes';
import Roles from '../pages/Roles';
import Ayuda_1 from '../pages/Ayuda_u1';
import Cent_1 from '../pages/CentroAyuda_1';
import Den_1 from '../pages/Denuncia_1';

function App() {
  return (
   <>
   <BrowserRouter>
   <Switch>
   <Route exact path="/" component={Pantalla}/>
   <Route exact path="/inicio" component={Home}/>
   <Route extact path="/bienvenido" component={Bienido}/>
   <Route extact path="/bienvenido-1" component={Prin}/>
   <Route extact path="/denuncia" component={Den}/>
   <Route exact path="/derechos" component={Adulto_}/>
   <Route exact path="/derechos1" component={Adulto_2}/>
   <Route exact path="/derechos2" component={Adulto_3}/>
   <Route exact path="/derechos3" component={Adulto_4}/>
   <Route exact path="/leyes" component={Le}/>
   <Route exact path="/configuracion" component={Ayuda}/>
   <Route path="/ayuda" component={Cent}/>
   <Route exact path="/roles" component={Roles}/>
   <Route exact path="/registro" component={Register}/>


   <Route exact path="/deberes" component={Deb}/>
   <Route exact path="/configuracion-1" component={Ayuda_1}/>
   <Route extac path="/ayuda_1" component={Cent_1}/>
   <Route extact path="/denuncia-1" component={Den_1}/>







   </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
