import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
    {
        a_name : {type : String, required : true}, 
        a_mail : {type : String, required : true}, 
        a_phone : String,
        password : {type : String, required : true}, 
        a_type : {type : Boolean , required : true}
    },
    {
        collection:'admin_login_data'
    }
)

export default mongoose.model('admin_login_data',adminSchema);