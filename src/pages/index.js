import React from "react";
import "../App.css";
import Img from "../assets/hero-img.png";

const Home = () => {
  return (
    <div>
      <div className="__hero" id="Hero">
        <div className="__hero-left">
          <h1>This is the Big Heading</h1>
          <p>This will be the subheader of the hero. And will have more text</p>
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
