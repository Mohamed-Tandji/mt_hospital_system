import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Card  from 'react-bootstrap/Card';
import { Spinner,Row,Col } from 'react-bootstrap';
import { Link, useNavigate  } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getPatient } from '../controllers/medecins';
import Header from './headerMedecin';
import Footer from './footer';


const MedecinPatient = () => {
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
                            
                        <h1 style={{ textAlign:"center", paddingTop:"5%" }}>Bienvenue sur le Dashboard de .......</h1>
                            
                        <div style={{ position: 'relative', width: '100%' }}>
                            <div style={{ 
                                position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1300px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                            }}></div>
                            <div className="d-flex justify-content-end" style={{ marginTop: '20px' }}>
                                <Link className="btnfile" to={`/AddPatient/`} style={{ position: 'relative', zIndex: 1 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                </svg>
                                </Link>
                            </div>
                        </div>
                        </div>

                        <Card style={{ backgroundColor: '#ffff', width:"50vw" , height: "100vh", margin: "",}}>
                            <Card.Header style={{ backgroundColor: '#ffff' }}>Patient Infos</Card.Header>
                            <Card.Body style={{ backgroundColor: '#ffff' }}>
                                <Card.Title>Chargement des infos du Patient       
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
                                
                            <h1 style={{ textAlign:"center" , paddingTop:"5%" }}>Bienvenue sur le Dashboard de {User.firstName}   {User.lastName}</h1>
                                
                                <div style={{ position: 'relative', width: '100%' }}>
                            <div style={{ 
                                position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1300px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                            }}></div>
                            <div className="d-flex justify-content-end" style={{ marginTop: '20px' }}>
                                <Link className="btnfile" to={`/MedecinAddPatientDoc`} style={{ position: 'relative', zIndex: 1 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                                </svg>
                                </Link>
                            </div>
                            </div>
                            </div>

                            <Card style={{ backgroundColor: '#ffff', width:"50vw" , height: "100vh", margin: "",}}>
                                <Card.Header style={{ backgroundColor: '#ffff' }}>Patient Infos</Card.Header>
                                <Card.Body style={{ backgroundColor: '#ffff' }}>
                                    <Card.Title style={{ fontWeight:"bold",paddingTop:"40%",fontSize:"40px" }} > <center> Ce Patient n'a pas de  Dossier Medical </center></Card.Title>
                                    <Card.Text style={{ fontWeight:"bold",}}><center> Veuillez creer un Dossier Medical </center> </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    
                    
                    :

                    
                    <div style={{ flex: '1', paddingTop: '60px', paddingBottom: '70px', overflowY: 'auto', backgroundColor: '#d2e8d2' }}>
                    <div style={{ backgroundColor: '#d2e8d2', padding: '20px' }}>
                        
                    <h1 style={{ textAlign:"center" , paddingTop:"5%"}}>Bienvenue sur le Dashboard de {User.firstName}   {User.lastName}</h1>
                        
                        <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ 
                        position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1300px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                    }}></div>
                    <div className="d-flex justify-content-end" style={{ marginTop: '20px' }}>
                     <Link className="btnfile"  style={{ position: 'relative', zIndex: 1,pointerEvents: 'none',  opacity: 0.5, cursor: 'not-allowed' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                        </svg>
                     </Link>
                    </div>
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
                              <Card.Subtitle>Date</Card.Subtitle>
                                <div style={{ height: '1px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                                <Card.Text>
                                {!User.docMedical.ExamensTests[0].Date ?'Encours ...' : User.docMedical.ExamensTests[0].Date}
                                                          
                               </Card.Text>
                                <Card.Subtitle>Types d'Examens</Card.Subtitle>
                                <div style={{ height: '1px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                                <Card.Text>
                                {!User.docMedical.ExamensTests[0].type ? 'Type inconnu   pour le moment': User.docMedical.ExamensTests[0].type }

                                </Card.Text>
                                <Card.Subtitle>Resultats </Card.Subtitle>
                                <div style={{ height: '1px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                                <Card.Text>
                                    {!User.docMedical.ExamensTests[0].resultats ?'Aucuns Resultats  pour le moment' : User.docMedical.ExamensTests[0].resultats }
                                      
                                </Card.Text>
                                <Card.Subtitle>Commentaires </Card.Subtitle>
                                <div style={{ height: '1px', backgroundColor: 'gray', marginBottom: '10px', width: '100%' }}></div>
                                <Card.Text>
                                    {!User.docMedical.ExamensTests[0].commentaires ?'Aucuns Commentaires  pour le moment' : User.docMedical.ExamensTests[0].commentaires }
                                      
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
                            
                            <center>
                                    <Link className="btnfile1" to={`/MedecinUpdatePatientDoc/`} style={{  zIndex: 1 ,justifyItems: "center", paddingRight:'12%' }}> 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                        </svg>
                                    </Link>
                            </center>
                        </Card.Body>
                    </Card> 

                   </div> 

                  }

                    
                
            
            <Footer />
        </div>
  )
}

export default MedecinPatient