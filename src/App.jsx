import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ramenki from './components/Ramenki';
import Window from './components/Window';
import Cluters from './components/Clusters';
import Lobby from './components/Lobby';
import Formats from './components/Formats';
import 'aos/dist/aos.css';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,     
      offset: 80,        
      easing: 'ease-out',
      once: true,       
      mirror: false,     
      anchorPlacement: 'top-bottom',
    });
  }, []);
  return (
    <>
  <Header />
  <Hero />
  <Ramenki />
  <Window />
  <Cluters />
  <Lobby />
  <Formats />
    </>
  );
};

export default App;