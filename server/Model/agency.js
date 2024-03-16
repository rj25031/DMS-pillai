import mongoose from "mongoose";

const agencySchema = mongoose.Schema(
    {
        a_name : String,  
        a_mail : String,  
        password : String,  
        agencyName:String,
        agencyType:String,
        address:String,
        city:String,
        state:String,
        country:String,
        phoneNumber:String,
        website:String,
        equipment:String,
        equipmentQuantity:String,
        vehicles:String,
        vehicleQuantity:String,
        menPower:String,
        menPowerQuantity:String,
    },
    {
        collection:'agency_register_data'
    }
)

export default mongoose.model('agency_register_data',agencySchema);