import React from "react";
import "./card.css";
// import "../";

function Card1({ name, about, job }) {
  return (
    <div className="Card1">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D35AQFcNz5oFwDuyQ/profile-framedphoto-shrink_400_400/0/1607008352795?e=1638356400&v=beta&t=yK_IOeYYcEam7qLf0bx6iNuckJZyEzBqTnQ8gxwBzxw"
            alt=""
            height="100px"
            width="100px"
          />
        </div>
        <div className="lower-container">
          <h3> {name} </h3>
          <h4> {job} </h4>
          <p> {about} </p>
          <button
            onClick={(event) => (
              (window.location.href =
                "https://www.linkedin.com/in/emmanuel-sasu/"),
              "_blank"
            )}
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card1;
