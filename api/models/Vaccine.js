const mongoose = require("mongoose")

const {Schema} = mongoose

const vaccineSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    qty:{
        type: Number,
        required: true
    },
    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required:true
    }
}, {timestamps: true});

const Vaccine = mongoose.model("Vaccine", vaccineSchema)

module.exports = {
    Vaccine, vaccineSchema
}
