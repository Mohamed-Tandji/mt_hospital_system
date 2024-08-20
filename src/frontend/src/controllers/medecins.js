import axios from "axios";

// {matricule,firstName,lastName,password,adresse ,email,specialite}

export async function Register(matricule,firstName,lastName,password,email,specialites,phone) {
    const response = await axios.post('http://localhost:5005/medecin/register', {
        'matricule': matricule,
        'firstName': firstName,
        'lastName': lastName, 
        'specialites':specialites,
        'email': email, 
        'password': password,
        'phone': phone,
    });
    

try{
    if (response.data.success) {
        alert(`Connexion reussi ${response.status}`)
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('isPatient', response.data.isDoctor);
        sessionStorage.setItem("id", response.data._id);

        return true;
    }
    if (response.status == 400) {
        alert(`Entre incorrect!! ${response.status}`);
        return false;
    }
    if (response.status == 403) {
        alert(`User Already exist!! ${response.status}`);
        return false;
    }
    if (response.status == 404) {
        alert(`Not Found!! ${response.status}`);
        return false;
    }
    if (response.status == 401) {
        alert(` Unauthorized !! ${response.status}`);
        return false;
    }
    if (response.status == 409) {
        alert(` Bad request !! ${response.status}`);
        return false;
    }
    return false;}
    catch(error){
        console.log(error)
        if (error.response.status == 404) {
            alert(`Not Found!! ${response.status}`);
            return false;
        }
        if (error.response.status == 401) {
            alert(` Unauthorized !! ${response.status}`);
            return false;
        }
        if (error.response.status == 409) {
            alert(` Bad request !! ${response.status}`);
            return false;
        }
        return false;
    }

};



export async function login(matricule, password) {
    try {
        const response = await axios.post(`http://localhost:5005/medecin/login`, {
            'matricule': matricule,
            'password': password
        });
        if (response.status === 200) {
            const { id, token, isDoctor } = response.data.data;
            alert(`Connexion réussie ${response.status}`);
            sessionStorage.clear(); 
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('isDoctor', isDoctor);
            sessionStorage.setItem('id', id);
            return true;
        } else {
            alert(`Erreur lors de la connexion: ${response.status}`);
            return false;
        }
    } catch (error) {
        console.error("Erreur lors de la connexion", error);
        alert("Erreur lors de la connexion");
        return false;
    }
    
}

export async function getMedecins() {
    try {

    }
    catch (error) {

    }
}
export async function getPatient(PatientId) {
    try {
        const token = sessionStorage.getItem('token');
        const id = sessionStorage.getItem('id');
        
        if (!token || !id) {
            alert("Token ou ID manquant");
            return false;
        }

        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.get(`http://localhost:5005/medecin/${id}/getPatient/${PatientId}`, headers);

        if (response.status === 404) {
            alert(`Not Found!! ${response.status}`);
            return false;
        } else if (response.status === 401) {
            alert(`Unauthorized!! ${response.status}`);
            return false;
        } else if (response.status === 409) {
            alert(`Bad request!! ${response.status}`);
            return false;
        }


        return response.data;

    } catch (error) {
        alert(`Erreur: ${error.message}`);
    }
}
export async function getAllPatients() {
    try {
        const token = sessionStorage.getItem('token');
        const id = sessionStorage.getItem('id');
        
        if (!token || !id) {
            alert("Token ou ID manquant");
            return false;
        }

        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.get(`http://localhost:5005/medecin/${id}/getAllPatients`, headers);

        if (response.status === 404) {
            alert(`Not Found!! ${response.status}`);
            return false;
        } else if (response.status === 401) {
            alert(`Unauthorized!! ${response.status}`);
            return false;
        } else if (response.status === 409) {
            alert(`Bad request!! ${response.status}`);
            return false;
        }

        return response.data;
    } catch (error) {
        alert(`Erreur: ${error.message}`);
    }
}
export async function addPatient(PatientId) {
    try {
        const token = sessionStorage.getItem('token');
        const id = sessionStorage.getItem('id');
        
        if (!token || !id) {
            alert("Token ou ID manquant");
            return false;
        }
        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.post(`http://localhost:5005/medecin/${id}/addPatient/${PatientId}`, headers);

        if (response.status === 404) {
            alert(`Not Found!! ${response.status}`);
            return false;
        } else if (response.status === 401) {
            alert(`Unauthorized!! ${response.status}`);
            return false;
        } else if (response.status === 409) {
            alert(`Patient already exists !! ${response.status}`);
            return false;
        }


        return response.data;

    } catch (error) {
        alert(`Erreur: ${error.message}`);
    }
}

