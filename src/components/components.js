import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaWhatsapp, FaRegCommentAlt } from 'react-icons/fa';
import { FaHome, FaUserCircle, FaExchangeAlt, FaUserAlt, FaCog, FaSearch, FaTimes, FaMinus, FaRegSquare } from 'react-icons/fa';
import { name, user, uploadsiteData , GetAllDoc } from '../pages/firebase';

export const Header = () => {
  return <header className='mainhead'>
      <Link to='' className='logo'> 1stfx</Link>
      <div className='searchbar'>
        <input placeholder='Search' />
        <span><FaSearch /></span>
      </div>
      <div className='usericon'>
          <FaUserCircle style={{fontSize: '2rem', color: '#707'}}/>
      </div>
      {/* userslogo */}
  </header>
}

export const HeaderIndex = () => {
  return <header className='mainhead'>
      <Link to='/' className='logo'> 1stfx</Link>
      <input placeholder='Search' />
      <div>
          <FaHeart />
          <span>Your Name</span>
      </div>
      {/* userslogo */}
  </header>
}

export const Nav = () => {
  return (
      <nav className='mainnav'> 
          <ul>
              {/* dashboard logo  */}
              <Link to='/home'><li><FaHome style={{fontSize: '25px'}}/><span>Home </span></li></Link>
              {/* repeat logo  */}
              <Link to='/exchange'><li><FaExchangeAlt style={{fontSize: '25px'}}/><span>Exchange</span></li></Link>
              {/* user head logo  */}
              <Link to='/account'><li><FaUserAlt style={{fontSize: '25px'}}/><span>Account</span></li></Link>
              {/* cog wheel logo */}
              <Link to='/settings'><li><FaCog style={{fontSize: '25px'}}/><span>Setting</span></li></Link>
          </ul>
      </nav>
  );
  }
export const AdminNav = () => {
  return (
      <nav className='mainnav'> 
          <ul>
              <Link to='/admin'><li><FaHome style={{fontSize: '25px'}}/><span>Site Data</span></li></Link>
              <Link to='/userdata'><li><FaUserAlt style={{fontSize: '25px'}}/><span>Users Data</span></li></Link>
          </ul>
      </nav>
  );
}

const poptestimonyArray = [
  [{name: 'Arnold', 
    country: 'FRANCE',
    amount: '$11,000'}],
  [{ name: 'James ',
    country: 'USA',
  amount: '$20,000'}],
  [{name: 'Leanor', 
    country: 'PORTUGAL',
  amount: '$250,000'}],
  [{ name: 'Matilde',
    country: 'PHILLIPINES',
  amount: '$31,000'}],
  [{ name: 'Johnbull',
     country: 'INDIA',
  amount: '$80,000'}],
  [{ name: 'Alfred', 
    country: 'UK',
  amount: '$1,000'}],
  [{  name: 'Alpine', 
    country: 'AUSTRALIA',
  amount: '$75,000'}],
  [{name: 'Seon-U', 
    country: 'SOUTH KOREA',
  amount: '$500,000'}],
  [{name: 'Marcel', 
    country: 'France',
  amount: '$12,000'}],
  [{name: 'Santiego', 
    country: 'PHILLIPINES',
  amount: '$3,000'}] 
];
export const Poptestimony = () => {
const [newpop, setnewpop] = useState(poptestimonyArray[0]);
  
  useEffect(() =>{
    let newindex = 0
    setInterval(() => {
      if (poptestimonyArray[newindex] != null){
        setnewpop(poptestimonyArray[newindex]);
        newindex ++;
       }else{
        newindex = 0
       }
    }, 20000);
  }, []);
   const whatToReturn = newpop.map(({ name, country, amount }, index) => {
          return (
            <section className='poptestimony'>
              <p key={index}>{name } from <span>{country}</span> just made <span>{amount}</span> </p>
            </section>
              
          );
      }
  );
  return whatToReturn
}

export const Whatsapp = () => {
  return(
  <a href="https://wa.me/message/O3CSXWIY2FJNH1"
  style={{
    position: 'fixed',
    bottom: '10%',
    right: '5%',
    color: 'white'
  }} 
    ><FaWhatsapp style={{
      position: 'fixed',
      bottom: '10%',
      left: '5%',
      fontSize: '3.75rem',
      padding: '.2rem',
      borderRadius: '45%',
      background: 'linear-gradient(1200deg, #00001088, #00ce00)',
      boxShadow: '0px 0px 10px 5px #008800'
    }} /></a>
  );
}
// export const Livechat = () => {
//   const [hidebtn, sethidebtn] = useState(true);
//   const hide = () => sethidebtn(!hidebtn)
//   return(<div className='livechat'>
//     <FaRegCommentAlt style={{
//       position: 'fixed',
//       bottom: '10%',
//       right: '5%',
//       color: 'white',
//       fontSize: '3.75rem',
//       padding: '.75rem',
//       borderRadius: '20%',
//       background: 'linear-gradient(120deg, #20002088, #6c006caa)',
//       boxShadow: '0px 0px 10px 5px #600060',
//       cursor: 'pointer'
//     }} 
//     onClick={hide}
//     />
//     <div className='livediv' hidden={hidebtn}>
//     <div className='livehead'>
//       <div>
//         <FaMinus />
//         <FaRegSquare />
//         <FaTimes onClick={hide}/>
//         </div>
//       </div>
//     <div></div>
//     <div></div>
//     </div>
//   </div>
//   );
  
// }
export const Livechat = () => {
  const script = document.createElement("script");
  script.src = "//code.tidio.co/zqase50qxl14obx9rz8tucvijs6xyihp.js";
  script.async = true;
  document.body.appendChild(script);
  return null
}

export let isJesica = false

export const Welcome = ()=> {
  const userId = localStorage.getItem("user.uid");
  // console.log(userID);
  let userLocalData = JSON.parse(localStorage.getItem(userId));
  if (userLocalData.name == "Jessica Belen"){
    isJesica = true;
    console.log(isJesica)
  }
  return (
    <p className='welcome'>
      <span>Welcome, </span> {userLocalData.name} 
    </p>
  );
}

export const SiteData = () => {
  const gCashNameRef = useRef();
  const gCashNoRef = useRef();
  const BitcoinRef = useRef();
  const upload = () => {
    let gName = gCashNameRef.current.value;
    let gNo = gCashNoRef.current.value;
    let btcAddress = BitcoinRef.current.value;
    const data = {
      gcash: [ gName, gNo],
      bitcoin: btcAddress
    }
    uploadsiteData('Account Info', data )
    .then(
      ()=>{
        console.log('site data has been uploaded');
      }
    )
  }
  return(
    <section className="accInfo">
      <h2>Account Payment Info</h2>
      <hr />
      <ul>
        <li>
          <label htmlFor="g-cash">G-cash info</label>
          <input id="g-cash" type="text" placeholder="enter g-cash name " ref={gCashNameRef} />
          <input type="text" placeholder="enter g-cash number " ref={gCashNoRef} />
        </li>
        <li>
          <label htmlFor="btc">Bitcoin Info</label>
          <input id='btc' type="text" placeholder="enter bitcoin address" ref={BitcoinRef } />
        </li>
        <li>
          <button onClick={upload}>Update account info</button>
        </li>
      </ul>
    </section>
  );
}
