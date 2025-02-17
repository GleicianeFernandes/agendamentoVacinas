import mongoose, { Schema } from "mongoose";

const vaccineSchema = new Schema({
    vaccineName: { type: String, required: true },
    qtd:{type: Number, required: true},
    hospital: [{ type: Schema.Types.ObjectId, ref: "Vaccine" }]
    /*vaccineName: { type: String, required: true },
    hospitalName: { type: String, required: true },
    address: { type: String, required: true },
    day: { type: String, required: true },
    hour: { type: String, required: true },*/
})

export default mongoose.model("Vaccine", vaccineSchema)