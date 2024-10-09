import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import ContactPage from './components/ContactPage';
import PhotographyPage from './components/PhotographyPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Productpage" element={<ProjectPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/PhotographyPage" element={<PhotographyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
