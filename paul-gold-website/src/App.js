import React from 'react';
import './App.css';
import Header from './components/pages/Header';
import BuySection from './components/pages/BuySection';
import Footer from './components/pages/Footer';
import HeroSection from './components/pages/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <BuySection/>
      <Footer />
    </div>
  );
}

export default App;