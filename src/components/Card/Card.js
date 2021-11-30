import React from "react";
import "./card.css";
import cue from "../../profiles/CueProfile";
import CueProfile from "../../profiles/CueProfile";
// import "../";

function Card({ name, about, job }) {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="image-container img">
          <img
            src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
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
                "https://www.linkedin.com/in/busiswa-nqala-16912616a/"),
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

export default Card;
