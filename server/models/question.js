import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    question_header: {
        type: String,
        required: true,
    },
    question_body: {
        type: String,
        required: true,
    },
    name_asked_by: {
        type: String,
        required: true,
        default: "אנונימי",
    },
    email_asked_by: {
        type: String,
        required: true,
    },
    is_anonymous: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

// Create and export the model
const Question = mongoose.model("Question", questionSchema);
export default Question;
