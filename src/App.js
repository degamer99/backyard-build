import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Signup from './pages/signup';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Index /> } />
        <Route path='/signup' element={ <Signup /> } />
      </Routes>
    </>
  );
}

export default App;
