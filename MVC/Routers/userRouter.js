const userController=require('../Controllers/UserController')


const express=require('express');
const auth=require('../Utili/auth');
const router =express.Router();

router.post('/',userController.addNewUser) ;
router.get('/',auth.verifyToken,userController.getUsers) ;
router.post('/login',userController.logIn)

module.exports=router;
