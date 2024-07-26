//Externals imports
const mongoose=require("mongoose");


const AdminSchema=new mongoose.Schema({

    matricule:{
        type:String,
        required:[true,"Veuillez entrer un matricule svp!!!"]
    },
    firstname:{
        type:String,
        required:[true,"Veuillez entrer un nom svp!!!"]
    },
    lastname:{
        type:String,
        required:[true,"Veuillez entrer un nom de famille svp!!!"]
    },
    password:{
        type:String,
        required:[true,"Veuillez entrer un mot de passe svp!!!"]
        
    },
    adresse:{
        email:{
            type:String,
            required: [true,"Veuillez entrer un email svp!!!"]
        },
        phone:{
            type:String,
            required:[true,"Veuillez entrer un numéro de téléphone svp!!!"]
        },
        ApptNum:{
            type:Number
        },
        street:{
            type:String
        },
        city:{
            type:String
        },
        state:{
            type:String
        },
        zipCode:{
            type:String
        }

    },
    isAdmin:{
        type:Boolean,
        default:true
    }
     

});



module.exports=mongoose.model('Hospital_Admin',AdminSchema);