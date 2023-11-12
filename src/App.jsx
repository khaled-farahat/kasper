import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Design from "./components/Design/Design";
import Portfolio from "./components/Portfolio/Portfolio";
import Video from "./components/Video/Video";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Quote from "./components/Quote/Quote";
import Prices from "./components/Prices/Prices";
import Subscribe from "./components/Subscribe/Subscribe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Services />
      <Design />
      <Portfolio />
      <Video />
      <About />
      <Skills />
      <Quote />
      <Prices />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
