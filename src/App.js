import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import PhotographyPage from './components/PhotographyPortfolio';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Projectspage" element={<ProjectsPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/PhotographyPortfolio" element={<PhotographyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
