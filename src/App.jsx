import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/portfolio'
              element={<Portfolio />}
            />
            <Route 
              path='/skills'
              element={<Skills />}
            />
            <Route 
              path='/contact'
              element={<Contact />}
            />
          </Routes>
          <Footer />
        </>       
      </Router>
      
      
    </div>
  )
}

export default App
