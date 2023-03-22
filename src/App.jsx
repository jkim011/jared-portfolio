import React from 'react';

import './App.css';
import './main.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Router>
        <>
          <Header />
          <Routes>
            <Route 
              exact
              path='/'
              element={<Home />}
            />
            <Route 
              exact
              path='/portfolio'
              element={<Portfolio />}
            />
            <Route 
              exact
              path='/skills'
              element={<Skills />}
            />
            <Route 
              exact
              path='/contact'
              element={<Contact />}
            />
          </Routes>
        </>       
      </Router>
      </div>
      <Footer className="footer"/>
    </div>
  )
}

export default App