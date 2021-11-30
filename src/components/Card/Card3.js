import React from "react";
import "./card.css";
// import "../";

function Card3({ name, about, job }) {
  return (
    <div className="Card3">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFoh-YkPFrehw/profile-displayphoto-shrink_800_800/0/1570457219550?e=1643241600&v=beta&t=NDhaVLqIUZGlwpx5gzB0s0_t8hftQyeB6kdFDp46ccA"
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
            onClick={(event) =>
              (window.location.href =
                "https://www.linkedin.com/in/chumani-nogaya-0872a418b/")
            }
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card3;
