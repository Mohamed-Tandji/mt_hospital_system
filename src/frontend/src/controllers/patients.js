import axios from "axios";

export async function Register(firstName,lastName, email, password,phone,adresse) {
    const response = await axios.post('http://localhost:5006/patient/register', {
        'firstName': firstName,
        'lastName': lastName, 
        'email': email, 
        'password': password,
        'phone': phone,
        'adresse':adresse
    });

try{
    if (response.data.success) {
        alert(`Connexion reussi ${response.status}`)
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('isPatient', response.data.isPatient);
        sessionStorage.setItem("PatientId", response.data._id);

        return true;
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



export async function login(email, password) {
    try {
    const response = await axios.post('http://localhost:5006/patient/login', {
        "email": email,
        "password": password
    });

    if (response.status) {
        alert(`Connexion reussi ${response.status}`)
        sessionStorage.setItem('token', response.data.data.token);
        sessionStorage.setItem("PatientId", response.data.data.id);

      return true;

    }
    if (response.status == 404) {
        alert(`Not Found!! ${response.status}`);
        return false;
    }
    else if (response.status == 401) {
        alert(` Unauthorized !! ${response.status}`);
        return false;
    }
    else if (response.status == 409) {
        alert(` Bad request !! ${response.status}`);
        return false;
    }
    return false;
  
    } catch (error) {
        console.log(error);
    }

}

export async function getPatient(patientId) {
    try {
        const token = sessionStorage.getItem('token');
        
        if (!token ) {
            alert("Token ou ID manquant");
            return false;
        }

        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.get(`http://localhost:5006/patient/getOne/${patientId}`, headers);

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
};


export async function getAllPatients() {
    try {
        const token = sessionStorage.getItem('token');
        
        if (!token ) {
            alert("Token manquant");
            return false;
        }

        const headers = { headers: { 'Authorization': `Bearer ${token}` } };
        const response = await axios.get(`http://localhost:5006/patient/getAllPatients`, headers);

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
