import React, { useRef, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Signin as signin, user, GetAllDoc } from './firebase';

const Heading = () => {
  return <header className='formheading'>
      <h1 className="logo">1st<span>fx</span></h1>
  </header>
}

const form = [{
  id: 'login',
  h2: 'User Login',
  input: [
      {
          nameId: 'email',
          type: 'email',
          placeholder: 'name@example.com',
          txt: 'Email Address'
      },
      {
          nameId: 'password',
          type: 'password',
          placeholder: '.........',
          txt: 'Password'
      },
  ],
  btn: 'Log In',
  footer: 'Already have an account?',
  a: 'Sign Up',
  copyright: 'Copyright 2022 1stfx.com All Rights Reserved'
}];

const Form = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [footnote, setfootnote] = useState();
  const signingup = (e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signin(email, password)
    .then(()=> {
      if(user == null){
        console.log('undefined uid');
        setfootnote('Incorrect email or password')
      }else if( user.uid == 'Vo4ZgOzoSVSQfePy3u2NcGDeBFG3' ){
        GetAllDoc()
        .then(()=>{
          navigate('/admin');
        })
      }else{
        navigate('/home');
      }
    })
  }

  return(
      <main className='themainform'>
        <form className='theform'>
            <h2>User Login</h2>
            <div>
                <label htmlFor='email'>Email Address</label>
                <input ref={emailRef} name='email' type='email' placeholder='name@example.com'/>
                <br />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input ref={passwordRef} name='password' type='password' placeholder='.........'/>
                <br />
            </div>
            <button onClick={signingup}><b>Log In</b></button>
            <footer>
                <p style={{color: 'red'}}> {footnote }</p>
                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
                <hr />
                <p> &copy; Copyright 2022 1stfx.com All Rights Reserved</p>
            </footer>
        </form>
      </main>
  );
}
function Signin (){
 return (<>
    <Heading />
    <Form />
  </>
  );

}

export default Signin;