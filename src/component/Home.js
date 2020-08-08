import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import images from '../png/community1.png';
import {HomeImg, HomeText} from './Animate';

function Home() {
 
 const {homeImg} = HomeImg();
 const {homeText} = HomeText();
  

  return (
    <div className="home">
     <section className="d-flex align-items-center ">
     <div className="container-fluid">
     <div className="row">
     <div className="col-10 mx-auto">

     <div className="row">

      <div ref={homeText} className="col-md-6 pt-lg-0 ml-md-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
      <h2>Grow Your Business with  <strong className="brand-name"> IMPRESSION</strong> </h2>
      <h6 className="my-3 text-secondary" >
      We are the team of highly professional developers to make web and mobile applications with latest technologies </h6>

      <div className="mt-3" >
      <NavLink exact to="/service" className="btn-get-started nav-link">Get Started</NavLink>
      </div>
      </div>

      <div className="col-lg-6 order-2 order-lg-2 mt-lg-5 mb-lg-5 ">
      <img className="header-img" ref={homeImg} src={images} alt="header"/>
      </div>

     </div> 
     </div>
     </div>
     </div>
     </section>
    </div>
  );
}

export default Home;