export async function updateMedecin() {
    try {

    }
    catch (error) {
        
    }
}

export async function deleteMedecin() {
    try {

    }
    catch (error) {
        
    }
}

export async function deletePatients(PatientId) {
    
    try {
               //http://localhost:5000/medecin/66ba23c8dd5c4ca7f1b0e6ce/deletePatient/66ba326de2926621e8f34fad

        const token = sessionStorage.getItem('token');
        const id = sessionStorage.getItem('id');
        
        if (!token || !id) {
            alert("Token ou ID manquant");
            return false;
        }

        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.delete(`http://localhost:5005/medecin/${id}/deletePatient/${PatientId}`, headers);

        if (response.status === 404) {
            alert(`Not Found!! ${response.status}`);
            return false;
        } else if (response.status === 401) {
            alert(`Unauthorized!! ${response.status}`);
            return false;
        } else if (response.status === 409) {
            alert(`Bad request!! ${response.status}`);
            return false;
        }


        return true;

    } catch (error) {
        alert(`Erreur: ${error.message}`);
    }
}
export async function createPatientDoc(FormData) {
    try {
        const id = sessionStorage.getItem('PatientId');
        
        if (!id) {
            alert(" ID manquant");
            return false;
        }
        const { nom,prenom,dateNaissance,sexe,adresse,
        telephone,email,nas,antecedentsFamiliaux,allergies,
        conditionsChroniques,medecin,specialite,motif,diagnostic,traitement,
        dateConsultation,typeExamen,resultatsExamen,commentairesExamen,
        medicamentsActuels,vaccinations, prochainesEcheances} =  FormData;

        const response = await axios.post(`http://localhost:5005/medecin/addMedicalDoc/${id}`, {

            "docMedical": {
              "InfosPatient": {
                "nom": nom,
                "prenom": prenom,
                "dateNaissance": dateNaissance,
                "sexe": sexe,
                "adresse": adresse,
                "telephone": telephone,
                "email": email,
                "nas": nas
              },
              "HistoriqueMedical": {
                "antecedentsFamiliaux": antecedentsFamiliaux,
                "allergies": allergies,
                "conditionsChroniques": conditionsChroniques
              },
              "ConsultationsHospitalisations": [
                {
                  "Date": dateConsultation,
                  "medecin":medecin, 
                  "specialite":specialite,
                  "motif": motif,
                  "diagnostic": diagnostic,
                  "traitement": traitement
                }
              ],
              "ExamensTests": [
                {
                  "Date": " ",
                  "type": typeExamen,
                  "resultats": resultatsExamen,
                  "commentaires": commentairesExamen
                }
              ],
              "MedicamentsActuels": medicamentsActuels,
              "Vaccinations": vaccinations,
              "ProchainesEcheances": prochainesEcheances
            }});

        if (response.data.success) {
                alert(`Creation reussi ${response.status}`)
                

                return true;
            }
        if (response.status == 400) {
            alert(`Entre incorrect!! ${response.status}`);
            return false;
        }
        if (response.status == 403) {
            alert(`User Already exist!! ${response.status}`);
            return false;
        }
        if (response.status == 404) {
            alert(`Not Found!! ${response.status}`);
            return false;
        }
        if (response.status == 401) {
            alert(` Unauthorized !! ${response.status}`);
            return false;
        }
        if (response.status == 409) {
            alert(` Bad request !! ${response.status}`);
            return false;
        }
        return false;
    }
     catch (error) {
    alert(`Erreur: ${error.message}`);
    return false;

    }
}

export async function updatePatientDoc() {
    try {

    }
    catch (error) {
        
    }
}