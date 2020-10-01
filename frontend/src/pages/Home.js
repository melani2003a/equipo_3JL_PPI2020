import React from 'react';
import '../Ppi.css';
import Sesion from '../componentes/Sesion';
import Footer from '../componentes/Footer';
import Header from '../componentes/Header';


function Home() {
  return (
   <>
   <div className="App">
            <Header/>
            <Sesion/>
            <Footer/>

        </div>
   </>
  );
}

export default Home;
