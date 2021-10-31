import React from 'react';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { MobileMenu } from './components/mobile-menu/mobile-menu';

import { Home } from './pages/home/home';
import { AboutMe } from './pages/about-me/about-me';
import { Projects } from './pages/Projects/projetcs';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Projects></Projects>
      <Footer></Footer>
      <MobileMenu></MobileMenu>
    </>
  );
}

export default App;
