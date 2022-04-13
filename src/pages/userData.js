import React, {useState} from 'react'
import { Header, AdminNav} from '../components/components';
import { GetAllDoc, AllUserDoc } from './firebase';

const UsersMain = () => {
  return <main>{
      AllUserDoc.map(({name}) => {
        return <section>
          {name}
        </section>
      })
  }</main>
}

function UserData() {
  return (
    <>
      <AdminNav />
      <Header />
      {/* <UsersMain /> */}
    </>
    )
}

export default UserData;
