import { useMediaQuery } from "react-responsive";
import { HeaderMobile } from "./HeaderMobile";
import { Navbar } from "./Navbar";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

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
