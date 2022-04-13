import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header, Nav } from '../components/components';


const Main = () => {
  const navigate = useNavigate();
    return (
        <div className="container">
            <main className='card'>  
                {/* shield logo  */}
                <h2>Your account is been processed</h2>
                <p>In the meanwhile please take your time to update your details as this will help speed up your account creation process </p>
                <button onClick={()=> navigate('/verify1')}> Upload ID</button>
            </main>
        </div>
    );
}


function Verify() {
  return (<>
        <Header />
        <Nav />
        <Main />
    </>
    );
}

export default Verify;