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
            <small>3+ Years Working</small>
          </article>
          <article className="about_card">
            <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>200+ Clients Worldwide</small>
          </article>
          <article className="about_card">
            <VscFolderLibrary className="about_icon" />
            <h5>Projects</h5>
            <small>80+ Completed projects</small>
          </article>
          </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
          accusantium in nisi temporibus aperiam voluptates quisquam rem
          asperiores modi vel itaque repudiandae aspernatur iusto, alias soluta.
          Consectetur alias atque nobis.
        </p>
        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
        </div>

      </div>
    </section>
  );
};
