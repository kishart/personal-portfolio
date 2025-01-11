
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import './App.css';
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe/ContactMe";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
  <>
  <Navbar />
  <div className="container">
    <Hero />
  
    <Skills />
    <WorkExperience />
   
    <ContactMe />
  </div>

  </>
  );
}

export default App;