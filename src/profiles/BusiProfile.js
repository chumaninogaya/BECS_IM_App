import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Profile.css";
import ContactForm from "./ContactForm";

function BusiProfile({ name, about, job }) {
  return (
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="card p-3 py-4">
            <div class="text-center">
              {" "}
              <img
                src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
                width="100"
                class="rounded-circle"
              />{" "}
            </div>
            <h5 class="mt-2 mb-0">Busiswa Nqala</h5>{" "}
            <span>DSK Intern Deceloper</span>
            <div class="px-4 mt-1">
              <h6 class="mt-2 mb-0">PERSONAL PROFILE</h6>
              <p class="fonts">
                I am a self-driven, self-motivated, goal orientated individual
                who is keen to explore and not afraid to take calculated risks.
                I am always open to learn and improve myself so as to grow and
                be of valuable use to those I interact with. I pride myself in
                my ability to work under pressure as well as my efficiency to
                meet deadlines.
              </p>

              <h6>WORK EXPERIENCE</h6>
              <span>IT Trainee| National Credit Regulator| Johannesburg</span>
              <p class="fonts">
                March 2020 — March 2021 Offering software and technical
                assistance on the delivery, setup and maintenance of digital
                system. Developing applications.
              </p>

              <h6>EDUCATION</h6>
              <span>Nelson Mandela University</span>
              <p class="fonts">
                National Diploma: IT(Software Development) | February 2016 —
                November 2019 Nelson Mandela Metropolitan University was opened
                on 1 January 2005. On 20 July 2017 the university was renamed
                Nelson Mandela University. The name change provided an
                opportunity for the institution to re-brand and position itself
                continentally and globally.
              </p>
              <span>Nelson Mandela University</span>
              <p class="fonts">
                Bachelor of Technology: IT(Software Development) | February 2020
                — January 2021 I am currently perusing my advanced diploma in IT
                software development. I am majoring in software development and
                project management. I will be completing this qualification this
                year (2021)
              </p>

              <h6>TECHNOLOGIES</h6>
              <span>
                <strong>Web development</strong>
              </span>
              <p class="fonts">
                {" "}
                CSS, JavaScript, HTML & CSS ASP.NET MVC PHP,Bootstrap, jQuery
              </p>

              <span>
                <strong>Core Technologies</strong>
              </span>
              <p class="fonts">
                {" "}
                C#, Java, .Net, PHP, Information Security Computer Security{" "}
              </p>

              <span>
                <strong>Database</strong>
              </span>
              <p class="fonts"> Microsoft SQL Server, mySQL </p>

              <h6>CONTACT DETAILS</h6>
              <span>
                <strong>Busiswa.Nqala@dsktech.co.za</strong>
              </span>
              <br />
              <span>
                <strong>businqala@gmail.com</strong>
              </span>
              <br />
              <span>
                <strong>Cell: 0836536619/0712216275</strong>
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
export default BusiProfile;
