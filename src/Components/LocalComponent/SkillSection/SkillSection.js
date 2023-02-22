import React from "react";
import "./SkillSection.css";
import {
  FaCode,
  FaPython,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaGit,
  FaMicrosoft,
  FaLinux,
} from "react-icons/fa";

import { SiMysql, SiMongodb, SiExpress, SiPostman } from "react-icons/si";

function SkillSection() {
  return (
    <div
      className="container"
      id="skillSection"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="skillset container my-5 n-box2 py-5">
        <div className="text-center" data-aos="fade-up">
          <h3 className="font-bold text-center skill-section-sub-heading ">
            Skill-Set
          </h3>

          <FaCode className="code-icon" />
        </div>

        <div className="row">
          <div className="col-md-4" data-aos="fade-right">
            <div className="font-bold text-start content-center pl-3">
              <h3 className="font-bold skill-section-heading">Languages</h3>
              <hr />
              <p className="skill-list">
                {" "}
                {"  "}
                <FaCode className="mr-2" />
                C++
              </p>
              <p className="skill-list">
                {" "}
                {"  "}
                <FaCode className="mr-2" />C
              </p>
              <p className="skill-list">
                {"  "}
                <FaPython className="mr-2" /> Python
              </p>
              <p className="skill-list">
                {"  "}
                <FaNodeJs className="mr-2" /> JavaScript
              </p>
              <p className="skill-list">
                {" "}
                {"  "}
                <SiMysql className="mr-2" />
                SQL
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up">
            <div className="font-bold text-center">
              <h3 className="font-bold skill-section-heading">
                Web Development
              </h3>
              <hr />

              <p className="skill-list">
                {" "}
                <FaReact className="mr-2" />
                ReactJS
              </p>
              <p className="skill-list">
                {" "}
                <FaNodeJs className="mr-2" />
                Node.JS
              </p>
              <p className="skill-list">
                {" "}
                {"  "}
                <SiExpress className="mr-2" />
                Express
              </p>
              <p className="skill-list">
                {" "}
                {"  "}
                <SiMongodb className="mr-2" />
                MongoDB
              </p>
              <p className="skill-list">
                {"  "}
                <SiMysql className="mr-2" />
                MySQL
              </p>
              <p className="skill-list">
                {" "}
                <FaBootstrap className="mr-2" />
                Bootstrap
              </p>
              <p className="skill-list">
                {" "}
                <FaCss3 className="mr-2" />
                CSS
              </p>
              <p className="skill-list">
                {" "}
                <FaHtml5 className="mr-2" />
                Html
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-left">
            <div className="font-bold text-end pr-3">
              <h3 className="font-bold skill-section-heading">Extra-Tools</h3>
              <hr />
              <p className="skill-list">
                {" "}
                <FaGit className="mr-2" />
                Git
              </p>
              <p className="skill-list">
                {"  "}
                <SiPostman className="mr-2" />
                Postman
              </p>
              <p className="skill-list">
                {" "}
                <FaMicrosoft className="mr-2" />
                Microsoft Office
              </p>
              <p className="skill-list">
                {" "}
                {"  "}
                <FaCode className="mr-2" />
                Tableau
              </p>
              <p className="skill-list">
                {" "}
                <FaLinux className="mr-2" />
                Linux Distros
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
