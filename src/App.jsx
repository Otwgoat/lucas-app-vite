import { InstagramLogo, LinkedinLogo, Mailbox } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import HeroBento from "./assets/components/bentoCases/HeroBento";
import PortfolioBento from "./assets/components/bentoCases/PortfolioBento";
import { Blobs } from "./assets/components/Blobs";
import { Header } from "./assets/components/Header";
import UnsplashBento from "./assets/components/bentoCases/UnsplashBento";
import { FaReact } from "react-icons/fa";
import { MapBento } from "./assets/components/bentoCases/MapBento";

function App() {
  const [currentDate, setCurrentDate] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [isAnimatingMinute, setIsAnimatingMinute] = useState(false);

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();
      const dateOptions = { day: "numeric", month: "long", year: "numeric" };
      const formattedDate = new Intl.DateTimeFormat(
        "fr-FR",
        dateOptions
      ).format(now);
      setCurrentDate(`${formattedDate}`);
      const hours = String(now.getHours()).padStart(2, "0");
      setHour(hours);

      const minutes = String(now.getMinutes()).padStart(2, "0");
      setMinute(minutes);
      setIsAnimatingMinute(true);
      setTimeout(() => setIsAnimatingMinute(false), 2000); // Réinitialise l'animation après 2s
    }

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Mise à jour toutes les minutes

    return () => clearInterval(interval); // Nettoyage à la fin du composant
  }, []);
  return (
    <>
      <Header />
      <div className="pageContainer" id="homePageContainer">
        <Blobs />
        <div className="contentContainer" id="homeContentContainer">
          <HeroBento />
          <PortfolioBento />
          <div id="bentoNoCase">
            <div className="bentoCircle">
              <InstagramLogo
                className="icon"
                color="rgba(245, 245, 245, 0.785)"
                size={30}
                weight="regular"
              />
            </div>
            <div className="bentoCircle">
              <LinkedinLogo color="whitesmoke" size={30} weight="regular" />
            </div>
            <div className="bentoCircle">
              <Mailbox color="whitesmoke" size={30} weight="regular" />
            </div>
          </div>
          <UnsplashBento />
          <div className="bentoCase" id="fourthBentoCase">
            <p>
              {currentDate} <span>{hour}:</span>
              <span className={isAnimatingMinute ? "animated" : ""}>
                {minute}
              </span>
            </p>
          </div>
          <MapBento />
          <div className="bentoCase" id="stackBentoCase">
            <FaReact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
