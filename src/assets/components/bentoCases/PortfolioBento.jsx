import { useExpand } from "../../context/ExpandContext";
import { AnimatePresence, motion } from "framer-motion";
import portfolioData from "../../../data/portfolioData.json";
import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import ExpandPortfolioContainer from "../expanded/ExpandedPortfolioContainer";
const PortfolioBento = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const containerId = "portfolioBentoCase";
  const { isExpanded, toggleExpand } = useExpand();
  const handleClick = () => {
    toggleExpand(containerId);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setProjectIndex((prevIndex) =>
        prevIndex + 1 >= portfolioData.length ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearTimeout(timer);
  }, [projectIndex]);

  return (
    <motion.div
      className={`bentoCase ${isExpanded === containerId ? "expanded" : ""}`}
      id={containerId}
      onClick={handleClick}
      initial={{
        width: "255px",
        height: "290px",
      }}
      layout
      animate={
        isExpanded === containerId
          ? {
              width: "815px", // Largeur totale du conteneur parent
              height: "560px", // Hauteur totale du conteneur parent
              position: "absolute", // Sort de la grille
              bottom: -10,
              right: -10,
              zIndex: 5, // Passe devant les autres éléments
            }
          : {
              position: "absolute",
            }
      }
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 0.5,
        ease: "ease-in-out",
      }}
    >
      {isExpanded === containerId ? (
        <ExpandPortfolioContainer projectInView={projectIndex} />
      ) : (
        <div className="portfolioImgContainer">
          <AnimatePresence mode="popLayout">
            {portfolioData.map((project, index) =>
              index === projectIndex ? (
                <motion.img
                  key={index}
                  src={project.imageSmall}
                  alt={`Image de l'application ${project.title}`}
                  initial={{ y: "100%" }} // L'image entrante commence en bas
                  animate={{ y: "0%" }} // L'image entre en place
                  exit={{ y: "-100%" }} // L'image sort par le haut
                  transition={{
                    duration: 1, // Durée de chaque animation
                    ease: "easeIn",
                    type: "spring",
                    bounce: 0.3,
                  }}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : null
            )}
          </AnimatePresence>
          <button>
            Portfolio{" "}
            <span>
              <ArrowRight size={15} color="whitesmoke" weight="bold" />
            </span>
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default PortfolioBento;
