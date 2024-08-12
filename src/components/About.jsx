import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>Aahar delivers quality meals with a focus on delicious,<br/> 
              comforting food. We're serious about flavor.</p>
          </div>
          <p className="mid">
          Aahar is your trusted cloud kitchen, dedicated to delivering quality meals right to your door. We’re passionate about food, crafting each dish with care and the finest ingredients. Our focus is on providing you with delicious, comforting meals every time. At Aahar, the only thing we’re serious about is food.
          </p>
          <Link to={"/"}> Explore Menu
            {" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
