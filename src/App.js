import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Indexpage from './pages/indexpage';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Reset from './pages/reset';
import Verify from './pages/verify';
import Verify1 from './pages/verify1';
import Verifyloading from './pages/verifyloading';
import VerifyComplete from './pages/verifycomplete';
import Home from './pages/home';
import Exchange from './pages/exchange';
import Account from './pages/account';
import Settings from './pages/settings';
import Admin from './pages/admin';
import UserData from './pages/userData';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Indexpage /> } />
        <Route path='signup' element={ <SignUp /> } />
        <Route path='signin' element={ <SignIn /> } />
        <Route path='reset' element={ <Reset /> } />
        <Route path='verify' element={ <Verify /> } />
        <Route path='verify1' element={ <Verify1 /> } />
        <Route path='verifyloading' element={ <Verifyloading /> } />
        <Route path='verifyComplete' element={ <VerifyComplete /> } />
        <Route path='home' element={ <Home /> } />
        <Route path='exchange' element={ <Exchange /> } />
        <Route path='account' element={ <Account /> } />
        <Route path='settings' element={ <Settings /> } />
        <Route path='admin' element={ <Admin /> } />
        <Route path='userdata' element={ <UserData /> } />
      </Routes>
    </>
  );
}

export default App;
