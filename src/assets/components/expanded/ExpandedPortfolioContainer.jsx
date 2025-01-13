import { motion } from "framer-motion";
import { useState } from "react";
import portfolioData from "../../../data/portfolioData.json";
import PropTypes from "prop-types";
const ExpandPortfolioContainer = ({ projectInView }) => {
  const [projectsIndex] = useState(projectInView);
  const projectUrl = portfolioData[projectsIndex].url;
  return (
    <motion.div id="expandPortfolioContainer">
      <div className="customPortfolioNav">
        {portfolioData.map((project) => (
          <button key={project.title} className="portfolioNavButton" />
        ))}
      </div>
      <div className="expandPortfolioContainerContent">
        <motion.img src={portfolioData[projectsIndex].imageLarge} />
        <div className="cardContent">
          <div className="cardContentHeader">
            <h2>{portfolioData[projectsIndex].title}</h2>
            <p>{portfolioData[projectsIndex].year}</p>
          </div>
          <div className="cardContentBody">
            <p>{portfolioData[projectsIndex].description}</p>
            {projectUrl ? <a href={projectUrl}>Visiter le site web</a> : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
ExpandPortfolioContainer.propTypes = {
  projectInView: PropTypes.number.isRequired,
};
export default ExpandPortfolioContainer;
