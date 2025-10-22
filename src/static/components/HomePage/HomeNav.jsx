import React from 'react';
import './HomeNav.css';
import Header from './Header';
import Brand from './Brand';
import Faq from './Faq';
import Footer from '../Footer';

const HomeNav = () => {
  return (
    <div className="homeNavContainer">
        <Header />
        <Brand />
        <Faq />
        <Footer />

    </div>
  );
}

export default HomeNav;