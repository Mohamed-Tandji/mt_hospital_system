import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './headerMedecin';
import Footer from './footer';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { createPatientDoc } from '../controllers/medecins';


const MedecinAddPatientDoc = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        dateNaissance: '',
        sexe: '',
        adresse: '',
        telephone: '',
        email: '',
        nas: '',
        antecedentsFamiliaux: '',
        allergies: '',
        conditionsChroniques: '',
        medecin:'',
        specialite: '',
        motif: '',
        diagnostic: '',
        traitement: '',
        dateConsultation: '',
        typeExamen: '',
        resultatsExamen: '',
        commentairesExamen: '',
        medicamentsActuels: '',
        vaccinations: '',
        prochainesEcheances: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const response=createPatientDoc(formData);
            if (!response) {

                alert("Il y'a eu un probleme lors de la creation");

            }
            else{
                navigate("/MedecinPatients")
            }
            
        }
        setValidated(true);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'auto', backgroundColor: '#d2e8d2' }}>
            <Header />
            <div style={{ flex: '1', paddingTop: '60px', paddingBottom: '70px', backgroundColor: '#d2e8d2', height: '200vh' }}>
                <Form className="container" noValidate validated={validated} onSubmit={handleSubmit} style={{ backgroundColor: '#ffff', width: "50vw", marginTop: "5%", marginBottom: "5%", marginLeft: "25%", borderRadius: "2%" }}>
                    <h1><center>Créer un document médical</center></h1><br />
                    <div className='shadow-sm p-4 rounded-3' style={{ backgroundColor: '#ffff', borderRadius: "2%" }}>
                        
                        {/* Informations du patient */}
                        <h4>Informations du patient</h4>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="nom">
                                    <Form.Label>Nom</Form.Label>
                                    <Form.Control type="text" name="nom" value={formData.nom} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="prenom">
                                    <Form.Label>Prénom</Form.Label>
                                    <Form.Control type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="dateNaissance">
                                    <Form.Label>Date de Naissance</Form.Label>
                                    <Form.Control type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="sexe">
                                    <Form.Label>Sexe</Form.Label>
                                    <Form.Control as="select" name="sexe" value={formData.sexe} onChange={handleChange} required>
                                        <option>M</option>
                                        <option>F</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="adresse">
                                    <Form.Label>Adresse</Form.Label>
                                    <Form.Control type="text" name="adresse" value={formData.adresse} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="telephone">
                                    <Form.Label>Téléphone</Form.Label>
                                    <Form.Control type="text" name="telephone" value={formData.telephone} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="nas">
                                    <Form.Label>NAS</Form.Label>
                                    <Form.Control type="text" name="nas" value={formData.nas} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />

                        {/* Historique Médical */}
                        <h4>Historique Médical</h4>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="antecedentsFamiliaux">
                                    <Form.Label>Antécédents Familiaux</Form.Label>
                                    <Form.Control type="text" name="antecedentsFamiliaux" value={formData.antecedentsFamiliaux} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="allergies">
                                    <Form.Label>Allergies</Form.Label>
                                    <Form.Control type="text" name="allergies" value={formData.allergies} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="conditionsChroniques">
                                    <Form.Label>Conditions Chroniques</Form.Label>
                                    <Form.Control type="text" name="conditionsChroniques" value={formData.conditionsChroniques} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />

                        {/* Consultations et Hospitalisations */}
                        <h4>Consultations et Hospitalisations</h4>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="dateConsultation">
                                    <Form.Label>Date de Consultation</Form.Label>
                                    <Form.Control type="date" name="dateConsultation" value={formData.dateConsultation} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="medecin">
                                    <Form.Label>Médecin</Form.Label>
                                    <Form.Control type="text" name="medecin" value={formData.medecin} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="specialite">
                                    <Form.Label>Spécialité</Form.Label>
                                    <Form.Control type="text" name="specialite" value={formData.specialite} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="motif">
                                    <Form.Label>Motif de Consultation</Form.Label>
                                    <Form.Control type="text" name="motif" value={formData.motif} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="diagnostic">
                                    <Form.Label>Diagnostic</Form.Label>
                                    <Form.Control type="text" name="diagnostic" value={formData.diagnostic} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="traitement">
                                    <Form.Label>Traitement</Form.Label>
                                    <Form.Control type="text" name="traitement" value={formData.traitement} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />

                        {/* Examens et Tests */}
                        <h4>Examens et Tests</h4>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="typeExamen">
                                    <Form.Label>Type d'Examen</Form.Label>
                                    <Form.Control type="text" name="typeExamen" value={formData.typeExamen} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="resultatsExamen">
                                    <Form.Label>Résultats</Form.Label>
                                    <Form.Control type="text" name="resultatsExamen" value={formData.resultatsExamen} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="commentairesExamen">
                                    <Form.Label>Commentaires</Form.Label>
                                    <Form.Control type="text" name="commentairesExamen" value={formData.commentairesExamen} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />

                        {/* Médicaments Actuels */}
                        <h4>Médicaments Actuels</h4>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="medicamentsActuels">
                                    <Form.Label>Médicaments Actuels</Form.Label>
                                    <Form.Control type="text" name="medicamentsActuels" value={formData.medicamentsActuels} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />

                        {/* Vaccinations */}
                        <h4>Vaccinations</h4>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="vaccinations">
                                    <Form.Label>Vaccinations</Form.Label>
                                    <Form.Control type="text" name="vaccinations" value={formData.vaccinations} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />

                        {/* Prochaines Échéances */}
                        <h4>Prochaines Échéances</h4>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="prochainesEcheances">
                                    <Form.Label>Prochaines Échéances</Form.Label>
                                    <Form.Control type="text" name="prochainesEcheances" value={formData.prochainesEcheances} onChange={handleChange} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <br />
                        <Button type="submit" className='btn btn-success mt-3'>Créer</Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </div>
    )
}

export default MedecinAddPatientDoc;
