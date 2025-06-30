import { About } from "./assets/components/About";

import { Header } from "./assets/components/Header";
import Blobs from "./assets/components/Blobs";
import HeroBanner from "./assets/components/HeroBanner";
import { Social } from "./assets/components/Social";
import { Portfolio } from "./assets/components/Portfolio";
import { Contact } from "./assets/components/Contact";
import { Footer } from "./assets/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Social />
      <div className="pageContainer" id="homePageContainer">
        <Blobs />
        <HeroBanner />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
