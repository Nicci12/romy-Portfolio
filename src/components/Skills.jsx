import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2015-2018</span>
              <h6>BA Psychology</h6>
              <p>Witswaaterstrand</p>
            </li>

            <li>
              <span className="dark-bg">2018-2019</span>
              <h6>Honors in Psychology</h6>
              <p>Witswaaterstrand</p>
            </li>

            <li>
              <span className="dark-bg">2020-2021</span>
              <h6>Masters in Counselling Psychology</h6>
              <p>University of Johannesburg</p>
            </li>
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2018-2020</span>
              <h6>SADAG</h6>
              <p>Counselor</p>
            </li>

            <li>
              <span className="theme-bg">2020-2021</span>
              <h6>Counselling Psychologist-internship</h6>
              <p>Univiersity of Johannesburg</p>
            </li>

            <li>
              <span className="theme-bg">2022-present</span>
              <h6>Equanimity</h6>
              <p>Counselling Psychologist</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 ml-auto my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>Empathetic</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 100 + "%" }}
                >
                  <span>100%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Professional</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 100 + "%" }}
                >
                  <span>100%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Understanding</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 100 + "%" }}
                >
                  <span>100%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Nurturing</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 100 + "%" }}
                >
                  <span>100%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Patient</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 100 + "%" }}
                >
                  <span>100%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
