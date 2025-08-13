import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PlantillaPrincipal from './layouts/PlantillaPrincipal';
import Home from './pages/Home';
import Services from './pages/Services';
import WhoWeAre from './pages/WhoWeAre';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <PlantillaPrincipal>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/works" element={<Works />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </PlantillaPrincipal>
    </Router>
  );
}

export default App;