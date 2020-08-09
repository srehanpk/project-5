import React from "react";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

function Card({ image, title }) {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <div className="card-btn">
              <NavLink exact to="/service" className="btn-get-started nav-link">
                Go Somewhere
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
