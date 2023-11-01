import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import FormCargaInfoFiscales from "./components/FormCargaInfoFiscales/FormCargaInfoFiscales";
import MapPage from "./components/PaginaMap/MapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MANEJO DE RUTAS NO CREADAS */}
        <Route exact path="*" element={<h1>Not Found</h1>} />

        {/* COMPONENTES PRINCIPALES */}
        <Route path="/" element={<FormCargaInfoFiscales />} />
        <Route path="/mapas" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
