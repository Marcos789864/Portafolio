import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './components/Card'
import Boton from './components/Boton'
import Navbar from './views/Navbar'
import Inicio from './views/Inicio'
import AcercadeMi from './views/Acerca de Mi' 
import Conociminetos from './views/Conocimientos'
import Experiencia from './views/Experiencias';
import Educacion from './views/Educacion';
import Certificaciones from './views/Certificaciones'
import Contacto from './views/Contacto';


function App() {
  

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar/>
      <section id='Inicio'>
    <Inicio/>
      </section >
      <section id='AcercadeMi'>
      <AcercadeMi/>
      </section>
      <section id='Conocimientos'>
        <Conociminetos/>
      </section>
      <section id='Experiencia'>
        <Experiencia/>
      </section>
      <section id='Educacion'>
        <Educacion/>
      </section>
      <section id='Certificaciones'>
        <Certificaciones/>
      </section>
      <section id='Contacto'>
        <Contacto/>
      </section>
       <button className={showButton ? "scrollToTopButton" : "hidden"} onClick={scrollToTop}><p>↑</p></button>

    </>
  );
}

export default App;
