import React from 'react';

import './App.css';
import './main.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="page-container">
      <div className="content-wrap">
      <HashRouter basename='/'>
        <>
          <Header />
          <Routes>
            <Route 
              exact
              path='jared-portfolio/'
              element={<Home />}
            />
            <Route 
              exact
              path='jared-portfolio/portfolio'
              element={<Portfolio />}
            />
            <Route 
              exact
              path='jared-portfolio/skills'
              element={<Skills />}
            />
            <Route 
              exact
              path='jared-portfolio/contact'
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
