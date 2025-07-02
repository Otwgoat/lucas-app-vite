import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { HeaderMobile } from "./HeaderMobile";
import { Navbar } from "./Navbar";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      console.log("scroll");
      header.classList.add("hidden");
    });
    window.addEventListener("scrollend", () => {
      header.classList.remove("hidden");
    });
  }, []);

  return (
    <>
      {!isMobile ? (
        <header>
          <Navbar />
        </header>
      ) : (
        <HeaderMobile />
      )}
    </>
  );
};
