import React from 'react'
import propTypes from 'prop-types'


const MedecinInput = ({type,value,handleOnChange }) => {

  const generatePlaceHolder =()=>{
    if(type==='firstName')  return  'Entrez votre firstName svp';
    if(type==='lastName')  return  'Entrez votre lastName svp';
    if(type==='adresse')  return  'Entrez votre adresse svp';
    if(type==='password')  return  'Entrez votre mot de passe svp';
    if(type==='email')  return  'Entrez votre courriel svp';
    if(type==='specialite')  return  'Entrez votre specialite svp';
    if(type==='matricule')  return  'Entrez votre matricule svp';
    if(type==='phone')  return  'Entrez votre phone svp';
     
    
    return '';

  }
  const showAlert=()=>{
    if(type==='email'&& !value.includes('@')){
        return <div className='input-error'>Veuillez entrez une adresse courriel valide  </div>

    }
    if(type=== 'lastName' && value.length < 2){
        return <div className='input-error'>Votre lastName utilisateur doit contenir minimum 3 caracteres </div>

    }
    if(type=== 'firstName' && value.length < 2){
        return <div className='input-error'>Votre firstName  doit contenir minimum 3 caracteres </div>

    }
    
    if(type=== 'matricule' && value.length !== 11){
        return <div className='input-error'>Votre matricule doit contenir  11 caracteres </div>

    }
    if(type=== 'specialite' && value.length < 5){
      return <div className='input-error'>Votre specialite doit contenir  10 caracteres </div>

    }
    if(type=== 'phone' && value.length < 5){
      return <div className='input-error'>Votre phone doit contenir  10 caracteres </div>

    }
    if(type=== 'password' && value.length < 8){
        return <div className='input-error'>Votre mot de passe doit contenir minimum 8 caracteres </div>

    }
    return ;
  }


  

  return (
    <>

     <input
     className='input-form'
      type={type} 
      placeholder={generatePlaceHolder()}
      value={value}
      onChange={handleOnChange}
      required
      />
      {showAlert()}

    </>
  )
}
MedecinInput.propTypes={
  type: propTypes.string,
}
MedecinInput.defaultProps={
  type:'Text'
  
}
export default MedecinInput