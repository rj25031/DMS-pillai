import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from './Footer.js';
function Layout(props) {
  return (
    <div>
    <Navbar></Navbar>
    {props.children}
    <Footer></Footer>
    </div>
  )
}

export default Layout