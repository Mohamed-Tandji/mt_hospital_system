import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card  from 'react-bootstrap/Card';
import { Spinner,Row,Col } from 'react-bootstrap';
import { Link, useNavigate  } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getPatient } from '../controllers/patients';
import Header from './header';
import Footer from './footer';

const PatientDoc = () => {
    const navigate = useNavigate();
     const patientId = sessionStorage.getItem("PatientId");
    const [User, setUser] = useState(null);  // Utilisez useState pour stocker l'utilisateur
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPatient(patientId);
                setUser(data.data);  // Stockez les données de l'utilisateur
            } catch (error) {
                alert(`Erreur: ${error.message}`);
            }
        };

        if (patientId) {
            fetchData();
        }
    }, [patientId]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
            <Header />
                  { !User ?

                        <div style={{ flex: '1', paddingTop: '60px', paddingBottom: '70px', overflowY: 'auto', backgroundColor: '#d2e8d2' }}>
                        <div style={{ backgroundColor: '#d2e8d2', padding: '20px' }}>
                            
                        <h1 style={{ textAlign:"center", paddingTop:"5%" }}>Bienvenue  .......</h1>
                            
                            <div style={{ position: 'relative', width: '100%' }}>
                        <div style={{ 
                            position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1300px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                        }}></div>
                        
                        </div>
                        </div>

                        <Card style={{ backgroundColor: '#ffff', width:"50vw" , height: "100vh", margin: "",}}>
                            <Card.Header style={{ backgroundColor: '#ffff' }}>Patient Infos</Card.Header>
                            <Card.Body style={{ backgroundColor: '#ffff' }}>
                                <Card.Title>Chargement de Infos       
                                    <Spinner animation="border" role="status" style={{ marginLeft: '20px', marginTop: "20px" }}> 
                                          <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                : !User.docMedical ? 

                    <div style={{ flex: '1', paddingTop: '60px', paddingBottom: '70px', overflowY: 'auto', backgroundColor: '#d2e8d2' }}>
                            <div style={{ backgroundColor: '#d2e8d2', padding: '20px' }}>
                                
                            <h1 style={{ textAlign:"center", paddingTop:"5%" }}>Bienvenue {User.firstName}   {User.lastName}</h1>
                                
                                <div style={{ position: 'relative', width: '100%' }}>
                            <div style={{ 
                                position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1300px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                            }}></div>
                            
                            </div>
                            </div>

                            <Card style={{ backgroundColor: '#ffff', width:"50vw" , height: "100vh", margin: "",}}>
                                <Card.Header style={{ backgroundColor: '#ffff' }}>Patient Infos</Card.Header>
                                <Card.Body style={{ backgroundColor: '#ffff' }}>
                                    <Card.Title style={{ fontWeight:"bold",paddingTop:"40%",fontSize:"40px" }} > <center> Vous n'avez pas de  Dossier Medical </center></Card.Title>
                                    <Card.Text style={{ fontWeight:"bold",}}><center> Votre medecin devra creer un Dossier Medical </center> </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    
                    
                    :

                    
                    <div style={{ flex: '1', paddingTop: '60px', paddingBottom: '70px', overflowY: 'auto', backgroundColor: '#d2e8d2' }}>
                    <div style={{ backgroundColor: '#d2e8d2', padding: '20px' }}>
                        
                    <h1 style={{ textAlign:"center", paddingTop:"5%" }}>Bienvenue  {User.firstName}   {User.lastName}</h1>
                        
                        <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ 
                        position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1300px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                    }}></div>
                    
                    </div>
                    </div>

                    <Card style={{ backgroundColor: '#ffff', width: "70vw", height: "auto", margin: "" }}>
                        <Card.Header style={{ backgroundColor: '#ffff' }}>Patient Infos</Card.Header>
                        <Card.Body style={{ backgroundColor: '#ffff' }}>
                        
                        <Row>
                            <Col md={6} className="mb-3">
                                <Card style={{ backgroundColor: '#e9ecef', width:'500px'}}>
                                    <Card.Body>
                                        <Card.Title>Nas</Card.Title>
                                        <Card.Text>
                                            {!User.docMedical.InfosPatient.nas ? 
                                                'Aucunes Consultations ou Hospitalisations pour le moment' : 
                                                User.docMedical.InfosPatient.nas
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Card style={{ backgroundColor: '#e9ecef', width:'500px' }}>
                                    <Card.Body>
                                        <Card.Title>Email</Card.Title>
                                        <Card.Text>
                                            {!User.docMedical.InfosPatient.email ? 
                                                'Aucunes Consultations ou Hospitalisations pour le moment' : 
                                                User.docMedical.InfosPatient.email
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Card style={{ backgroundColor: '#e9ecef', width:'500px' }}>
                                    <Card.Body>
                                        <Card.Title>Date de Naissance</Card.Title>
                                        <Card.Text>
                                            {!User.docMedical.InfosPatient.dateNaissance ? 
                                                'Aucunes Consultations ou Hospitalisations pour le moment' : 
                                                User.docMedical.InfosPatient.dateNaissance
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Card style={{ backgroundColor: '#e9ecef', width:'500px' }}>
                                    <Card.Body>
                                        <Card.Title>Sexe</Card.Title>
                                        <Card.Text>
                                            {!User.docMedical.InfosPatient.sexe ? 
                                                'Aucunes Consultations ou Hospitalisations pour le moment' : 
                                                User.docMedical.InfosPatient.sexe
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <div style={{ height: '3px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>

                            <Card.Title>Historique Medical</Card.Title><br/>
                                <Card.Subtitle>Antecedents Familiaux</Card.Subtitle>
                                <div style={{ height: '1px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                                <Card.Text>
                                {!User.docMedical.HistoriqueMedical.antecedentsFamiliaux ? 'Aucuns Antecedents Familiaux pour le moment' : User.docMedical.HistoriqueMedical.antecedentsFamiliaux}
                                                          
                               </Card.Text>
                                <Card.Subtitle>Allergies</Card.Subtitle>
                                <div style={{ height: '1px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                                <Card.Text>
                                {!User.docMedical.HistoriqueMedical.allergies ? 'Aucunes Allergies  pour le moment': User.docMedical.HistoriqueMedical.allergies }

                                </Card.Text>
                                <Card.Subtitle>Conditions Chroniques</Card.Subtitle>
                                <div style={{ height: '1px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                                <Card.Text>
                                    {!User.docMedical.HistoriqueMedical.conditionsChroniques ?'Aucuns Conditions Chroniques pour le moment' : User.docMedical.HistoriqueMedical.conditionsChroniques }
                                      
                                </Card.Text>
                            
                            
                            
                            <div style={{ height: '3px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                            <Card.Title>Consultations & Hospitalisations</Card.Title>
                            <Card.Text>
                                {!User.docMedical.ConsultationsHospitalisations[1]? 'Aucunes Consultations ou Hospitalisations pour le moment' :User.docMedical.ConsultationsHospitalisations[1]  }

                            </Card.Text>
                            <div style={{ height: '3px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                            <Card.Title>Examens & Tests</Card.Title>
                            <Card.Text>
                                {!User.docMedical.ExamensTests[1]? 'Aucuns Examens ou Tests pour le moment' :User.docMedical.ExamensTests[1]  }
                            </Card.Text>
                            <div style={{ height: '3px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                            <Card.Title>Medicaments actuels</Card.Title>
                            <Card.Text>
                            {!User.docMedical.MedicamentsActuels ? 'Aucuns Medicaments Actuels pour le moment' : User.docMedical.MedicamentsActuels}
                            </Card.Text>
                            <div style={{ height: '3px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                            <Card.Title>Vaccinations</Card.Title>
                            <Card.Text>
                            {!User.docMedical.Vaccinations ? 'Aucunes Vaccinations  pour le moment' : User.docMedical.Vaccinations }
                            </Card.Text>
                            <div style={{ height: '3px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                            <Card.Title>Prochaines Echeances</Card.Title>
                            <Card.Text>
                            {!User.docMedical.ProchainesEcheances ? 'Aucunes Echeances  pour le moment': User.docMedical.ProchainesEcheances }
                            </Card.Text>
                            
                           
                        </Card.Body>
                    </Card> 

                   </div> 

                  }

                    
                
            
            <Footer />
        </div>
  )
}

export default PatientDoc