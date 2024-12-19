import React, { lazy } from 'react';
import './globals.css';
import MainContent from './components/homepage/MainContent';
import MainNavbar from './components/base/MainNavbar';
import MainFooter from './components/base/MainFooter';


const Page = () => {
  return (
    <React.Fragment>
      <MainNavbar />

      <MainContent />
      
      <MainFooter />
    </React.Fragment>
  );
};

export default Page;
