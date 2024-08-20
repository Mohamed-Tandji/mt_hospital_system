import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import PatientInput from '../components/PatientInput';
import { Register } from '../controllers/patients';



const PatientRegister = () => {
    const navigate = useNavigate();

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');
    const [adresse, setadresse] = useState('');

    const handleOnsubmit = (e) => {

        e.preventDefault(); // non-refresh la page

    }
    const handleOnChangefirstName = (e) => {

        setfirstName(e.target.value);
    }
    const handleOnChangelastName = (e) => {

        setlastName(e.target.value);
    }
    const handleOnChangeemail = (e) => {

        setEmail(e.target.value);
    }
    const handleOnChangepassword = (e) => {

        setpassword(e.target.value);
    }
    const handleOnChangephone = (e) => {

        setphone(e.target.value);
    }
    const handleOnChangeadresse = (e) => {

        setadresse(e.target.value);
    }
    const FunInscription = async () => {
        const response = await Register(firstName,lastName, email,  password,phone,adresse);
        if (response) {
            navigate("/PatientHome");
        } else {
            alert("Quelque chose ne fonctinne pas");
        }
        // handleReturn();

    }
    
/*
'firstName': firstName,
        'lastName': lastName, 
        'email': email, 
        'password': password,
        'phone': phone,
        'adresse':adresse
*/ 
  return (
    <>
        <div className='body1'>
            <div className="container">
            <form class="container-text" onSubmit={handleOnsubmit}>
                        <h1>Creer un compte</h1><br />
                        <div className='shadow-sm p-4 rounded-3 bg-light'>

                            <PatientInput
                                type='firstName'
                                title="firstName"
                                value={firstName}
                                handleOnChange={handleOnChangefirstName}
                            />
                            <br />
                            <PatientInput
                                type='lastName'
                                title="LastName"
                                value={lastName}
                                handleOnChange={handleOnChangelastName}
                            />
                            <br />
                            <PatientInput
                                type='email'
                                title="Email"
                                value={email}
                                handleOnChange={handleOnChangeemail}
                            />
                            <br />
                            <PatientInput
                                type='password'
                                title="Password"
                                value={password}
                                handleOnChange={handleOnChangepassword}
                            />
                            <br />
                            <PatientInput
                                type='phone'
                                title="Phone"
                                value={phone}
                                handleOnChange={handleOnChangephone}
                            />
                            <br />
                            <PatientInput
                                type='adresse'
                                title="Adresse"
                                value={adresse}
                                handleOnChange={handleOnChangeadresse}
                            />
                            <br />

                            <button type='submit' className='btn btn-success' onClick={FunInscription} value='button'>Creer</button>

                            <label >Vous avez un  compte ? <Link className='btn-primary1' to="/PatientLogin">Login</Link></label>&nbsp;
                        </div>
                    </form>

            </div>


        </div>
    </>

  )
}

export default PatientRegister