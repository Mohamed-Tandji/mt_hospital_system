import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '60px', // Augmente la hauteur pour plus de visibilité
      backgroundColor: '#4dd869',
      color: '#fff',
      padding: '10px 0',
      textAlign: 'center',
      zIndex: 1000, // Assure que le footer est au-dessus du contenu
    }}>
      <Container>
        <p style={{ margin: 0 }}>
          <strong>MT Société</strong> - <strong>MT Hospital</strong><br />
          &copy; 2024
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
