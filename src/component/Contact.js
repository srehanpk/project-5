import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import images from '../png/contact.png';

function Contact() {
  return (
    <>
    <div className="contact my-5">
      <h1>Contact us</h1>
      <div className="contact">
      <img className="contact-img" src={images} alt="..."/>
      </div>
    </div>
    <div className="container contact-div">
    <div className="row">
    <div className="col-md-6 col-10 mx-auto">

    <form>
    <div className="mb-3">
  <label className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label className="form-label">Mobile Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter mobile number"/>
</div><div className="mb-3">
<label className="form-label">Email address</label>
<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label className="form-label">Your Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
    </form>

    </div>
    </div>
    </div>
    </>
  );
}

export default Contact;
