import React, { useState, useRef, useEffect } from 'react';
import { link } from 'react-router-dom';
import { Header, Nav, Welcome } from '../components/components';
import { FaBitcoin, FaLandmark, FaTimes } from 'react-icons/fa';
import { updateDocument} from './firebase';


const ExchangeMain = () => {
  let siteData;
  const [isdeposit, setisdeposit] = useState(true);
  const [openpopup, setopenpopup] = useState(false);
  const amountRef = useRef();
  const currencyRef = useRef();
  const methodRef = useRef();
  const changeDeposit = () => setisdeposit(true);
  const changeWithdraw = () => setisdeposit(false);
  const openPopup = (e) => {
    e.preventDefault();
    // const accInfo = downloadsiteData('Account Info');
    const amountData = {amount: amountRef.current.value};
    updateDocument(amountData);
    setopenpopup(!openpopup);
  }
  return (
    <main className='exchangeMain'>
      <div className='topBtn'>
        <button onClick={changeDeposit}> DEPOSIT </button>
        <button onClick={changeWithdraw}> WITHDRAW </button>
      </div>
      <div>
        <form action="">
          <label htmlFor="currency"><b>Currency</b> </label>
          <div>
            <FaBitcoin style={{ fontSize: '3rem', padding: '.1em .25em' }} />
            <select name="currency" id="" ref={currencyRef}>
              <option value="select">Select</option>
              <option value="G-cash">G-cash</option>
              <option value="Dollar">Dollar</option>
              <option value="Bitcoin">Bitcoin</option>
              {/* <option value="Litecoin">Litecoin</option> */}
            </select>
          </div>
          <label htmlFor="payment"><b>{isdeposit ? 'Payment method' : 'Withdrawal method'}</b></label>
          <div>
            <FaLandmark style={{ fontSize: '3rem', padding: '.1em .25em' }} />
            <select name="payment" id="" ref={methodRef}>
              <option value="select">Select</option>
              <option value="G-cash">G-cash address</option>
              <option value="Bitcoin">Bitcoin address</option>
              {/* <option value="Litecoin">Litecoin address</option>
              <option value="Bank Transfer">Bank Transfer</option> */}
            </select>         </div>
          <label htmlFor="amount"><b>Enter Your Amount</b> </label>
          <div>
            <input type="text" ref={amountRef} placeholder="$" />
          </div>
          <button className='depositBtn' onClick={openPopup}>{isdeposit ? 'DEPOSIT' : 'WITHDRAW'}</button>
        </form>
      </div>
      {openpopup ?
        isdeposit ?
        <section className='exchangePopup' style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '400px',
          padding: '.5rem',
          lineHeight: '2'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '2rem'
          }}>
            <h3>{methodRef.current.value} deposit </h3>
            <FaTimes onClick={() => setopenpopup(!openpopup)} />
          </div>
          <div>
            <p>All {currencyRef.current.value} payments should be made to the {methodRef.current.value} address below:</p>
            <div>
              {
                methodRef.current.value === "G-cash" ?
                <p>
                  <b>Name</b>: Artemio Espana Tejada
                  <br />
                  <b>Number</b>: 09166531089
                  <br />
                  <span style={{ fontWeight: 'bold' }}>your account will be credited once the payment has been confirmed</span>
                </p>
                :
                <p>
                  <b>BTC Address</b> : 1MebtW4gxfkN3j9v8Cj1UxZdJc24vac7gz
                  <br />
                  <span style={{ fontWeight: 'bold' }}>your account will be credited once the payment has been confirmed</span>
                </p>
              }
              <button></button>
            </div>
          </div>
        </section>
        :
        <section className='exchangePopup' style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          width: '400px',
          padding: '.5rem',
          lineHeight: '2'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '2rem'
          }}>
            <h3>{methodRef.current.value} withdraw </h3>
            <FaTimes onClick={() => setopenpopup(!openpopup)} />
          </div>
          <div>
            <p>All {currencyRef.current.value} withdrawals are being processed and will be sent to your {methodRef.current.value} address</p>
            <div>
              <button></button>
            </div>
          </div>
        </section>
        :
        ''}
    </main>
  );
}

function Exchange() {
  return (<>
    <Nav />
    <Header />
    <Welcome />
    <ExchangeMain />
  </>
  );

}

export default Exchange;