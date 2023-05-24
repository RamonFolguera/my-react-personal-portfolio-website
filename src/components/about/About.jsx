import React from "react";
import "./About.css";
import ME from "../../assets/yo.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
          <article className="about_card">
            <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small>FullStack Develpment Bootcamp at GeeksHubs</small>
          </article>
          {/* <article className="about_card">
            <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>200+ Clients Worldwide</small>
          </article> */}
          <article className="about_card">
            <VscFolderLibrary className="about_icon" />
            <h5>Projects</h5>
            <small>10+ Completed projects</small>
          </article>
          </div>
        <p>
        I have always been interested in technology and software development. Although they are very different from architecture, which has been my profession for the past years, I believe I can utilize my expertise in planning, problem-solving, and developing projects from the foundations up to the finished small details.
        <p>
        </p>
        I have recently completed a Full Stack Developer Bootcamp at GeeksHubs in Valencia. This has prepared us at a great speed to manage big amounts of work in a short time and simulate a work environment situation.
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
        </div>

      </div>
    </section>
  );
};
