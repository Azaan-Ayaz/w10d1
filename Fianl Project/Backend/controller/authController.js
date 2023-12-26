const userModel = require("../models/model");
const { hashPassword, comparePassword } = require("../Helper/authHelper");
const JWT = require("jsonwebtoken")


const registerController = async (req, res) => {
  try {
    const { name, email, phone, password, address } = req.body;

    // Validation
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone Number is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }

    // Check User
    const existingUser = await userModel.findOne({ email });

    // Existing User
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Registered. Please login",
      });
    }

    // Register User
    const hashedPassword = await hashPassword(password);

    // save
    const user = await new userModel({name, email, phone, password:hashedPassword, address}).save()
    // const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "3d",
    // });
    // const token = JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn: "3d"})
    res.status(200).send({
        success: true,
        message: "User Register Successfully",
        user
        // token
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};


// Method Login

const loginController =async(req,res)=>{
try {
    const { email , password} = req.body
    // console.log("xyz");
    if(!email || !password){
        res.status(404).send({
            success: false,
            message: "Invalid email or password"
        })
    }

    // Check User
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).send({
            success: false,
            message: "email is not registed"
        })
    }
    // const user = new userModel();
    const match = await comparePassword(password,user.password)
    if(!match){
        return res.status(200).send({
            success: false,
            message: "Invalid Password"
        })
    }
    // token
    // const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:"3d"})
    res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address
        },
        // token
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        message: "error in Login",
        error
    })
}
}

// test for Middleware



module.exports = { registerController, loginController };


