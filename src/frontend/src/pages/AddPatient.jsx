import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { getAllPatients } from '../controllers/patients';
import {addPatient} from  '../controllers/medecins';
import { getAllPatients as GetAlls } from '../controllers/medecins' ;
import Header from './headerMedecin';
import Footer from './footer';


const AddPatient = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllPatients();
                if (response.success && Array.isArray(response.data)) {
                    setPatients(response.data);
                } else {
                    console.error('Format de réponse inattendu:', response);
                    setPatients([]);
                }
            } catch (error) {
                alert(`Erreur: ${error.message}`);
                setPatients([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleAddPatient = async (PatientId) => {
        try {
            const response = await addPatient(PatientId);

            if (response) {
                alert("Patient ajouté avec succès");
                navigate('/MedecinPatients');
            }else if (!response){
                alert("Le Patient existe deja ");

            }
             else {
                alert("Il y a eu un problème lors de l'ajout du patient");
            }
        } catch (error) {
            alert(`Erreur: ${error.message}`);
        }
    };
    const VerifListPatients = async (patientId) => {
        try {
            const response = await GetAlls();
    
            // Assurez-vous que la réponse est bien formatée
            if (Array.isArray(response.patients)) {
                // Chercher si le patient avec l'id donné existe
                const patientExists = response.patients.some(patient => patient._id === patientId);
                return patientExists; 
                // Retourne true si trouvé, sinon false
            } else {
                console.error('Format de réponse inattendu:', response);
                return false; // Retourne false en cas de format inattendu
            }
        } catch (error) {
            console.error(`Erreur: ${error.message}`);
            return false; // Retourne false en cas d'erreur
        }
    };

  return (
    <>
    <Header />
    <div style={{ backgroundColor: '#d2e8d2', padding: '0px', height: '100vh',width:"100vw" }}>

  
     <div className="container mt-5 pt-5" style={{ backgroundColor: '#d2e8d2', padding: '20px', height: '100vh' }}>
     

        

        <div className="body" style={{backgroundColor: "#d2e8d2", width:"auto",height:"auto"}}>
             <h1 style={{ textAlign:"center", paddingTop:"5%", paddingBottom:'5%' }}> Bienvenue sur le Dashboard de vos Patients</h1>
             <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ 
                        position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1100px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                    }}></div>
                    
            </div>
            

            <table class="table"  >
                <thead style={{paddingTop: "10%"}} >
                    <tr >
                        <th scope="col"style={{backgroundColor: "#d2e8d2",paddingTop: "10%"}}></th>
                        <th scope="col"style={{backgroundColor: "#d2e8d2",paddingTop: "10%"}}>FirstName</th>
                        <th scope="col"style={{backgroundColor: "#d2e8d2",paddingTop: "10%"}}>LastName</th>
                        <th scope="col"style={{backgroundColor: "#d2e8d2",paddingTop: "10%"}}>Email</th>
                        <th scope="col"style={{backgroundColor: "#d2e8d2",paddingTop: "10%"}}> </th>

                    </tr>
                    
                </thead>
                <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ 
                        position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1250px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                    }}></div>
                    
            </div>
                <tbody > 
                    {!patients ?    <h1>        Chargement des Patients  
                                        <Spinner animation="border" role="status" style={{ marginLeft: '20px', marginTop: "20px" }}> 
                                          <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </h1>:
                    patients.map((patient) => (

                        <tr >
                            <th scope="row" style={{backgroundColor: "#d2e8d2"}}>
                                <a  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                    </svg>
                                    
                                </a>
                            </th>
                            <td style={{backgroundColor: "#d2e8d2"}}>{patient.firstName}</td>
                            <td style={{backgroundColor: "#d2e8d2"}}>{patient.lastName}</td>
                            <td style={{backgroundColor: "#d2e8d2"}}>{patient.email}</td>
                            
                            <td style={{backgroundColor: "#d2e8d2"}}>
                            { ! VerifListPatients(patient._id)=== false ?

                                <a type="button" onClick={() => handleAddPatient(patient._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                                       <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                       <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                                    </svg>
                                </a>
                                    :
                                    <a style={{ position: 'relative', zIndex: 1,pointerEvents: 'none',  cursor: 'not-allowed' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
                                         <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                         <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                                    </svg>
                                    </a>
                                }
                                
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
        </div>
        </div>
        <Footer/>

    </>  )
}

export default AddPatient