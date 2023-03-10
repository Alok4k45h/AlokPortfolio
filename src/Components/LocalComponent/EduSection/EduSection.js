import { Link } from "react-router-dom";
import "./EduSection.css";

const universities = [
  {
    id: 1,
    name: "Indian Institute of Technology (ISM) Dhanbad",
    degree: "B.Tech in Mining Engineering",
    date: "2019-Present",
    img: "./Images/IITLogo.png",
    link: "https://www.iitism.ac.in/",
  },
  {
    id: 2,
    name: "Jaglal Roy College Saran",
    degree: "Higher Secondary Education (BSEB-12th with PCM)",
    date: "June 2016 - June 2018",
    img: "https://bsebresult.in/wp-content/uploads/2022/01/bseb-icon.webp",
    link: "http://biharboardonline.bihar.gov.in/",
  },
  {
    id: 3,
    name: "Jawahar Navodaya Vidyalaya Vaishali",
    degree: "Secondary School Education (CBSE-10th)",
    date: "June 2011- June 2016",
    img: "https://assets.sentinelassam.com/h-upload/2022/12/02/1600x960_417558-navodaya.jpg",
    link: "https://navodaya.gov.in/nvs/nvs-school/VAISHALI/en/home/",
  },
];

function EduSection() {
  return (
    <div className="edu-section pt-3 pb-3" id="eduSection">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="edu-section-heading text-center">Education</h1>
          </div>
        </div>
        {universities.map((university) => (
          <div
            key={university.id}
            className="row mb-1 edu-card p-3 text-dark"
            data-aos="zoom-in-down"
          >
            <div className="col-12 col-md-5">
              <div className="text-center">
                <img src={university.img} className="edu-section-img" alt="" />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <h1 className="edu-section-heading">{university.name}</h1>
              <p className="edu-section-description">
                {university.degree}
                <br />
                {university.date}
              </p>
              <div className="h-center">
                <Link to={university.link} className="edu-item-link">
                  View website
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-short"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EduSection;
