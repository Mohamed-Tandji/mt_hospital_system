import { BrowserRouter, Routes, Route } from "react-router-dom"


import NotFound from "./pages/notFound";
import Acceuil from "./pages/Acceuil";
import Telemedecine from "./pages/Telemedecine";

import AdminAccount from "./pages/AdminAccount";
import AdminLogin from "./pages/AdminLogin"; 
import AdminHome from "./pages/AdminHome";
import AdminPatient from "./pages/AdminPatient";
import AdminRegister from "./pages/AdminRegister";
import AdminsPatients from "./pages/AdminPatients";

import MedecinAccount from "./pages/MedecinAccount";
import MedecinLogin from "./pages/MedecinLogin"; 
import MedecinHome from "./pages/MedecinHome";
import MedecinPatient from "./pages/MedecinPatient";
import MedecinRegister from "./pages/MedecinRegister";
import MedecinPatients from "./pages/MedecinPatients";
import AddPatient from "./pages/AddPatient";
import MedecinAddPatientDoc from "./pages/MedecinAddPatientDoc";
import MedecinUpdatePatientDoc from "./pages/MedecinUpdatePatientDoc";

import PatientAccount from "./pages/PatientAccount";
import PatientLogin from "./pages/PatientLogin"; 
import PatientHome from "./pages/PatientHome";
import PatientDoc from "./pages/PatientDoc";
import PatientRegister from "./pages/PatientRegister";








function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound/>} />
          <Route path='/telemedecine' element={<Telemedecine />} />
          <Route path='/' element={<Acceuil />} />

          <Route path='/AdminsPatients' element={< AdminsPatients/>} />
          <Route path='/AdminRegister' element={<AdminRegister />} />
          <Route path='/AdminPatient' element={< AdminPatient/>} />
          <Route path='/AdminHome' element={<AdminHome />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/AdminAccount' element={<AdminAccount />} />

          <Route path='/MedecinAccount' element={<MedecinAccount />} />
          <Route path='/MedecinLogin' element={<MedecinLogin />} />
          <Route path='/MedecinHome' element={<MedecinHome />} />
          <Route path='/MedecinPatient' element={<MedecinPatient />} />
          <Route path='/MedecinRegister' element={<MedecinRegister/>} />
          <Route path='/MedecinPatients' element={<MedecinPatients />} /> 
          <Route path='/AddPatient' element={<AddPatient />} />  
          <Route path='/MedecinAddPatientDoc' element={<MedecinAddPatientDoc />} />   
          <Route path='/MedecinUpdatePatientDoc' element={<MedecinUpdatePatientDoc />} />   

 
  
          
          <Route path='/PatientAccount' element={<PatientAccount />} />
          <Route path='/PatientLogin' element={<PatientLogin />} />
          <Route path='/PatientHome' element={<PatientHome />} />
          <Route path='/PatientDoc' element={<PatientDoc />} />
          <Route path='/PatientRegister' element={<PatientRegister/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
