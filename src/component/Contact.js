import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import images from "../png/contact.png";
import { ContactImg } from "./Animate";

function Contact() {
  const [data, setData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
  });
  const { conImg, getAnimation } = ContactImg();

  const Input = (e) => {
    const { name, value } = e.target;

    setData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    alert(`      
      Your Name: ${data.fullName} 
      Mobile #: ${data.mobile} 
      Your Email: ${data.email}
      Your Message: ${data.message}
            `);
  };

  return (
    <>
      <div className="contact my-5">
        <h1>Contact us</h1>
        <div className="contact">
          <img
            ref={conImg}
            onMouseOver={() => {
              getAnimation().play();
            }}
            className="contact-img"
            src={images}
            alt="..."
          />
        </div>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={Input}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="mobile"
                  value={data.mobile}
                  onChange={Input}
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={Input}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={Input}
                ></textarea>
              </div>

              <div className="col-12 my-5">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
