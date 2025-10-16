import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // ← Importar aquí
import PlantillaPrincipal from './layouts/PlantillaPrincipal';
import ContactPage from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import WhoWeAre from './pages/WhoWeAre';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ← Agregar aquí, dentro del Router pero antes de las rutas */}
      <PlantillaPrincipal>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/works" element={<Works />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PlantillaPrincipal>
    </Router>
  );
}

export default App;