import mongoose from "mongoose";
const GoalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

export default mongoose.model('Goal', GoalSchema);