import "bootstrap/dist/css/bootstrap.min.css"
import Background from './components/Background';
import Header from './components/Header'
import Mainsection from './components/Mainsection'
import About from "../src/components/About"
import Contact from "./components/Contact";
import DoctorsPortal from "./components/DoctorsPortal";
import PatientsPortal from "./components/PatientsPortal";
import Navbar from "./components/Navbar";
import Report from "../src/components/Report";
const App = () => {
  return (
    <div className="box">
      <Header />
      <Background />
      <Mainsection />
      <About />
      <Contact />
    </div>
  );
}

export default App;
