import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cpf: { type: String, required: false },
    schedules: [{ type: Schema.Types.ObjectId, ref: "Vaccine" }]
})

export default mongoose.model("User", userSchema)