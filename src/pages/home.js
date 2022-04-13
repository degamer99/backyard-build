import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Nav, Welcome, isJesica } from '../components/components';
import { FaMoneyCheck, FaChartLine, FaUsers, FaRegMoneyBillAlt } from 'react-icons/fa';


const Card = ()=>{
  return(<section className='indexcard'>
    <ul>
      <li>
        <div className='icon-container'><FaChartLine style={{fontSize: '4rem', color: '#cccccc88'}} /></div>
        <div className='info'>
          <h3>Total Investment</h3>
          <p>{isJesica ? '$20' : '$0' }</p>
        </div>
      </li>
      <li>
        <div><FaMoneyCheck style={{fontSize: '4rem', color: '#cccccc88'}} /></div>
        <div className='info'>
          <h3>Profits</h3>
          <p>{isJesica ? '$124' : '$0' }</p>
        </div>
      </li>
      <li>
        <div><FaUsers style={{fontSize: '4rem', color: '#cccccc88'}} /></div>
        <div className='info'>
          <h3>Ref. Bonus</h3>
          <p>$0</p>
        </div>
      </li>
      <li>
        <div><FaRegMoneyBillAlt style={{fontSize: '4rem', color: '#cccccc88'}} /></div>
        <div className='info'>
          <h3>Last Transaction</h3>
          <p>$0</p>
        </div>
      </li>
    </ul>
  </section>
  );
}

function Home() {
  return (<>
    <Nav />
    <Header />
    <Welcome />
    <Card />
  </>
  );
}

export default Home;