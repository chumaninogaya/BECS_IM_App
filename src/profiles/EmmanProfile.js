import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//import "./Profile.css";
import ContactForm from "../ContactForm";

function EmmanProfile({ name, about, job }) {
  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="card p-3 py-4">
            <div class="text-center">
              {" "}
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQG72M0CQQWIIQ/profile-displayphoto-shrink_400_400/0/1632953036400?e=1643241600&v=beta&t=XuUO6yIeTlb_XTEj62AZWB6CFSw4T42t3n6brk5TfoQ"
                width="100"
                class="rounded-circle"
              />{" "}
            </div>
            <h5 class="mt-2 mb-0">Samkelwe Ngalimane</h5>{" "}
            <span>DSK Intern Deceloper</span>
            <div class="px-4 mt-1">
              <h6 class="mt-2 mb-0">PERSONAL PROFILE</h6>
              <p class="fonts">
                I am an IT Software Developer Intern at DSK Technologies with
                historic knowledge of software development, design, and database
                management. I am an experienced team player and possess good
                leadership skills.Intern Developer DSK Technologies | Aug
                2021-Current{" "}
              </p>

              <h6>WORK EXPERIENCE</h6>
              <span>Intern Developer</span>
              <p class="fonts">
                I am currently partaking in a graduate training program offered
                by DSK Technologies, using Java and react technologies.
              </p>

              <span>Student assistant</span>
              <p class="fonts">
                Nelson Mandela University | Mar 2019-Nov 2019 My role as a
                student assistant was to assist students in computer labs during
                practicals, invigilate during semester tests, prepare computer
                labs before lessons. Nelson Mandela University
              </p>
              <h6>EDUCATION</h6>
              <span>Nelson Mandela University</span>
              <p class="fonts">
                Diploma | 2018-2020 I graduated for my National Diploma in
                software development during the 2020 academic year. I
                specialized in software development and information systems.
              </p>
              <span>Nelson Mandela University</span>
              <p class="fonts">
                Advanced Diploma | 2021-Current I am currently perusing my
                advanced diploma in IT software development. I am majoring in
                software development and project management. I will be
                completing this qualification this year (2021)
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
                <strong>Samkelwe.Ngalimane@dsktech.co.za</strong>
              </span>
              <br />
              <span>
                <strong>sngalimaness47@gmail.com</strong>
              </span>
              <br />
              <span>
                <strong>Cell: 0836530383/0711016267</strong>
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
export default EmmanProfile;
