import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [view, setView] = useState(0);
  const viewTap = (index) => {
    setView(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section-title">Services</h2>
      <span className="section-subtitle">What i offer</span>

      <div className="services-container container grid">
        <div className="services-content">
          <div>
            <i className="uil uil-web-grid services-icon"></i>
            <h3 className="services-title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => viewTap(1)}>
            View More
            <i className="uil uil-angle-double-right services-button-icon"></i>
          </span>
          <div
            className={
              view === 1 ? "services-model active-model" : "services-model"
            }
          >
            <div className="services-model-container">
              <i
                className="uil uil-times service-model-icon"
                onClick={() => viewTap(0)}
              ></i>
              <h3 className="services-model-title">Product Designer</h3>
              <p className="services-model-desc">
                Service with more then 1 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Develop the user interface
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">Web page development</p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    I Create UX element interactions
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    I Position your company brand
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Design and mockups of products for copanies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-arrow services-icon"></i>
            <h3 className="services-title">
              UI/UX <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => viewTap(2)}>
            View More
            <i className="uil uil-angle-double-right services-button-icon"></i>
          </span>
          <div
            className={
              view === 2 ? "services-model active-model" : "services-model"
            }
          >
            <div className="services-model-container">
              <i
                className="uil uil-times service-model-icon"
                onClick={() => viewTap(0)}
              ></i>
              <h3 className="services-model-title">UI/UX Designer</h3>
              <p className="services-model-desc">
                Service with more then 1 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Develop the user interface
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">Web page development</p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    I Create UX element interactions
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    I Position your company brand
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Design and mockups of products for copanies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-content">
          <div>
            <i className="uil uil-edit-alt services-icon"></i>
            <h3 className="services-title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services-button" onClick={() => viewTap(3)}>
            View More
            <i className="uil uil-angle-double-right services-button-icon"></i>
          </span>
          <div
            className={
              view === 3 ? "services-model active-model" : "services-model"
            }
          >
            <div className="services-model-container">
              <i
                className="uil uil-times service-model-icon"
                onClick={() => viewTap(0)}
              ></i>
              <h3 className="services-model-title">Visual Designer</h3>
              <p className="services-model-desc">
                Service with more then 1 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services-model-services grid">
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Develop the user interface
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">Web page development</p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    I Create UX element interactions
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    I Position your company brand
                  </p>
                </li>
                <li className="services-model-service">
                  <i class="uil uil-check-circle services-model-icon"></i>
                  <p className="services-model-info">
                    Design and mockups of products for copanies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
