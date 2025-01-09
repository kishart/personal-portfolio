
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import './App.css';
import Skills from "./components/Skills/Skills";
const App = () => {
  return (
  <>
  <Navbar />
  <div className="container">
    <Hero />
    <Skills />
  </div>

  </>
  );
}

export default App;