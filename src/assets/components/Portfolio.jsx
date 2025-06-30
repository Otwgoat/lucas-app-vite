import { useRef, useState } from "react";
import portfolioData from "../../data/portfolioData.json";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const containerId = "portfolioContentSection";
  const [projectIndex, setProjectIndex] = useState(0);

  const textRef = useRef(null);
  const backgroundRef = useRef(null);
  const cardOne = useRef(null);
  const cardTwo = useRef(null);
  const [dragMax, setDragMax] = useState(false);
  const [projects] = useState(portfolioData);
  const [dragProgress, setDragProgress] = useState(0);
  const handleDragEnd = (event, info) => {
    const threshold = 400;
    if (Math.abs(info.offset.x) > threshold) {
      setDragMax(true);
      setProjectIndex((prev) => (prev + 1) % projects.length);
    } else {
      if (textRef.current) {
        textRef.current.style.transform = "translateY(0)";
      }
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = "translateY(0)";
      }
    }

    setDragProgress(0);
    setDragMax(false);
  };

  const handleDrag = (event, info) => {
    setDragProgress(info.offset.x / window.innerWidth);
    if (!dragMax) {
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${
          -dragProgress * 250
        }px)`;
      }
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${
          -dragProgress * 150
        }px)`;
      }
    } else if (Math.abs(info.offset.x) > 600) {
      handleDragEnd();
    }
  };

  return (
    <div className="pageContentSection" id={containerId}>
      <h2>Portfolio</h2>
      <div className="content" id="portfolioContentContainer">
        <motion.div className="portfolioProjectsCards">
          <motion.div
            ref={cardOne}
            className="card"
            style={{
              backgroundImage: `url(${projects[projectIndex].imageLarge})`,
              backgroundSize: "cover",
            }}
            drag={"x"}
            dragConstraints={{ left: 0, right: 50, top: 0, bottom: 0 }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            key={`current-${projectIndex}`}
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.6, type: "spring" }}
          ></motion.div>

          <motion.div
            ref={cardTwo}
            className="card"
            style={{
              backgroundImage: `url(${
                projects[(projectIndex + 1) % projects.length].imageLarge
              })`,
              backgroundSize: "cover",
            }}
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            key={`next-${projectIndex}`}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, type: "spring" }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="portfolioDescriptionBody"
          ref={textRef}
          key={projects[projectIndex].id}
          layout
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 1,
            ease: "easeIn",
            type: "spring",
            bounce: 0.3,
          }}
        >
          <h3>{projects[projectIndex].title}</h3>
          <p>{projects[projectIndex].year}</p>
          <p>{projects[projectIndex].description}</p>
        </motion.div>

        <motion.div
          className="portfolioProjectsBackground"
          ref={backgroundRef}
          key={projects[projectIndex].title}
          style={{
            backgroundImage: `url(${projects[projectIndex].imageLarge})`,
            filter: `brightness(0.5)`,
            backgroundPosition: `top`,
          }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            ease: "easeIn",
            type: "spring",
            bounce: 0.3,
          }}
        ></motion.div>
        <motion.div id="projectsCounter">
          <p>
            <span>
              {projectIndex + 1 < 10
                ? `0${projectIndex + 1}`
                : projectIndex + 1}
            </span>{" "}
            / {projects.length < 10 ? `0${projects.length}` : projects.length}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
