import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav } from '../components/components';
import { FaShieldAlt, FaHourglass} from 'react-icons/fa';

const Main = () => {
    return (
        <div className="container">
            <main className='card'>  
                <FaShieldAlt style={{fontSize: '85px', color: 'purple'}} />
                <h2>We are verifing your Id</h2>
                <p>Your account will be approved immedaitely we are done verifing your id</p>
                <FaHourglass style={{fontSize: '50px', color: 'purple', transform: 'rotate(60deg)'}} />
            </main>
        </div>
    );
}
function verifyloading() {
  return (<>
    <Nav />
    <Header />
    <Main />
    </>
  );
}

export default verifyloading;