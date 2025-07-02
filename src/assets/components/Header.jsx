import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { HeaderMobile } from "./HeaderMobile";
import { Navbar } from "./Navbar";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  useEffect(() => {
    if (!isMobile) {
      const header = document.querySelector("header");
      let scrollTimeout;

      const onScroll = () => {
        console.log("scroll");
        header.classList.add("hidden");
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          header.classList.remove("hidden");
        }, 150);
      };
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        clearTimeout(scrollTimeout);
      };
    }
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
