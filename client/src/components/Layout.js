import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from './Footer.js';
function Layout(props) {
  return (
    <div>
    <Navbar></Navbar>
    {props.child}
    <Footer></Footer>
    </div>
  )
}

export default Layout