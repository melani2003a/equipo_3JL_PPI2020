import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Bienido from '../pages/Principal_1';
import Den from '../pages/Denuncia';



function App() {
  return (
   <>
   <BrowserRouter>
   <Switch>
   <Route exact path="/" component={Home}/>
   <Route extac path="/bienvenido" component={Bienido}/>
   <Route extac path="/denuncia" component={Den}/>

   </Switch>
   </BrowserRouter>
   </>
  );
}

export default App;
