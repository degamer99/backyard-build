import React from 'react';
import { link } from 'react-router-dom';
import { Header, Nav, Welcome} from '../components/components';


function Account (){
  return(<>
    <Nav />
    <Header />
    <Welcome />
  </>
  );

}

export default Account;