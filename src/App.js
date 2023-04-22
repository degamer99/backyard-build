import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Signup from './pages/signup';

function App() {
  useEffect(() => {
  const script = document.createElement('script');

  script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756583337185960";
  script.crossOrigin="anonymous"
  script.async = true;

  document.body.appendChild(script);

//   return () => {
//     document.body.removeChild(script);
//   }
}, []);
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
