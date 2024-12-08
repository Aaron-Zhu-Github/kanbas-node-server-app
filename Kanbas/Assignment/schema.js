import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        title: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        description: String,
        available: Date,
        due: Date,
        until: Date,
        point: Number
    },
    { collection: "assignments" }
);

export default schema;
