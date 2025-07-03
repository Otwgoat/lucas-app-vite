import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import { displayTech } from "../../utils/displayTech";

export const PortfolioMobile = ({ projects }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="content" id="portfolioContentContainer">
      <Swiper
        ref={swiperRef}
        style={{ height: "100%", width: "100%" }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {projects &&
          projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="portfolioProjectCard">
                <div className="cardImgContainer">
                  <img src={`../../${project.imageLarge}`} />
                </div>
                <div className="cardBodyContainer">
                  <h3>{project.title}</h3>
                  <p>{project.year}</p>
                  <div id="technoContainer">
                    {project.technologies.map((tech, index) => (
                      <p key={index}>{displayTech(tech)}</p>
                    ))}
                  </div>
                  <p id="projectDescription">{project.description}</p>
                  {project.url || project.github ? (
                    <button>
                      {project.url ? (
                        <a href={project.url}>Voir le site</a>
                      ) : (
                        <a href={project.github}>Voir le code</a>
                      )}
                    </button>
                  ) : null}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div id="projectsCounter">
        <p>
          <span>
            {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}
          </span>{" "}
          / {projects.length < 10 ? `0${projects.length}` : projects.length}
        </p>
      </div>
    </div>
  );
};
PortfolioMobile.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ).isRequired,
};
