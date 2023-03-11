import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [view, setView] = useState(1);
  const viewTap = (index) => {
    setView(index);
  };

  return (
    <section className="qfc section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My Personel Journey</span>

      <div className="qfc-container container">
        <div className="qfc-tabs">
          <div
            className={
              view === 1
                ? "qfc-button qfc-active button--flex"
                : "qfc-button button--flex"
            }
            onClick={() => viewTap(1)}
          >
            <i className="uil uil-graduation-cap qfc-icon"></i> Education
          </div>

          <div
            className={
              view === 2
                ? "qfc-button qfc-active button--flex"
                : "qfc-button button--flex"
            }
            onClick={() => viewTap(2)}
          >
            <i className="uil uil-briefcase-alt qfc-icon"></i> Experience
          </div>
        </div>
        <div className="qfc-section">
          <div
            className={
              view === 1 ? "qfc-content qfc-content-active" : "qfc-content"
            }
          >
            <div className="qfc-data">
              <div>
                <h3 className="qfc-title">Web Design</h3>
                <span className="qfc-subtitle">SL - Institute</span>
                <div className="qfc-calender">
                  <i className="uil uil-calender"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qfc-rounder"></span>
                <span className="qfc-line"></span>
              </div>
            </div>

            <div className="qfc-data">
              <div></div>
              <div>
                <span className="qfc-rounder"></span>
                <span className="qfc-line"></span>
              </div>

              <div>
                <h3 className="qfc-title">Art Director</h3>
                <span className="qfc-subtitle">SL - Institute</span>
                <div className="qfc-calender">
                  <i className="uil uil-calender"></i> 2022 - Present
                </div>
              </div>
            </div>

            <div className="qfc-data">
              <div>
                <h3 className="qfc-title">Web Developer</h3>
                <span className="qfc-subtitle">SL - Institute</span>
                <div className="qfc-calender">
                  <i className="uil uil-calender"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qfc-rounder"></span>
                <span className="qfc-line"></span>
              </div>
            </div>

            <div className="qfc-data">
              <div></div>
              <div>
                <span className="qfc-rounder"></span>
                <span className="qfc-line"></span>
              </div>

              <div>
                <h3 className="qfc-title">UX/UI Designer</h3>
                <span className="qfc-subtitle">SL - Institute</span>
                <div className="qfc-calender">
                  <i className="uil uil-calender"></i> 2022 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              view === 2 ? "qfc-content qfc-content-active" : "qfc-content"
            }
          >
            <div className="qfc-data">
              <div>
                <h3 className="qfc-title">Product Designer</h3>
                <span className="qfc-subtitle">SL - Institute</span>
                <div className="qfc-calender">
                  <i className="uil uil-calender"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qfc-rounder"></span>
                <span className="qfc-line"></span>
              </div>
            </div>

            <div className="qfc-data">
              <div></div>
              <div>
                <span className="qfc-rounder"></span>
                <span className="qfc-line"></span>
              </div>

              <div>
                <h3 className="qfc-title">UI/UX Desiner</h3>
                <span className="qfc-subtitle">SL - Institute</span>
                <div className="qfc-calender">
                  <i className="uil uil-calender"></i> 2022 - Present
                </div>
              </div>
            </div>

            <div className="qfc-data">
              <div>
                <h3 className="qfc-title">Web Designer</h3>
                <span className="qfc-subtitle">SL - Institute</span>
                <div className="qfc-calender">
                  <i className="uil uil-calender"></i> 2022 - Present
                </div>
              </div>

              <div>
                <span className="qfc-rounder"></span>
                <span className="qfc-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
