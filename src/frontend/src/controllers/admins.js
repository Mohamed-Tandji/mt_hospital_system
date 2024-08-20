import axios from "axios";


// {matricule,firstName,lastName,password,adresse ,email,specialite}

export async function Register(matricule,firstName,lastName,password,email,adresse) {
    const response = await axios.post('http://localhost:5001/admin/register', {
        'matricule': matricule,
        'firstName': firstName,
        'lastName': lastName, 
        'email': email, 
        'password': password,
        'adresse': adresse,
    });
    

try{
    if (response.data.success) {
        alert(`Connexion reussi ${response.status}`)
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('isPatient', response.data.isAdmin);
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
    const response = await axios.get('http://localhost:5001/admin/login', {
        "matricule": matricule,
        "password": password
    });
    console.log(response.data);
    if (response.status) {
        alert(`Connexion reussi ${response.status}`)
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('isDoctor', response.data.isAdmin);
        sessionStorage.setItem("id", response.data._id);

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