import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPatient } from '../controllers/patients';
import Header from './headerMedecin';
import Footer from './footer';

const MedecinHome = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <div style={{ flex: '1', paddingTop: '60px', paddingBottom: '70px', overflowY: 'auto', backgroundColor: '#d2e8d2' }}>
                <div style={{ backgroundColor: '#d2e8d2', padding: '20px' }}>
                    <h1 style={{ textAlign: "center", paddingTop: "5%" }}>Bienvenue sur votre Dashboard</h1>

                    <div style={{ position: 'relative', width: '100%' }}>
                        <div style={{
                            position: 'absolute', top: '50%', left: 0, right: '50%', height: '2px', width: '1300px', backgroundColor: 'black', transform: 'translateY(-50%)'
                        }}></div>
                        <div className="d-flex justify-content-end" style={{ marginTop: '20px' }}>
                            <Link className="btnfile" to={`/PatientDoc/`} style={{ position: 'relative', zIndex: 1 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Align the cards side by side */}
                    <Row>
                        <Col md={6}>
                            <Card style={{ backgroundColor: '#ffff', height: "auto" }}>
                                <Card.Body>
                                    <Card.Title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
                                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                                        </svg> Prochain Rendez-vous
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "25px", fontWeight: "bold" }}>
                                        { '03/09/2024'}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card style={{ backgroundColor: '#ffff', height: "auto" }}>
                                <Card.Body>
                                    <Card.Title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                                        </svg> Examens
                                    </Card.Title>
                                    <Card.Text style={{ fontSize: "30px", fontWeight: "bold" }}>
                                        {'Prise de sang de john@gmail.com'}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            <Footer />
        </div>
  )
}

export default MedecinHome