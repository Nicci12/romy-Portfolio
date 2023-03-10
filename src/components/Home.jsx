import React from "react";
import Header from "./Header";
import About from "./About";
import Service from "./Services";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Slider from "./Slider"
import useDocumentTitle from "./useDocumentTitle";

const Home = () => {
  useDocumentTitle("Romy Portfolio");
  return (
    <>
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Services</h3>
              <p>
                My area's of intrest and expertise include but are not limited to:
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}

      {/* <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">About me:</h3>
              <p>
              I am a Counselling Psychologist who is committed to assisting clients in a holistic and meaningful way. 

My therapeutic approach is integrative, taking into account the lived experiences of each individual; their sociocultural context, and their cognitive; emotional; behavioural; physiological; and interpersonal systems. 

I believe that clients are the experts of their own lives, and my goal is to facilitate healing, growth, and resilience by drawing on an individual???s inner strengths and resources. It is my priority to select the best therapeutic approach that meets the subjective needs of my client.

My areas of interest include, but are not limited to, gender and sexuality related challenges; depression; anxiety; trauma; bereavement and loss; adjustment and life transition difficulties; attachment difficulties, and identity struggles.
              </p>
            </div>
          </div>
          {/* End .row */}
          {/* <Portfolio /> */}
        {/* </div>
      </section> */}
      {/* End Portfolio */}

      {/* <div className="section testimonial">
        <div className="container">
          <Testimonial />
        </div>
      </div> */}
      {/* End testimonial */}

      {/* Blog */}
      {/* <section id="blog" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Recent articles</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          {/* End .row */}
          {/* <Blog /> */}
        {/* </div>
      </section> */} 
      {/*  End Blog */}

      {/* Contact */}
      <section id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact us</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div
                  className="sm-title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <h4 className="font-alt">Get in touch</h4>
                </div>

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                  Upper Grayston Office Park, Block B, 150 Linden Street, 
                  Block B, <br />
                  150 Linden Street, <br />
                  Sandown
                  </span>
                </div>
                {/* End media */}

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body">
                    rdimant@gmail.com
                  </span>
                </div>
                {/* End media */}

                <div
                  className="media"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="150"
                >
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">
                    +27 823022471
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </>
  );
};

export default Home;
