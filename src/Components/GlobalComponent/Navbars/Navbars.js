import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbars.css";

const Navbars = () => {
  const [navcolor, setNavcolor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavcolor(true);
    } else {
      setNavcolor(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className={
          navcolor
            ? "nav-container colorChange fixed-top"
            : "nav-container fixed-top"
        }
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className="d-flex justify-content-center">
            <Nav>
              <a href="#bannerSection" className="nav-link font-bold active">
                HOME
              </a>

              <a href="#introSection" className="nav-link font-bold">
                ABOUT
              </a>

              <a href="#eduSection" className="nav-link font-bold">
                EDUCATION
              </a>
              <a href="#projectSection" className="nav-link font-bold">
                PROJECTS
              </a>

              <a href="#skillSection" className="nav-link font-bold">
                SKILLS
              </a>

              <a href="#extraSection" className="nav-link font-bold">
                EXTRACURRICULAR
              </a>

              <a href="#contactmeSection" className="nav-link font-bold">
                CONTACT
              </a>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;

// Tring in below code for active classname

// import { useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "./Navbars.css";

// const Navbars = () => {
//   const [navcolor, setNavcolor] = useState(false);

//   const path = window.location.pathname;

//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setNavcolor(true);
//     } else {
//       setNavcolor(false);
//     }
//   };
//   window.addEventListener("scroll", changeBackground);

//   return (
//     <>
//       <Navbar
//         collapseOnSelect
//         expand="md"
//         className={
//           navcolor
//             ? "nav-container colorChange fixed-top"
//             : "nav-container fixed-top"
//         }
//       >
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />

//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Container className="d-flex justify-content-center">
//             <Nav>
//               <NavLink
//                 exact
//                 to="/"
//                 className="nav-link font-bold"
//                 activeClassName="active"
//               >
//                 HOME
//               </NavLink>

//               <NavLink
//                 to="#introSection"
//                 className="nav-link font-bold"
//                 activeClassName="active"
//               >
//                 ABOUT
//               </NavLink>

//               <NavLink
//                 to="#eduSection"
//                 className="nav-link font-bold"
//                 activeClassName="active"
//               >
//                 EDUCATION
//               </NavLink>

//               <NavLink
//                 to="/projects"
//                 className="nav-link font-bold"
//                 activeClassName="active"
//               >
//                 PROJECTS
//               </NavLink>

//               <NavLink
//                 to="/skills"
//                 className="nav-link font-bold"
//                 activeClassName="active"
//               >
//                 SKILLS
//               </NavLink>

//               <NavLink
//                 to="/extracurricular"
//                 className="nav-link font-bold"
//                 activeClassName="active"
//               >
//                 EXTRACURRICULAR
//               </NavLink>

//               <NavLink
//                 to="/contact"
//                 className="nav-link font-bold"
//                 activeClassName="active"
//               >
//                 CONTACT
//               </NavLink>
//             </Nav>
//           </Container>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// };

// export default Navbars;
