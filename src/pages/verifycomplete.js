import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav } from '../components/components';
import { FaCheckCircle } from 'react-icons/fa';


const Main = () => {
    return (
        <div className="container">
            <main className='card'>  
                <FaCheckCircle style={{fontSize: '85px', color: 'purple'}}/>
                <h2>Identity Verified</h2>
                <p>Congrats! your identity has been successfully verified and your limit has been increased</p>
                <button>Continue</button>
            </main>
        </div>
    );
}

function VerifyComplete() {
    return (<>
        <Header />
        <Nav />
        <Main />
    </>
    );
}

export default VerifyComplete;