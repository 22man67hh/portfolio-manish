import React, { useState } from "react";
import "./Myproject.css";
import ovs1 from "../../assets/image.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/pic2.webp";

const projects = {
  personal: [
    {
      name: "Online Election System",
      description:
        "A simple voting system where users can create a voter ID and cast their vote. Admins can start or stop the election and publish results.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
      image: ovs1,
      imageAlt: "Online Voting System",
    },

    {
      name: "Online Voting System with Face Detection Algorithm",
      description:
        "An advanced online voting system developed to ensure secure and transparent elections. The platform incorporates face detection algorithms for voter verification and implements two-factor authentication to enhance security. This system streamlines the voting process while maintaining the integrity and confidentiality of voter data.",
      skills: ["HTML", "CSS", "JavaScript", "Spring Boot", "SQL", "Thymeleaf"],
      image: p3,
      imageAlt: "Online Voting System with Face Detection",
    },
    {
      name: "Online Food Ordering",
      description:
        "Developed a fully functional web app food ordering system using Spring Boot. This allows users to browse food options, place orders, and view their order history. It implements JWT token authentication for secure access and role-based authorization for admins and users. This app is designed to handle operations such as user registration, login, and order management.",
      skills: ["Spring REST", "SQL", "React", "Redux", "JWT"],
    },
    {
      name: "FarmVerse (A Farmer Universe)",
      description:
        "A web app that allows users to create and manage farms. It provides features such as farm registration, crop management,Crop prediction from analysis soil npk, weather prediction,Animal Disease Prediction,and plant disease prediction through plant leaves images.This app includes chat features and nearby farms with vehicle rental too. The app is built using React, Redux, and Material-UI.",
      skills: [
        "React",
        "Redux",
        "Material-UI",
        "Spring Boot",
        "SQL",
        "JWT",
        "Spring Security",
        "Apache Kafka",
      ],
      image: p4,
      imageAlt: "FarmVerse",
    },
  ],
  professional: [
    {
      name: "Home Care (CRM)",
      description:
        "A comprehensive enterprise resource tool. I spearheaded the development of the automated accounting and quotation modules, integrated a dynamic payroll system, and executed deep database optimizations to ensure seamless daily operations and high-performance data handling.",
      role: "Backend Developer",
      skills: ["Laravel", "Bootstrap", "MySQL", "JQuery", "PHP"],
      link: "https://crm.homecareservicenepal.com/",
    },
    {
      name: "Office Care Mobile App API",
      description:
        "Built and maintained backend APIs for the Office Care mobile app, enabling secure data access and smooth communication between the mobile application and the CRM system. The API work focused on business workflows, database operations, authentication, and reliable server-side performance.",
      role: "API Developer",
      skills: ["Laravel", "PHP", "MySQL", "REST API", "Authentication"],
      link: "https://play.google.com/store/apps/details?id=com.itcarenepal.groceriescare&hl=en",
    },
    {
      name: "Groceries Care Nepal webapp & Mobile App Api",
      description:
        "Build and maintained a groceries where user can place order and order delivery to their doorstep with safe payment from khalti esewa. This app also provides a mobile app api for the same.And For the admin side it will auto generate the bill and send to the user. and even we have added pos system for the admin side.",
      skills: [
        "Laravel",
        "Bootstrap",
        "MySQL",
        "JQuery",
        "PHP",
        "PUSHER",
        "Passport",
        "REST API",
        "Authentication",
      ],
      role: "Backend Developer",
      link: "https://groceriescarenepal.com/",
    },
    {
      name: "The Momo Grill",
      description:
        "This is a CRM-based food delivery web application where the admin has full control over operations. It integrates Square for payments and Twilio for communication. Currently, it is available as a web version.",
      role: "Full Stack Developer",
      skills: [
        "Laravel",
        "Tailwind",
        "MySQL",
        "jQuery",
        "PHP",
        "Twilio",
        "Square Payment",
        "REST API",
        "Authentication",
      ],
      link:"https://themomogrill.itcarenepal.com/"
    },
    {
      name: "Kasthamandap",
      description:
        "Kasthamandap is a full-stack CRM-based restaurant management system with integrated payment processing, Twilio communication services, and Pusher for real-time updates. It includes delivery management and advanced features like gift cards and promotional campaigns. The platform streamlines order processing, enables real-time notifications, enhances customer engagement, and improves overall business efficiency.",
      role: "Full Stack Developer",
      skills: [
        "Laravel",
        "Tailwind",
        "MySQL",
        "jQuery",
        "PHP",
        "Twilio",
        "Pusher",
        "Payment Integration",
        "REST API",
        "Authentication",
      ],
      link:"https://crm-kasthamandap-restaurant.ubochospitality.com/admin/categories"
    },
  ],
};

export default function MyProject() {
  const [activeTab, setActiveTab] = useState("professional");

  return (
    <div className="projects">
      <div
        className="projects__tabs"
        role="tablist"
        aria-label="Project categories"
      >
        <button
          type="button"
          className={
            activeTab === "personal"
              ? "projects__tab active-tab"
              : "projects__tab"
          }
          onClick={() => setActiveTab("personal")}
        >
          Personal Projects
        </button>
        <button
          type="button"
          className={
            activeTab === "professional"
              ? "projects__tab active-tab"
              : "projects__tab"
          }
          onClick={() => setActiveTab("professional")}
        >
          Professional
        </button>
      </div>

      {projects[activeTab].map((project) => (
        <div className="projects__content" key={project.name}>
          <div className="projects__box">
            <div
              className={
                project.reverse
                  ? "projects__data projects__data--reverse"
                  : "projects__data"
              }
            >
              <i className="bx bx-badge-check"></i>
              <div className="projects__text">
                <h3 className="projects__name">{project.name}</h3>
                {project.role && (
                  <span className="projects__role">{project.role}</span>
                )}
                <p className="projects__subtitle">{project.description}</p>
                <ul className="skills-list">
                  {project.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="projects__link"
                  >
                    View Project
                    <i className="uil uil-arrow-right projects__link-icon"></i>
                  </a>
                )}
              </div>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="projects__img"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
