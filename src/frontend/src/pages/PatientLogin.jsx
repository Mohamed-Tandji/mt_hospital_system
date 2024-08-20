import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../controllers/patients';
import { useState } from 'react';
import { useNavigate ,Link} from "react-router-dom"
import PatientInput from '../components/PatientInput';

const PatientLogin = () => {
    const navigate = useNavigate();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
  
  
    const handleOnsubmit = (e) => {
  
      e.preventDefault(); // non-refresh la page
  
    }
  
    const handleOnChangeemail = (e) => {
  
      setemail(e.target.value);
    }
  
    const handleOnChangepassword = (e) => {
  
      setpassword(e.target.value);
    }
    const FunConnexion = async () => {
      const response = await login(email, password);
      if (response) {
        navigate("/PatientHome")
      } else {
        alert("Quelque chose ne fonctinne pas");
      }
  
  
    }
  return (
    <>
    <div className='body2'>
        <div className="container">
        <form class="container-text" onSubmit={handleOnsubmit}>
                    <div style={{fontWeight:"bold", fontSize:"50px"}}><h1 >Connecter Vous</h1></div><br />
                    <div className='shadow-sm p-4 rounded-3 bg-light'>

                        
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
                        

                        <button type='submit' className='btn btn-success' onClick={FunConnexion} value='button'>Connexion</button>

                        <label >Vous n'avez pas de compte ? <Link className='btn-primary1' to="/PatientRegister">Sign Up</Link></label>&nbsp;
                    </div>
                </form>

        </div>


    </div>
</>
  )
}

export default PatientLogin