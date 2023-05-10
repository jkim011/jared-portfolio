import React from 'react';

import './App.css';
import './main.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="page-container">
      <div className="content-wrap">
      <HashRouter basename='/'>
        <>
        {/* <ParticleBackground /> */}
          <Header />     
          <Routes>
            <Route 
              exact
              path='/'
              element={<Home />}
            />
            <Route 
              exact
              path='/about'
              element={<About />}
            />
            <Route 
              exact
              path='/portfolio'
              element={<Portfolio />}
            />
            <Route 
              exact
              path='/contact'
              element={<Contact />}
            />
          </Routes>
        </>       
      </HashRouter>
      </div>
      <Footer className="footer"/>
    </div>
  )
}

export default App
