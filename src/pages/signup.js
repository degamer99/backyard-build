import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Signup as signup,Signout as signout, addDocument} from './firebase';

const Heading = () => {
  return <header className='formheading'>
      <h1 className="logo">1st<span>fx</span></h1>
  </header>
}

const Form = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstRef = useRef();
  const lastRef = useRef();
  const phoneRef = useRef();
  const confirmRef = useRef();

  const signingin = (e) => {
    e.preventDefault();
    // let name = `${firstRef.current.value} ${lastRef.current.value}`;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let first = firstRef.current.value;
    let last = lastRef.current.value;
    let phone = phoneRef.current.value;
    let fullName = first + ' ' + last;
    // console.log(email, password);
    signup(email, password, fullName, phone)
      .then(()=> navigate('/verify'))
  }

  return(
      <main className='themainform'>
        <form className='theform'>
            <h2>Create An Account</h2>
            <div>
                <label htmlFor='first'>First Name</label>
                <input ref={firstRef} name='first' type='text' placeholder='Enter your first name'/>
                <br />
            </div>
            <div>
                <label htmlFor='last'>Last Name</label>
                <input ref={lastRef} name='last' type='text' placeholder='Enter your last name'/>
                <br />
            </div>
            <div>
                <label htmlFor='email'>Email Address</label>
                <input ref={emailRef} name='email' type='email' placeholder='name@example.com'/>
                <br />
            </div>
            <div>
                <label htmlFor='phone'>Phone Number</label>
                <input ref={phoneRef} name='phone' type='text' placeholder='+1 123 456 7890'/>
                <br />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input ref={passwordRef} name='password' type='password' placeholder='.........'/>
                <br />
            </div>
            <div>
                <label htmlFor='confirm'>Confirm Password</label>
                <input ref={confirmRef} name='confirm' type='password' placeholder='Confirm Password'/>
                <br />
            </div>
            <button onClick={signingin}><b>Register</b></button>
            <footer>
                <p>Already have an account? <Link to='/signin'>Sign In</Link ></p>
                <hr />
                <p> &copy; Copyright 2022 1stfx.com All Rights Reserved</p>
            </footer>
        </form>
      </main>
  );
}


function SignUp (){
  return (<>
    <Heading />
    <Form />
  </>

  );

}

export default SignUp;