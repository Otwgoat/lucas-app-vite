import { motion } from "framer-motion";

const HeroBanner = () => {
  const containerId = "heroBanner";

  return (
    <motion.div className="heroBanner" id={containerId}>
      <div className="heroBannerSection" id="heroBannerTitle">
        <h1>Lucas Jouffroy</h1>
        <h2>Développeur web</h2>
      </div>
      <div className="heroBannerSection" id="heroBannerContent">
        <div id="heroBannerContentBody">
          <p>
            Bonjour, je suis un jeune developpeur web front-end, motivé par l
            {"'"}envie de contribuer à des projets innovants et de créer de
            belles expériences utilisateur...
          </p>
          <motion.button
            id="contactButton"
            style={{
              position: "relative",
              overflow: "hidden",

              backgroundColor: "#21242e",

              cursor: "pointer",
            }}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contactContentSection").scrollIntoView();
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                backgroundColor: "#4783c7",
                zIndex: 0,
              }}
              variants={{
                hover: {
                  left: 0,

                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            />
            <a style={{ position: "relative", zIndex: 1 }}>Me contacter</a>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
