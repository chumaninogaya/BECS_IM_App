import React, { useState } from "react";
// import React, { useState } from "react";
import Card from "../components/Card/Card";
import Card1 from "../components/Card/Card1";
import Card2 from "../components/Card/Card2";
import Card3 from "../components/Card/Card3";

import "bootstrap/dist/css/bootstrap.min.css";

const Team = () => {
  const [name, setName] = useState("Busiswa Nqala");
  const [job, setJob] = useState("Software Developer");
  const [about, setAbout] = useState(
    "I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time."
  );

  const [name2, setName2] = useState("Samkelwe Ngalimane");
  const [job2, setJob2] = useState("Software Developer");
  const [about2, setAbout2] = useState(
    "I am an IT Software Developer Intern at DSK Technologies with historic knowledge of software development, design, and database management. I am an experienced team player and possess good leadership skills. Diploma | 2018-2020 I graduated for my National Diploma in software development...."
  );

  return (
    <div className="App">
      <div className="container-fluid d-flex justify-content-center m-4">
        <div className="row">
          <div className="col">
            <div className="image-container img">
              <Card1
                name={"Emmanuel Sasu"}
                job={"Software Developer"}
                about={
                  "Let me help you solve that problem. I have high hopes for changing the world of technology with my coding skills and unique quirks. I am targeting entry-level/intern roles in tech and my current specialities are: Java, HTML, CSS, SCSS, Basic JavaScript, Bootstrap, APIs and Git. The skills I am determined ..."
                }
              />
              <br />
            </div>
          </div>
          <div className="col">
            <Card name={name} job={job} about={about} />
            <br />
          </div>
          <div className="col">
            <Card2 name={name2} job={job2} about={about2} />
            <br />
          </div>
          <div className="col">
            <Card3
              name={"Chumani Nogaya"}
              job={"Software Developer"}
              about={
                "Accomplished Software Developer and Web Developer troubleshooting and resolving issues by debugging programs and managing Web Applications. Offering expertise in c# and Database. Knowledgeable Database Developer with significant knowledge in Microsoft SQL and mySQL database systems."
              }
            />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
