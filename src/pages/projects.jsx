import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import Image from "./projectdata";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Student's work | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
            THINGS OUR STUDENTS MADE TO BRING THEIR IMAGINATION TO NEXT LEVEL THROUGH OUR COURSE
            </div>

            <div className="subtitle projects-subtitle">
            We've worked on a variety of projects over the years and I'm proud of the progress We've made.
            Many of these projects are open-source and available for others to explore and contribute to.
            If you're interested in any of the projects We've worked on, please feel free to check out. 
            Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>

          {/* Video Section */}
          <div className="video-section">
            <h2>Featured Videos</h2>
            <div className="video-grid">
            {
              Image.map((photo) =>{
                const {image, link, index} = photo;
                return(
                <div key={index} className="video-thumbnail">
                <a href={link} target="_blank">
                  <img style={{height:"200px", width:"300px"}} src={image} alt="image" />
                </a>
                </div>
              )}
            )
            }
              {/* earlier location */}
            </div>
          </div>
        </div>


        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
