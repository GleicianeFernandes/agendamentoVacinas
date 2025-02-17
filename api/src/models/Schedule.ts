import mongoose, { Schema } from "mongoose";

const scheduleSchema = new Schema({
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
    vaccine: [{ type: Schema.Types.ObjectId, ref: "Vaccine" }],
    day: { type: String, required: true },
})

export default mongoose.model("ScheduleSchema", scheduleSchema)