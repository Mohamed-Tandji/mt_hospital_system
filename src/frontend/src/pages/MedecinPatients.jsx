import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getAllPatients,deletePatients } from '../controllers/medecins';
import Header from './headerMedecin';
import Footer from './footer';
import Modal from './Modal';


const MedecinPatients = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [isFirstLoading, setisFirstLoading] = useState(true);
    

    const [isModalOpen, setModalOpen] = useState(false);

        // const handleDelPatient = (PatientsId) => {
    //     const response=deletePatients(PatientsId);
    //     alert(" Patient Successfully deleted");
    //     window.location.reload();
    // }
    const handleDelPatient = async (PatientsId) => {
        try {
            const response = await deletePatients(PatientsId);
            
            if (response===true) {
                alert("Patient Supprimer avec succes");
                window.location.reload();
                // setModalOpen(true); // Ouvre le modal
            } else {
                alert("Failed to delete patient.");
            }
        } catch (error) {
            console.error("Error deleting patient:", error);
            alert("An error occurred while deleting the patient.");
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        window.location.reload(); // Recharge la page après fermeture du modal
    };

    const handleGetPatient = (PatientId) => {
        sessionStorage.setItem("PatientId", PatientId);
        navigate(`/MedecinPatient`);
        

    }

    const fetchData = async () => {
        try {
            const response = await getAllPatients();
            // Assurez-vous que la réponse est bien formatée
            if (response.success && Array.isArray(response.patients)) {
                setPatients(response.patients);
            } else {
                console.error('Format de réponse inattendu:', response);
                setPatients([]);
            }
        } catch (error) {
            alert(`Erreur: ${error.message}`);
            setPatients([]);
        }

    }
    if (isFirstLoading) {
        setisFirstLoading(false);
        fetchData();
    }

  return (
    <>
    <Header />
    <div style={{ backgroundColor: '#d2e8d2', padding: '0px', height: '100vh',width:"100vw" }}>

  
     <div className="container mt-5 pt-5" style={{ backgroundColor: '#d2e8d2', padding: '20px', height: '100vh' }}>
     

        

        <div className="body" style={{backgroundColor: "#d2e8d2", width:"auto",height:"auto"}}>
             <h1 style={{ textAlign:"center", paddingTop:"5%" }}> Bienvenue sur le Dashboard de vos Patients</h1>
             <div style={{ position: 'relative', width: '100%' }}>
                    <div style={{ 
                        position: 'absolute',top: '50%',left: 0,right: '50%',height: '2px',width: '1000px',backgroundColor: 'black', transform: 'translateY(-50%)' 
                    }}></div>
                    <div className="d-flex justify-content-end" style={{ marginTop: '20px' }}>
                        <Link className="btnfile" to={`/AddPatient/`} style={{ position: 'relative', zIndex: 1, fontWeight:'bold' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                        </svg>
                        </Link>
                    </div>
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
                                <a type="button" onClick={() => handleGetPatient(patient._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </a>
                            </th>
                            <td style={{backgroundColor: "#d2e8d2"}}>{patient.firstName}</td>
                            <td style={{backgroundColor: "#d2e8d2"}}>{patient.lastName}</td>
                            <td style={{backgroundColor: "#d2e8d2"}}>{patient.email}</td>

                            <td style={{backgroundColor: "#d2e8d2"}}>
                                <a type="button" onClick={() => handleDelPatient(patient._id)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                </svg></a>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                message="Le patient a été supprimé avec succès"
            />
        </div>
        </div>
        </div>
        <Footer/>

    </>
  )
}

export default MedecinPatients