import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    goalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Goal',
        required: true
    }
});

export default mongoose.model('Task', TaskSchema);