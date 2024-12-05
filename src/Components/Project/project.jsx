import React from 'react';
import MyProject from './MyProject';
import './project.css';
export default function Project() {
  return (
    <section className="project section" id="project">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">My Projects</span>
      <div className="projects__container">
        <div className="projects__content">
          <div className="project__container container grid">
            <MyProject />
          </div>
        </div>
      </div>
    </section>
  );
}
