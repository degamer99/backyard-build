import React from 'react';
import { Header, AdminNav, SiteData} from '../components/components';

function admin() {
  return (
    <>
      <AdminNav />
      <Header />
      <SiteData />
    </>
  )
}

export default admin