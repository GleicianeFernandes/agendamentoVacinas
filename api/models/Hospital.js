const mongoose = require("mongoose")

const {Schema} = mongoose

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
    },
}, {timestamps: true});

const Hospital = mongoose.model("Hospital", hospitalSchema)

module.exports = {
    Hospital, hospitalSchema
}
