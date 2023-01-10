import React from "react";

function About() {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200">
          <div className="img-box">
            <img src="img/about/about-4.jpg" alt="smiling a girl" />
          </div>
        </div>

        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100">
          <div className="typo-box about-me">
            <h3>Romy Dimant </h3>
            <h5>
              A <span className="color-theme">Clinical Psychologist</span>
              based in <span className="color-theme">South Africa</span>
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              egestas leo, sit amet porta ex. Praesent mi ligula, bibendum et
              velit eget, tempus maximus lorem. Donec fringilla, tortor vel
              pretium aliquam, libero quam viverra dui, in tincidunt elit nulla
              a erat. Sed vitae risus turpis. Nunc ullamcorper, nisi ut
              tristique tincidunt, nibh eros tincidunt velit, quis varius augue
              nisi sed justo. Morbi cursus tempus odio, eu accumsan justo auctor
              quis.
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>4th april 1991</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Canada</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>California, USA</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>rdimant@gmail.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>0823022471</p>
                </div>
                <div className="media">
                  <label>LinkedIn</label>
                  <p>linked-In Adress</p>
                </div>
                <div className="media">
                  <label>Appointments</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/resume.png" download>
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
}

export default About;
