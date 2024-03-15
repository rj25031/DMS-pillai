import mongoose from "mongoose";

const agencyDataSchema = mongoose.Schema(
    {
        a_reg_certificates : String,
        aadhar : String,
        a_reg_certificates : String,

    },
    {
        collection:'agency_data'
    }
)

export default mongoose.model('agency_data',agencyDataSchema);