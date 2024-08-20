// src/pages/Acceuil.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer';

const Acceuil = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5 pt-5">
        <h1>Accueil</h1>
        <p>Bienvenue sur la page d'accueil.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Acceuil;
