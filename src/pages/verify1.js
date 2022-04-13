import React, {useRef} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShieldAlt } from 'react-icons/fa'
import { Header, Nav } from '../components/components';
import { upload } from './firebase'


const Main = () => {
const navigate = useNavigate();
const idRef = useRef();
const submitId = (e)=>{
    e.preventDefault();
    const id = idRef.current.value;
    upload(id)
    .then(()=> navigate('/verifyloading'))
}

    return (
        <div className="container">
            <main className='card id'>
                <FaShieldAlt style={{fontSize: '85px', color: 'purple'}} />
                <h2>Upload Your ID Card</h2>
                <div>
                    <p><b>(Driving Licence or Government ID card)</b></p>
                    <p>Uploading your ID card helps to ensure the safety and security of your funds.</p>
                </div>
                <form action="" className='uploadid'>
                    <ul>
                        <li>
                            <div>
                                <label htmlFor="front"><b>Upload ID</b></label>
                                <span>Maximum file size is 2mb</span>
                            </div>
                            <input ref={idRef} type="file" name="front" placeholder='front.jpg' />
                        </li>
                    </ul>
                </form>
                <button onClick={submitId}>Submit</button>
            </main>
        </div>
    );
}

function Verify1() {
    return (<>
        <Nav />
        <Header />
        <Main />
    </>
    );
}

export default Verify1;