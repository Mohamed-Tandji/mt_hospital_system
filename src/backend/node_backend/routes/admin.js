// Externals imports
const express = require("express");

//Internals imports
const {register,
      login,
      getAllAdmins,
      getAdmin,
      updateAdmin,deleteAdmin }=require("../controllers/admins");

const router= express.Router();


router.route('')
.get(getAllAdmins)
.get(getAdmin)


router.route('/register')
.post(register);

router.route('/login')
.get(login);


router.route('/:id')
.put(updateAdmin)
.delete(deleteAdmin);





module.exports = router;