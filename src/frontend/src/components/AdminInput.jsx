import React from 'react'
import propTypes from 'prop-types'


const AdminInput = ({type,value,handleOnChange }) => {

  const generatePlaceHolder =()=>{
    if(type==='firstName')  return  'Entrez votre firstName svp';
    if(type==='lastName')  return  'Entrez votre lastName svp';
    if(type==='adresse')  return  'Entrez votre adresse svp';
    if(type==='password')  return  'Entrez votre mot de passe svp';
    if(type==='email')  return  'Entrez votre courriel svp';
    if(type==='matricule')  return  'Entrez votre matricule svp';
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
    if(type=== 'adresse' && value.length < 15){
        return <div className='input-error'>Votre adresse doit contenir minimum 3 caracteres </div>

    }
    if(type=== 'matricule' && value.length !== 10){
        return <div className='input-error'>Votre matricule doit contenir  10 caracteres </div>

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
AdminInput.propTypes={
  type: propTypes.string,
}
AdminInput.defaultProps={
  type:'Text'

}

export default AdminInput