import agencyRegModel from "../models/agency.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const agencyRegister = async (req, res) => {
  try {
    const { name, Email, Password, Mobile, type } = req.fields;

    const  agencyCheck = await agencyRegModel.findOne(Email ? { a_mail: Email } : { a_phone: Mobile });
    if ( agencyCheck) {
      console.log("agency already logged in");
      return res.status(403).send({
        success: false,
        message: "user already logged in",
      });
    }
 
    const hashedPass = await bcrypt.hash(Password, 10);
    
    const agencyDB = await agencyRegModel.create({
        a_name: name,
        a_mail: Email,
        a_phone: Mobile,
        a_password: hashedPass,
        a_type: type,
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

export const agencyLogIn = async (req, res) => {  
  try {
    const { Email, Mobile, Password } = req.fields;
    const user = await agencyRegModel.findOne(Email?{ a_mail: Email }:{ a_phone : Mobile });

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
