import Home from "../src/componenets/pages/Home";
import Authors from "../src/componenets/pages/Authors";
import Gener from "../src/componenets/pages/Gener"
// import Romantic from "../src/componenets/pages/Romantic"
import {Routes,Route} from "react-router-dom"
import AppNavbar from "../src/componenets/navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  return (
    <>
      
      <div className="app_components">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
           <Route path="/gener" element={<Gener />} />
          {/* <Route path="/romantic" element={<Romantic />} />  */}
        </Routes>
      </div>
    </>
  );
}

export default App;
