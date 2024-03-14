import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        f_u_name : {type : String, required : true}, 
        l_u_name : {type : String, required : true}, 
        u_mail : {type : String, required : true}, 
        u_phone : {type : Number, required : true}, 
        u_password : {type : String, required : true}, 
        u_adhar : {type : Number , required : true},
        // u_response : String,
    },
    {
        collection:'user_register_data'
    }
)

export default mongoose.model('user_register_data',userSchema);