import React from "react";
import "./ProjectModal.css";

function ProjectModal(props) {
  const { imgLink, title, desc, techStack, listFirst, listSecond, WebLink } =
    props;

  const modalId = title.replace(/\s+/g, "-").toLowerCase();
  const targetId = `#${modalId}`;
  const labelID = `label-${modalId}`;

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="shadow project-item-card p-3 mb-3">
        <img src={imgLink} className="project-item-image w-100" alt="" />
        <h1 className="project-card-title font-bold mt-3">{title}</h1>
        <p className="project-card-desc">{desc}</p>
        <h3 className="project-card-title mb-3">
          {" "}
          <span className="font-bold">Tech Stack: </span>
          {techStack}
        </h3>

        <a href="" data-toggle="modal" data-target={targetId} className="ml-5">
          <img src="./Images/infoIcon.png" alt="" className="project-icon" />
        </a>

        <div
          className="modal fade"
          id={modalId}
          tabIndex="-1"
          aria-labelledby={labelID}
          aria-hidden="true"
        >
          <div className="modal-dialog mt-5">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h5 className="project-card-title font-bold" id={labelID}>
                  {title}
                </h5>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="project-card-desc">
                  <ul>
                    <li>{listFirst}</li>
                    <li>{listSecond}</li>
                  </ul>
                  <hr />
                  <div className="text-center">
                    <a href={WebLink} target="_blank" rel="noreferrer">
                      <img
                        src="./Images/linkIcon.png"
                        alt=""
                        className="project-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <a href={WebLink} target="_blank" rel="noreferrer">
          <img
            src="./Images/linkIcon.png"
            alt=""
            className="project-icon ml-5"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectModal;
