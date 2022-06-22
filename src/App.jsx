import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import About from "./pages/About/About";
import ElegirFoto from "./pages/ElegirFoto/ElegirFoto";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import { Context } from "./shared/Context/Context";
import RequireAuth from "./shared/Auth/Auth";

function App() {

  const [imagenPerfil, setImagenPerfil] = useState(
    );

  return (
    <Context.Provider value={{ imagenPerfil, setImagenPerfil }}>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<RequireAuth><Inicio></Inicio></RequireAuth>}></Route>
            <Route path="/about" element={<RequireAuth><About></About></RequireAuth>}></Route>
            <Route
              path="/choosepicture"
              element={<ElegirFoto></ElegirFoto>}
            ></Route>
            <Route path="*" element={<Inicio></Inicio>}></Route>
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}

export default App;
