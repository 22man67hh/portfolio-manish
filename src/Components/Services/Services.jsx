import React, { useState } from 'react';
import './service.css';

export default function Services() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Developer</h3>
          </div>
          <span className="services__button" onClick={toggleModal}>
            View more <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          {isModalOpen && (
            <div className="services__modal active-modal">
              <div className="services__modal-content">
                <i
                  className="uil uil-times services__modal-close"
                  onClick={toggleModal}
                ></i>
                <h3 className="services__modal-title">My Services</h3>
                <p className="services__modal-description">
                  Newbie with no experience, currently searching for an internship.
                </p>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <span className="services__modal-info">
                      I develop the user interface.
                    </span>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <span className="services__modal-info">
                      Web page development.
                    </span>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <span className="services__modal-info">
                      I can develop REST APIs in Spring Boot.
                    </span>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <span className="services__modal-info">
                      I can develop Laravel projects.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
