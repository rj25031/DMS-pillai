import userRegModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const { Fname, Lname, Email, Password, Mobile, aadhar_no } = req.fields;

    const userCheck = await userRegModel.findOne(Email ? { u_mail: Email } : { u_phone: Mobile });
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
        u_phone: Mobile,
        u_password: hashedPass,
        u_adhar: aadhar_no,
    });

    return res.status(200).send({
      success: true,
      message: "user uploaded",
    });
  } catch (error) {
    return res.status(500).send({
      success: true,
      message: "failed" + error,
    });
  }
};

export const userLogIn = async (req, res) => {  
  try {
    const { Email, Mobile, Password } = req.fields;
    const user = await userRegModel.findOne(Email?{ u_mail: Email }:{ u_phone : Mobile });

    if (!user) {
      return res.status(404).send({
        success: true,
        message: "user not found",
      });
    }

    const token = await jwt.sign({user}, process.env.secret_key,{expiresIn:'10d'});
     await bcrypt.compare(
      Password,
      user.password,
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(401).send({
            success: false,
            message: "some password hashing error",
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
