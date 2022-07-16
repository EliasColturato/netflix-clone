import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Votados from './pages/Votados';
import Videos from './pages/Recomendações';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/votados" element={<Votados />} />
      <Route path="/trailer/:id" element={<Videos />} />
    </Routes>
  </BrowserRouter>
);
