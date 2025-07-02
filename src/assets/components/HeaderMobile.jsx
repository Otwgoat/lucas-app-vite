import { Hamburger, XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { Social } from "./Social";
import { Navbar } from "./Navbar";

export const HeaderMobile = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <header className={hamburgerMenuOpen ? "displayHeader" : null}>
      <div id="headerTop">
        {hamburgerMenuOpen ? (
          <XCircle
            className="hamburgerMenuIcons"
            id="xcircleMenuIcon"
            size={40}
            weight="fill"
            color="#e2e2e2"
            onClick={() => setHamburgerMenuOpen(false)}
          />
        ) : (
          <Hamburger
            className="hamburgerMenuIcons"
            id="hamburgerMenuIcon"
            size={40}
            weight="fill"
            color="#e2e2e2"
            onClick={() => setHamburgerMenuOpen(true)}
          />
        )}
      </div>
      {hamburgerMenuOpen ? (
        <div id="headerBody">
          <Navbar />
          <Social />
        </div>
      ) : null}
    </header>
  );
};
