import React from "react";
import Typewriter from "typewriter-effect";
import "./BannerSection.css";
import resumePdf from "../../../resources/resume.pdf";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";

function BannerSection() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/alokkr.me.o7/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/alokkr.me.o7/?fbclid=IwAR3G9IPwXVnic7WB7xzCfqlcosN4wVECG7GnLJFtLv_fnePPfC0MqP3-CwY",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/07alokkumar",
    },
    { name: "Github", icon: FaGithub, link: "https://github.com/Alok4k45h" },
  ];

  return (
    <div className="banner-section" id="bannerSection">
      <div
        className="upper-banner-container"
        style={{
          backgroundImage: `url("https://cjchirag7.github.io/images/header-background.jpg")`,
        }}
      >
        <div className="banner-text-container">
          <h1 className="banner-heading mb-3">
            <Typewriter
              options={{
                strings: [
                  "Arise! Awake! and Stop not",
                  "Until the goal is reached!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="banner-caption mb-4">
            उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत, क्षुरासन्न धारा निशिता
            दुरत्यद्दुर्गम पथ: तत् कवयो वदन्ति |
            <br />~ Swami Vivekananda
          </p>
        </div>
      </div>

      <div className="banner-card shadow-lg p-3 bg-white" data-aos="fade-up">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4 d-none d-md-flex">
              <div className="img-banner-card">
                <img
                  src="./Images/alokImage.png"
                  className="banner-section-image"
                  alt="Alok_image"
                />
              </div>
            </div>

            <div className="col-12 col-md-8">
              <h1 className="banner-section-heading mb-3">ALOK KUMAR</h1>
              <p className="banner-section-description mb-3">
                Full Stack Developer🚀 || Technology enthusiast👨‍💻 || IIT (ISM)
                Dhanbad 🎓
              </p>

              <div className="text-center mt-1">
                <a href={resumePdf} download="Alok_Kumar.pdf">
                  <button className="btn btn-outline-success text-center">
                    Download resume
                    <FaDownload className="resume-download-icon" />
                  </button>
                </a>
              </div>

              <hr className="hrstyle" />

              <div className="banner-icon-container mt-1">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.name}
                    href={socialLink.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.name}
                  >
                    <socialLink.icon
                      className={`social-logo ${socialLink.name.toLowerCase()}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
