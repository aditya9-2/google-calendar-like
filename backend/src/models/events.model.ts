import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['exercise', 'eating', 'work', 'relax', 'family', 'social'],
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    color: {
        type: String
    },
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }
});

export default mongoose.model('Event', EventSchema);