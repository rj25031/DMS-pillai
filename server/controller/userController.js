import userRegModel from "../Model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const { Fname, Lname, Email, Password, Gender } = req.fields;

    const userCheck = await userRegModel.findOne({ u_mail: Email });
    if (userCheck) {
      console.log("user already logged in");
      return res.status(403).send({
        success: false,
        message: "user already logged in",
      });
    }
 
    const hashedPass = await bcrypt.hash(Password, 10);
    
    const userDB = await userRegModel.create({
        f_u_name: Fname,
        l_u_name: Lname,
        u_mail: Email,
        u_password: hashedPass,
        u_gender : Gender,
    });

    return res.status(200).send({
      success: true,
      message: "user uploaded",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "failed" + error,
    });
  }
};

export const userLogIn = async (req, res) => {  
  try {
    const { Email, Password } = req.fields;
    const user = await userRegModel.findOne({ u_mail: Email });

    if (!user) {
      return res.status(404).send({
        success: true,
        message: "user not found",
      });
    }
    const token = await jwt.sign({user}, process.env.secret_key,{expiresIn:'10d'});
     await bcrypt.compare(
      Password,
      user.u_password,
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(401).send({
            success: false,
            message: "password did not match",
          });
        }
        if (result) {
          return res.status(200).send({
            success: true,
            message: "user login successful",
            token,
          });
        } else {
          return res.status(403).send({
            success: false,
            message: "invalid password",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "fail " + error,
    });
  }
};

export const userDetails =async (req,res)=>{
  try {
    const { 
      Address,
      City,
      State,
      Country,
      PhoneNumber,
      EmergencyContact,
      Skills,
      Availability, } = req.fields;

    
    const userDB = await userRegModel.create({
      address : Address,
      city : City,
      state : State,
      country : Country,
      phoneNumber : PhoneNumber,
      emergencyContact : EmergencyContact,
      skills : Skills,
      availability : Availability,
    });

    return res.status(200).send({
      success: true,
      message: "user uploaded",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "failed" + error,
    });
  }
}