import mongoose, { Schema } from "mongoose";

const hospitalSchema = new Schema({
    hospitalName:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    openingHours:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    }
})

export default mongoose.model("Hospital", hospitalSchema)