import React from 'react';
import './notFound.css';


const NotFound = () => {
  return (
    
    <div className="service-unavailable-container">
      <div className="message-container">
        <h1 className="title">Service Indisponible</h1>
        <p className="message">
          Nous sommes désolés, mais le service que vous recherchez est actuellement
          indisponible. Veuillez réessayer plus tard ou contacter notre support si
          le problème persiste.
        </p>
        <button className="contact-button" onClick={() => window.location.href = 'mailto:support@example.com'}>
          Contacter le Support
        </button>
      </div>
    </div>
  )
}

export default NotFound


