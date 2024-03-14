import mongoose from "mongoose";

const agencySchema = mongoose.Schema(
    {
        a_name : {type : String, required : true}, 
        a_mail : {type : String, required : true}, 
        a_phone : Number,
        password : {type : String, required : true}, 
        a_type : {type : String , required : true}
    },
    {
        collection:'agency_register_data'
    }
)

export default mongoose.model('agency_register_data',agencySchema);