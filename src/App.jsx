import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import Hero from './sections/Hero.jsx'
import TechStack from "./sections/TechStack";
import LogoShowcase from "./sections/LogoSection.jsx";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <ShowcaseSection/>
      <LogoShowcase/>
      <TechStack />
      <Contact />
      <Footer /> 
    </>
  )
}

export default App