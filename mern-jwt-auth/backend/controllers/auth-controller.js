const User = require("../models/user-model");
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    // console.log("Body received:", req.body);

    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create user (password will be hashed automatically)
    const userCreated = await User.create({
      username,
      email,
      password
    });



    
    // Send only username, email, hashed password
    res.status(201).json({


      token : await userCreated.generateToken(),
      userId : userCreated._id.toString()

    });

  } catch (error) {
  
    // res.status(500).json({ msg: "Server error", error: error.message });
    next(error)
  }
};

// user login



const login = async (req, res ) => {
  try {
    // console.log("login validation completed");
   const {email, password} = req.body;

   const userExist = await   User.findOne({email}); 
   console.log(userExist)

   if(!userExist){
   return res.status(400).json({message : "invalid credentials"})
   }

  //  const user = await  bcrypt.compare(password , userExist.password);
  const user = await userExist.comparePassword(password);

   if(user){
    res.status(201).json({
      msg:"login successfull", 
      username: userExist.username,
      email: userExist.email,
      password: userExist.password,
      token : await userExist.generateToken(),
      userId : userExist._id.toString()
    })
   }else{
    res.status(401).json({message : "invalid email or password"})
   }

  } catch (error) {
    next(error)
  }
};


// to send user data - user logic

const user  = async (req , res)=>{
  try {
  
    const userData = req.user;
    console.log("user data",userData);

    return res.status(200).json({msg : "user data sent successfully", userData})

  } catch (error) {
    console.log("error from the user route",error)
  }
}


module.exports = { register , login  , user};
