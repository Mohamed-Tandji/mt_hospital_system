import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../controllers/medecins';
import { useState } from 'react';
import { useNavigate ,Link} from "react-router-dom"
import MedecinInput from '../components/MedecinInput';

const MedecinLogin = () => {

    const navigate = useNavigate();

    const [matricule, setmatricule] = useState('');
    const [password, setpassword] = useState('');
  
  
    const handleOnsubmit = (e) => {
  
      e.preventDefault(); // non-refresh la page
  
    }
  
    const handleOnChangematricule = (e) => {
  
      setmatricule(e.target.value);
    }
  
    const handleOnChangepassword = (e) => {
  
      setpassword(e.target.value);
    }
    const FunConnexion = async () => {
      const response = await login(matricule, password);
      if (response) {
        navigate("/MedecinHome")
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
                        

                        <button type='submit' className='btn btn-success' onClick={FunConnexion} value='button'>Connexion</button>

                        <label >Vous n'avez pas de compte ? <Link className='btn-primary1' to="/PatientRegister">Sign Up</Link></label>&nbsp;
                    </div>
                </form>

        </div>


    </div>
</>
  )
}

export default MedecinLogin