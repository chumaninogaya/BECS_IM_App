import React from "react";
import "./card.css";
// import "../";
// import { NavLink } from "react-bootstrap";

function Card2({ name, about, job }) {
  return (
    <div className="Card2">
      <div className="upper-container">
        <div className="image-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQG72M0CQQWIIQ/profile-displayphoto-shrink_400_400/0/1632953036400?e=1643241600&v=beta&t=XuUO6yIeTlb_XTEj62AZWB6CFSw4T42t3n6brk5TfoQ"
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
                "https://www.linkedin.com/in/samkelwe-ngalimane-4b6769201/")
            }
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;
