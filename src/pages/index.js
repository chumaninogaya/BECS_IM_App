import React from "react";
import "../App.css";
import Img from "../assets/hero-img.png";

const Home = () => {
  return (
    <div>
      <div className="__hero" id="Hero">
        <div className="__hero-left">
          <h1>BECS Instant Messaging</h1>
          <p>BECS helps you connect and share with the people in your life.</p>
          {/* <Button href="#">Sign Up with Google</Button> */}
          {/* <Button type="submit">Button</Button>{' '} */}
          {/* <button className="__btn">Sign Up with Google</button> */}
        </div>
        <div className="__hero-right">
          <img src={Img} alt="hero-img"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
