import React, { useState } from 'react';
import './qualification.css';

export default function Qualification() {
  const [activeTab, setActiveTab] = useState(1); // State to track the active tab

  return (
    <section className="qualification section" id='portfolio'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          {/* Education Tab */}
          <div
            className={activeTab === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => setActiveTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>Education
          </div>

          {/* Experience Tab */}
          <div
            className={activeTab === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={() => setActiveTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* Education Content */}
          <div
            className={activeTab === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
          >
         
  {/* Bachelor's Degree */}
  <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Bachelor in Computer Application (BCA)
                </h3>
                <span className="qualification__subtitle">
                  Tribhuvan University Ratna Rajya Laxmi
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020-present
                </div>
              </div>
            </div>



            {/* +2 Education */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">+2 <span>Science</span></h3>
                <span className="qualification__subtitle">Junior Citizens Academy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018-2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          


   {/* Secondary Education */}
   <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> 
              
              <div>
                <h3 className="qualification__title">
                  Secondary Education Examination (SEE)
                </h3>
                <span className="qualification__subtitle">
                  Chirgadi English Boarding School (Pokhara)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018 Batch
                </div>
              </div>
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> 
            </div>
           

          </div>

          {/* Experience Content */}
          <div
            className={activeTab === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
          >
            {/* Example Experience */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">3 Months as Web developer</h3>
                <span className="qualification__subtitle">EEE Innovation Ghar</span>
                <div className="qualification__calender">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
