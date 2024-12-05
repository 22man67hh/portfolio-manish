import React from 'react';
import './Myproject.css';
import ovs1 from "../../assets/image.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";

export default function MyProject() {
  return (
    <div>
      <div className="projects__content">
        <div className="projects__box">
          <div className="projects__data">
            <i className="bx bx-badge-check"></i>
            <div className="projects__text">
              <h3 className="projects__name">Online Election System</h3>
              <p className="projects__subtitle">
                A simple voting system where users can create a voter ID and cast their vote. 
                Admins can start or stop the election and publish results.
              </p>
              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>SQL</li>
              </ul>
            </div>
            <img src={ovs1} alt="Online Voting System" className="projects__img" />
          </div>
          
        </div>

        
      </div>


      <div className="projects__content">
        <div className="projects__box">
          <div className="projects__data">
          <img src={p2} alt="Online Voting System" className="projects__img" />

            <i className="bx bx-badge-check"></i>
            <div className="projects__text">
              <h3 className="projects__name">Room Finder with chatify</h3>
              <p className="projects__subtitle">
  A user-friendly web application designed to help individuals find and book rooms or flats effortlessly. The platform includes real-time chat functionality to facilitate seamless communication with landlords and offers integrated Khalti payment support for secure and convenient transactions.
</p>

              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Laravel</li>
                <li>SQL</li>
              </ul>
            </div>

          </div>
          
        </div>

        
      </div>


      <div className="projects__content">
        <div className="projects__box">
          <div className="projects__data">
          
            <i className="bx bx-badge-check"></i>
            <div className="projects__text">
              <h3 className="projects__name">Online Voting System with Face Detection Algorithm</h3>
              <p className="projects__subtitle">
              An advanced online voting system developed to ensure secure and transparent elections. The platform incorporates face detection algorithms for voter verification and implements two-factor authentication to enhance security. This system streamlines the voting process while maintaining the integrity and confidentiality of voter data.
              </p>

              <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Spring Boot</li>
                <li>SQL</li>
                <li>Thymeleaf</li>
                
              </ul>

            </div>
            <img src={p3} alt="Online Voting System" className="projects__img" />

          </div>
          
        </div>

        
      </div>

      <div className="projects__content">
        <div className="projects__box">
          <div className="projects__data">
          
            <i className="bx bx-badge-check"></i>
            <div className="projects__text">
              <h3 className="projects__name">Online Food Ordering(REST API)</h3>
              <p className="projects__subtitle">
              Developed a fully functional REST API for a food ordering system using Spring Boot. This API allows users to browse food options, place orders, and view their order history. It implements JWT token authentication for secure access and role-based authorization for admins and users. The API is designed to handle operations such as user registration, login, and order management.              </p>

              <ul className="skills-list">
                
                <li>Spring Boot</li>
                <li>SQL</li>
               
                
              </ul>

            </div>

          </div>
          
        </div>

        
      </div>


    </div>
  );
}
