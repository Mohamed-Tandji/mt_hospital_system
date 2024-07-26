// Externals imports
const express = require('express');
const mongoose=require("mongoose");
const dotenv = require("dotenv");


// Appel des routes
const routesAdmins= require("./routes/admin");
const routesMedeciins= require("./routes/medecin");
const routesInfirmiers= require("./routes/infirmier");
const routesPatients= require("./routes/patient");
const routesDocMedicals= require("./routes/docMedical");
const routesLits= require("./routes/lit");
const routesRdvs= require("./routes/rdv");

dotenv.config({ path: './config/config.env'});


// creation variables
const app = express();
const PORT=process.env.PORT ;
app.use(express.json());

const connectDb= async () => {
try{
    const con= await mongoose.connect(process.env.MONGODB_ATLAS_URL);
    console.log(`Connection reussie a la base:${con.connection.host}`);
   

}catch(error) {

    console.log(`MongoDB connexion error :${error}`);
       
}
}
connectDb();








app.use('/admin', routesAdmins)
app.use('/medecin', routesMedeciins)
app.use('/infirmier', routesInfirmiers)
app.use('/patient', routesPatients)
app.use('/docMedical', routesDocMedicals)
app.use('/lit', routesLits)
app.use('/rdv', routesRdvs)





app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT} `);
})

