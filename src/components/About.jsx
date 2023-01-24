import React from "react";
import Profile from '../assets/image/romy.jpeg'
function About() {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200">
          <div className="img-box">
            <img src={Profile} alt="smiling a girl" />
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
              A <span className="color-theme">Counselling Psychologist</span>{" "}
              based in <span className="color-theme">South Africa</span>
            </h5>
            <p>
            I am a Counselling Psychologist who is committed to assisting clients in a holistic and meaningful way. 

My therapeutic approach is integrative, taking into account the lived experiences of each individual; their sociocultural context, and their cognitive; emotional; behavioural; physiological; and interpersonal systems. 

I believe that clients are the experts of their own lives, and my goal is to facilitate healing, growth, and resilience by drawing on an individual’s inner strengths and resources. It is my priority to select the best therapeutic approach that meets the subjective needs of my client.

My areas of interest include, but are not limited to, gender and sexuality related challenges; depression; anxiety; trauma; bereavement and loss; adjustment and life transition difficulties; attachment difficulties, and identity struggles.
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Title</label>
                  <p>Counselling Psychologist</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Johannesburg</p>
                </div>
                <div className="media">
                  <label>LinkedIn</label>
                  <p>linkedin.com/in/romy-dimant-738555178</p>
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
