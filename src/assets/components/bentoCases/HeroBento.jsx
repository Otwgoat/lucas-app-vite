import { ArrowRight } from "@phosphor-icons/react";

import { useExpand } from "../../context/ExpandContext";
import { motion } from "framer-motion";

const HeroBento = () => {
  const containerId = "heroBentoCase";
  const { isExpanded, toggleExpand } = useExpand();
  const handleClick = () => {
    toggleExpand(containerId);
  };

  return (
    <motion.div
      className={`bentoCase ${isExpanded === containerId ? "expanded" : ""}`}
      id={containerId}
      initial={{
        width: "530px",
        height: "220px",
      }}
      animate={
        isExpanded === containerId
          ? {
              width: "805px",
              height: "550px",
              position: "absolute",
              top: -10,
              left: 0,
              zIndex: 5,
            }
          : {
              width: "530px",
              height: "220px",
              position: "relative",
              zIndex: 1,
            }
      }
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 0.5,
        ease: "ease-in-out",
      }}
    >
      <div className="heroBentoCaseSection noisyContainer" id="heroBanner">
        <h1>Lucas Jouffroy</h1>
        <h2>Développeur web</h2>
      </div>
      <div className="heroBentoCaseSection" id="heroBannerContent">
        <div id="heroBannerContentHeader">
          <h3>À propos</h3>
          <span onClick={handleClick}>
            <ArrowRight color="whitesmoke" size={20} weight="bold" />
          </span>
        </div>
        <div id="heroBannerContentBody">
          <p>
            Bonjour, je suis un jeune developpeur web front-end, motivé par l
            {"'"}envie de contribuer à des projets innovants et de créer de
            belles expériences utilisateur...
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroBento;
