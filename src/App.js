import "bootstrap/dist/css/bootstrap.min.css"
import Background from './components/Background';
import Header from './components/Header'
import Mainsection from './components/Mainsection'
import About from "../src/components/About"
import Contact from "./components/Contact";
import DoctorsPortal from "./components/DoctorsPortal";
import PatientsPortal from "./components/PatientsPortal";
import Sign_in from "./components/Sign_in";
const App = () => {
  return (
    <div className="box">
      <Header />
      <Mainsection />
      <About />
      <Contact />
      <DoctorsPortal />
      <PatientsPortal />
      <Sign_in />
      {/* <Background />
       <Header />
      <Mainsection />  */}
    </div>
  );
}

export default App;
