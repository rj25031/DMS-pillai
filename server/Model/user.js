import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    f_u_name: String ,
    l_u_name: String ,
    u_mail: String, 
    u_password: String ,
    u_gender: String ,
    address: String,
    city: String,
    state: String,
    country: String,
    phoneNumber: String,
    emergencyContact: String,
    skills: String,
    availability: String,
  },
  {
    collection: "user_register_data",
  }
);

export default mongoose.model("user_register_data", userSchema);
