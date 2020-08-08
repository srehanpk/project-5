import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Card from './Card';
import cardData from '../CardData';
//import images from '../png/bJk.gif';






function Service() {

  

  return (
    <>
    <div className="service my-5">
    <h1>Our Service's</h1>
    
    </div>

    <div className="container-fluid mb-5">
    <div className="row">
    <div className="col-10 mx-auto">

    <div className="row gy-4">

    
    {cardData.map((val, ind)=>{
      
      return  <Card image={val.cardImg} title={val.cardTitle} key={ind}/>
      
    })}

    </div>

    </div>
    </div>
    </div>
    </>
  );
}

export default Service;
