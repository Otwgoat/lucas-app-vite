import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const About = () => {
  const containerId = "aboutContentSection";
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="pageContentSection" id={containerId}>
      <h2>À propos</h2>
      <div className="content" id="aboutContentContainer">
        <div className="contentSection" id="contentDescription">
          <p>
            Après plusieurs années dans le commerce et la logistique, j’ai
            découvert avec passion le monde du développement web et j’ai
            entrepris une reconversion dans ce domaine. Ayant toujours été
            attiré par l’informatique et les nouvelles technologies, j’ai adoré
            apprendre et comprendre cet univers en constante évolution.
            Aujourd’hui, j’essaye d’en faire mon métier, tout en prenant en
            compte les enjeux de cette activité.
          </p>
          {isMobile && !seeMore ? null : (
            <p>
              Je m’intéresse particulièrement aux approches comme
              l’éco-conception, la performance des sites et l’accessibilité. Ce
              qui me motive dans le développement web, c’est la possibilité de
              répondre à des besoins concrets, qui facilitent la vie des
              utilisateurs, de trouver des solutions techniques à des
              problématiques variées et de continuer à apprendre sans cesse.
              J’apprécie aussi la dimension créative de ce métier, qui permet
              d’imaginer et de concevoir des interfaces uniques et adaptées à
              chaque demande. Je souhaite évoluer dans un environnement
              stimulant où je pourrai progresser, partager des idées et
              contribuer à des projets porteurs de sens.
            </p>
          )}
          {isMobile ? (
            <button onClick={() => setSeeMore(!seeMore)} id="seeMoreButton">
              {seeMore ? "Fermer" : "Voir plus"}
            </button>
          ) : null}
        </div>
        <div className="contentSection" id="heroContentSection">
          <div id="heroImgContainer">
            <img src="/images/iconemap.png" alt="Photo de Lucas Jouffroy" />
          </div>
        </div>
      </div>
    </div>
  );
};
