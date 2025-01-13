import { useEffect, useRef, useState } from "react";
import { useExpand } from "../context/ExpandContext";

export const Header = () => {
  const [isActive, setIsActive] = useState("homeTab");

  const { isExpanded, setIsExpanded } = useExpand();
  useEffect(() => {
    if (isExpanded === null) {
      setIsActive("homeTab");
    } else if (isExpanded === "heroBentoCase") {
      setIsActive("aboutTab");
    } else if (isExpanded === "portfolioBentoCase") {
      setIsActive("portfolioTab");
    }
  }, [isExpanded]);
  const handleOnClick = (tabName) => {
    setIsActive(tabName);
    if (tabName === "homeTab") {
      setIsExpanded(null);
    } else if (tabName === "aboutTab") {
      setIsExpanded("heroBentoCase");
    } else if (tabName === "portfolioTab") {
      setIsExpanded("portfolioBentoCase");
    }
  };
  const filter = useRef(null);
  useEffect(() => {
    const activeTab = document.querySelector(`#${isActive}`);
    const tabRect = activeTab.getBoundingClientRect();
    const ulRect = activeTab.parentNode.getBoundingClientRect();
    const currentFilter = filter.current;
    const leftOffset = tabRect.left - ulRect.left - 2;
    currentFilter.style.transform = `translateX(${leftOffset}px)`;
    currentFilter.style.width = `${tabRect.width}px`;
  }, [isActive]);
  return (
    <header>
      <div className="navBar">
        <ul>
          <div ref={filter} className="activeFilter"></div>
          <li
            id="homeTab"
            className={
              isActive === "homeTab" && isExpanded === null ? "active" : ""
            }
            onClick={() => handleOnClick("homeTab")}
            aria-selected={isActive === "homeTab"}
          >
            <a href="#home">Accueil</a>
          </li>
          <li
            id="aboutTab"
            className={isExpanded === "heroBentoCase" ? "active" : ""}
            onClick={() => handleOnClick("aboutTab")}
            aria-selected={isActive === "aboutTab"}
          >
            <a href="#about">À propos</a>
          </li>
          <li
            id="portfolioTab"
            className={isActive === "portfolioTab" ? "active" : ""}
            onClick={() => handleOnClick("portfolioTab")}
          >
            <a href="#portfolio">Portfolio</a>
          </li>
          <li
            id="contactTab"
            className={isActive === "contactTab" ? "active" : ""}
            onClick={() => handleOnClick("contactTab")}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
