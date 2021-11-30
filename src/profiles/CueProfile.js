import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//import "./Profile.css";
// import ContactForm from "../ContactForm";

function CueProfile({ name, about, job }) {
  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="card p-3 py-4">
            <div class="text-center">
              {" "}
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFoh-YkPFrehw/profile-displayphoto-shrink_800_800/0/1570457219550?e=1643241600&v=beta&t=NDhaVLqIUZGlwpx5gzB0s0_t8hftQyeB6kdFDp46ccA"
                width="100"
                class="rounded-circle"
              />{" "}
            </div>
            <h5 class="mt-2 mb-0">Chumani Nogaya</h5>{" "}
            <span>DSK Intern Deceloper</span>
            <div class="px-4 mt-1">
              <h6 class="mt-2 mb-0">PERSONAL PROFILE</h6>
              <p class="fonts">
                Accomplished Software Developer and Web Developer
                troubleshooting and resolving issues by debugging programs and
                managing Web Applications. Offering expertise in c# and
                Database. Knowledgeable Database Developer with significant
                knowledge in Microsoft SQL and mySQL database systems. Succeeds
                in high-pressure environments while meeting business needs and
                project expectations.
              </p>

              <h6>WORK EXPERIENCE</h6>
              <span>Intern Developer</span>
              <p class="fonts">
                I am currently partaking in a graduate training program offered
                by DSK Technologies, using Java and react technologies.
              </p>

              <span>MomentumTYB (2020 - 2020)</span>
              <p class="fonts">
                Stored, retrieved, and manipulated data Modified existing
                softwares to correct errors Prepared detailed reports Coded
                websites using HTML, CSS, JavaScript and jQuery languages.
                Collaborated effectively with members of software development
                team and personnel in other departments. Assisted with design
                and development of web application projects.
              </p>
              <h6>EDUCATION</h6>
              <span>Nelson Mandela University</span>
              <p class="fonts">
                Diploma | (2016 - 2018) I graduated for my National Diploma in
                software development during the 2020 academic year. I
                specialized in software development and information systems.
              </p>
              <span>Nelson Mandela University</span>
              <p class="fonts">
                B.TECH IN SOFTWARE DEVELOPMENT | (2019 - 2019)
              </p>

              <h6>TECHNOLOGIES</h6>
              <span>
                <strong>Web development</strong>
              </span>
              <p class="fonts">
                {" "}
                CSS, JavaScript, HTML, PHP, Laravel, ASP.Net, ASP.Net Core
              </p>

              <span>
                <strong>Core Technologies</strong>
              </span>
              <p class="fonts"> C#, Java, .Net, PHP </p>

              <span>
                <strong>Database</strong>
              </span>
              <p class="fonts"> Microsoft SQL Server, mySQL </p>

              <h6>CONTACT DETAILS</h6>
              <span>
                <strong>Chumani.Nogaya@dsktech.co.za</strong>
              </span>
              <br />
              <span>
                <strong>chumaninogaya@gmail.com</strong>
              </span>
              <br />
              <span>
                <strong>Cell: 0728948238</strong>
              </span>
              <br />
              <a class="btn btn-block btn-social btn-twitter">
                <span class="fa fa-twitter"></span> Sign in with Twitter
              </a>
            </div>
            <div class="buttons">
              {" "}
              <button class="btn btn-outline-primary px-4">
                linkedin
              </button>{" "}
              <button class="btn btn-primary px-4 ms-3">Github</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CueProfile;
