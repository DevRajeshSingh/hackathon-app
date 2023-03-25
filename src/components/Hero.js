import React from "react";
import Bulb from "../Assets/bulb.png";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Hackathon Submission</h1>
          <p className="hero-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolorum voluptatibus in culpa porro est illo tempore natus facere.
            Deleniti quibusdam accusantium commodi magni possimus unde
            voluptates autem dolorem pariatur.
          </p>
          <Link to="/upload">
            {" "}
            <button className="hero-button">Upload Submission</button>{" "}
          </Link>
        </div>

        <img src={Bulb} alt="bulb " className="bulb" />
      </div>
    </>
  );
};
