import React from 'react';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { MobileMenu } from './components/mobile-menu/mobile-menu';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      <MobileMenu></MobileMenu>
    </>
  );
}

export default App;
