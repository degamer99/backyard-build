import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBitcoin, FaMapMarkerAlt, FaPhoneAlt , FaEnvelope} from 'react-icons/fa';
import { phoneNumber, email, address} from '../components/data';

const Logo = () => {
	return (<>
		<h1>ATBU Backyard</h1>
	</>
	);
}

const Main = () => {
	return (
		<main className='logIn'>
			<input type="text" placeholder='Mobile number or email address' />
			<input type="text" placeholder='Password' />
			<button><b>Log In</b></button>
			<a href=""> Forgotten password?</a>
			<div>
				<hr />
				<span>or</span>
				<hr />
			</div>
			<button><b>Create New Account</b></button>
		</main>
	);
}
function IndexPage (){
    return (
        <>
					<Logo />
          <Main />
        </>
    );
}
{/* <script src="//code.tidio.co/zqase50qxl14obx9rz8tucvijs6xyihp.js" async></script> */}

export default IndexPage;
