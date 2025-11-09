import { useState } from 'react'
//////
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
///////
import NavBar from './components/header/NavBar';
import Home from './pages/Home';
import About from './pages/About';
///////
import './App.css'

function App() {

  return (
      <HashRouter>
          <NavBar />
                <Routes >
                  <Route path="/" element={<Home />}> </Route>
                  <Route path="/about" element={<About />}> </Route>
                </Routes>
      </HashRouter>
    );
  };

export default App
