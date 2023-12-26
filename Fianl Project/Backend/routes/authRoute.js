const express = require("express")
const {
    registerController, 
    loginController,
    testController } = require("../controller/authController")

const {requireSignIn, isAdmin} = require("../middleware/middleware")

     
// router object

const router = express.Router()

// Register || Method Post
router.post("/register",registerController)

// Login || Method Post
router.post("/login",loginController)

// test
// router.all("/test", requireSignIn, isAdmin,testController)


// protected route
router.get("/auth", requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
})

module.exports = router