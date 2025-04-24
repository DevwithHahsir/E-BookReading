import Header from "./componenets/header/Header";
import Home from "./componenets/pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"

function App() {
  return (
    <>
    <div className="app_components">

      <Header />
      <Home />
    </div>
    </>
  );
}

export default App;
