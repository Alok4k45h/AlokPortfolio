import React from "react";
import { Link } from "react-router-dom";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaMapMarked,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div id="contactmeSection">
      <img
        src="https://forum.manjaro.org/uploads/default/original/1X/66160e05a2188d4b2e38023c4ae690850b98771e.png"
        alt=""
      />
      <div className="footer-section  pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="text-center text-md-left">
                <img
                  src="./Images/alokImage.png"
                  className="logo"
                  alt="alok_img"
                  loading="lazy"
                />
                <div className="d-flex flex-row justify-content-center mt-3 mb-3">
                  <a
                    href="https://www.facebook.com/alokkr.me.o7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="footer-logo facebook" />
                  </a>

                  <a
                    href="https://www.instagram.com/alokkr.me.o7/?fbclid=IwAR3G9IPwXVnic7WB7xzCfqlcosN4wVECG7GnLJFtLv_fnePPfC0MqP3-CwY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="footer-logo insta" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/07alokkumar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedinIn className="footer-logo linkedin" />
                  </a>

                  <a
                    href="https://github.com/Alok4k45h"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="footer-logo github" />
                  </a>
                </div>
                <p className="footer-section-text">Full Stack Developer</p>
              </div>
            </div>

            <div className="col-6 col-md-4 mt-3">
              <h1 className="footer-section-heading pb-2">Contact Me</h1>
              <ul className="footer-section-list">
                <li className="mb-3">
                  <FaMailBulk className="icon mr-2" />
                  <span className="footer-section-text">
                    alok4k45h@gmail.com
                  </span>
                </li>
                <li className="mb-3">
                  <FaPhone className="icon mr-2" />
                  <span className="footer-section-text">+91-9334605118</span>
                </li>
                <li className="mb-3">
                  <FaMapMarked className="icon mr-2" />
                  <span className="footer-section-text">
                    Saran, Bihar, India- 841207
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 mt-3">
              <h1 className="footer-section-heading pb-2"> Quick Links</h1>
              <ul className="footer-section-list">
                <li className="footer-section-text">
                  {/* <a
                    href="https://www.iitism.ac.in/iitismnew/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-section-text footer-link"
                  >
                    IIT (ISM) Official Website
                  </a> */}

                  <Link
                    to="https://www.iitism.ac.in/iitismnew/"
                    className="footer-item-link"
                  >
                    IIT (ISM) Official Website
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <hr className="hr-footer" />
            <FaCopyright className="icon mr-2" />
            <span className="footer-section-copyright">
              2022 | Created by Alok | IIT (ISM) DHANBAD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
