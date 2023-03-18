import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutAs from "./components/AboutAs";
import GamePlay from "./components/GamePlay";
import MySlider from "./components/MySlider";
import Roadmap from "./components/Roadmap";
import FAQs from "./components/FAQs";
import Team from "./components/Team";
import MyFooter from "./components/MyFooter";
function App() {
  return (
    <>
      <div className="bg_hero d-flex flex-column  vh_100">
        <NavBar />
        <HeroSection />
      </div>
      <AboutAs />
      <GamePlay />
      <MySlider />
      <Roadmap />
      <Team/>
      <FAQs />
      <MyFooter/>
    </>
  );
}

export default App;
