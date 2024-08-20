import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import MedecinInput from '../components/MedecinInput';
import { Register } from '../controllers/medecins';

const MedecinRegister = () => {

    const navigate = useNavigate();

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [matricule, setmatricule] = useState('');
    const [specialites, setspecialites] = useState('');
    const [phone, setphone] = useState('');
    

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
    const handleOnChangematricule = (e) => {

        setmatricule(e.target.value);
    }
    const handleOnChangespecialites = (e) => {

        setspecialites(e.target.value);
    }
    const handleOnChangephone = (e) => {

        setphone(e.target.value);
    }
    
    const FunInscription = async () => {
        const response = await Register(matricule,firstName,lastName,password ,email,specialites,phone );
        if (response) {
            navigate("/MedecinHome");
        } else {
            alert("Quelque chose ne fonctinne pas");
        }
        // handleReturn();

    }

  return (
    <>
        <div className='body1'>
            <div className="container">
            <form class="container-text" onSubmit={handleOnsubmit}>
                        <h1>Creer un compte</h1><br />
                        <div className='shadow-sm p-4 rounded-3 bg-light'>

                            <MedecinInput
                                type='firstName'
                                title="firstName"
                                value={firstName}
                                handleOnChange={handleOnChangefirstName}
                            />
                            <br />
                            <MedecinInput
                                type='lastName'
                                title="LastName"
                                value={lastName}
                                handleOnChange={handleOnChangelastName}
                            />
                            <br />
                            <MedecinInput
                                type='email'
                                title="Email"
                                value={email}
                                handleOnChange={handleOnChangeemail}
                            />
                            <br />
                            <MedecinInput
                                type='matricule'
                                title="Matricule"
                                value={matricule}
                                handleOnChange={handleOnChangematricule}
                            />
                            <br />
                            <MedecinInput
                                type='password'
                                title="Password"
                                value={password}
                                handleOnChange={handleOnChangepassword}
                            />
                            <br />
                            <MedecinInput
                                type='specialite'
                                title="Specialite"
                                value={specialites}
                                handleOnChange={handleOnChangespecialites}
                            />
                            <br />
                            <MedecinInput
                                type='phone'
                                title="Phone"
                                value={phone}
                                handleOnChange={handleOnChangephone}
                            />
                            <br />
                           

                            <button type='submit' className='btn btn-success' onClick={FunInscription} value='button'>Creer</button>

                            <label >Vous avez un  compte ? <Link className='btn-primary1' to="/MedecinLogin">Login</Link></label>&nbsp;
                        </div>
                    </form>

            </div>


        </div>
    </>
  )
}

export default MedecinRegister