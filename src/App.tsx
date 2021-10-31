import React from 'react';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { MobileMenu } from './components/mobile-menu/mobile-menu';
import { Routing } from './router';
import './App.css';



const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routing />
      <Footer></Footer>
      <MobileMenu></MobileMenu>
    </>
  );
}

export default App;
