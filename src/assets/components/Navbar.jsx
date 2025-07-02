import { useState } from "react";

export const Navbar = () => {
  const [isActive] = useState("homeTab");

  return (
    <nav className="navBar">
      <ul>
        <li
          id="homeTab"
          className={isActive === "homeTab" ? "active" : ""}
          aria-selected={isActive === "homeTab"}
        >
          <a href="#">Accueil</a>
        </li>
        <li
          id="aboutTab"
          className={isActive === "aboutTab" ? "active" : ""}
          aria-selected={isActive === "aboutTab"}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("aboutContentSection").scrollIntoView();
            }}
          >
            À propos
          </a>
        </li>
        <li
          id="portfolioTab"
          className={isActive === "portfolioTab" ? "active" : ""}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("portfolioContentSection")
                .scrollIntoView();
            }}
          >
            Portfolio
          </a>
        </li>
        <li
          id="contactTab"
          className={isActive === "contactTab" ? "active" : ""}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contactContentSection").scrollIntoView();
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
