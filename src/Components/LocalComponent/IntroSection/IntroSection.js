import React from "react";
import "./IntroSection.css";

function IntroSection() {
  return (
    <section id="introSection" className="pt-5 mt-3 mb-5">
      <div className="container">
        <div className="row d-flex flex-row align-items-center">
          <figure className="col-12 col-md-4 text-center">
            <img
              src="https://png.pngtree.com/png-clipart/20220119/ourmid/pngtree-cute-hand-draw-sticker-about-me-with-leaves-element-png-image_4337037.png"
              alt="About me"
              className="AboutImage"
            />
          </figure>

          <div className="col-12 col-md-8" data-aos="fade-left">
            <h3>
              Full Stack Developer who always eager to Learn New Tech Stack
            </h3>

            <p className="intro-section-description">
              ⚡ Develop highly interactive Front end / User Interfaces as well
              as backend part for web and mobile applications
              <br />
              ⚡ Enjoy Problem Solving & Competitive Programming
              <br />
              ⚡ Believe in always acquiring new skills and new Tech Stack
              <br />⚡ Looking forward to acquiring experience through working
              with industry professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

// instead of using a div for an image container, use the <figure> element.
