import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import { SiMysql, SiMongodb, SiExpress } from "react-icons/si";

import "./DevstackSection.css";

function DevstackSection() {
  return (
    <div
      className="courosel-parent position-relative shadow-lg p-3 mb-5 text-center"
      id="courosel"
    >
      <h1 className="position-absolute top-0 start-0 end-0 devStack-section-heading mb-3 mt-3">
        Development Stack
        <br />
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-12 flex-with-center">
            <div className="gallery">
              <span style={{ "--i": 1 }}>
                <FaReact color="cyan" />
              </span>

              <span style={{ "--i": 2 }}>
                <FaNodeJs color="green" />
              </span>

              <span style={{ "--i": 3 }}>
                <SiMysql color="orange" />
              </span>

              <span style={{ "--i": 4 }}>
                <SiMongodb color="green" />
              </span>

              <span style={{ "--i": 5 }}>
                <FaBootstrap color="blue" />
              </span>

              <span style={{ "--i": 6 }}>
                <SiExpress color="yellow" />
              </span>

              <span style={{ "--i": 7 }}>
                <FaCss3 color="blue" />
              </span>

              <span style={{ "--i": 8 }}>
                <FaHtml5 color="red" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevstackSection;
