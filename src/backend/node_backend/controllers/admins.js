// Externals imports
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");


// Internals imports
const Admin= require ("../models/Admins");




// Register a admin
exports.register = async (req, res) => {
    try {

        const {password}=req.body;
         
        // Generate salt for admin password
        const salt= await bcrypt.genSalt(parseInt(process.env.PASSWORD_SALT));
        req.body.password=await bcrypt.hash(password,salt);

        const response=await Admin.create(req.body);
        // Return response of registration
        res.send({'success':true,'msg': 'Successfuly create'});
        
    } catch (error) {
        res.send({'success':false,'msg':error});
    }
};


// Login a Admin 
exports.login = async (req, res) => {
    try {

        const { matricule,password }= req.body;

        if (matricule===undefined||password===undefined){
            return res.send({'success':false,'msg':'invalid informations'})
        }

        const filter = {'matricule':matricule}
        const admin  = await Admin.findOne(filter);

        if(admin === null){
            return res.send({'success':false,'msg':'Invalid information'})
           };
           const isMatch = await bcrypt.compare(password, admin.password)
           if(!isMatch){
              return  res.send({'success':false,'msg':'Invalid informations'})
           }
        
           const token = jwt.sign({ 'id': admin.id }, process.env.JWT_SECRET_KEY);
           res.send({'success':true,'token':token});
        
    } catch (error) {
        res.send({'success':false,'msg':error});
    }
};



// Get all Admins
exports.getAllAdmins = async (req, res) => {
    try {

        res.send({'success':true,'msg':'Successfully getAllAdmins'});
        
    } catch (error) {
        res.send({'success':false,'msg':error});
    }
};


// Get a Admins
exports.getAdmin = async (req, res) => {
    try {

        res.send({'success':true,'msg':'Successfully getAdmin'});
        
    } catch (error) {
        res.send({'success':false,'msg':error});
    }
};


// Update a Admin
exports.updateAdmin = async (req, res) => {
    try {

        res.send({'success':true,'msg':'Successfully Update Admin'});
        
    } catch (error) {
        res.send({'success':false,'msg':error});
    }
};


// Delete a Admin
exports.deleteAdmin = async (req, res) => {
    try {

        res.send({'success':true,'msg':'Successfully Delete Admin'});
        
    } catch (error) {
        res.send({'success':false,'msg':error});
    }
};
