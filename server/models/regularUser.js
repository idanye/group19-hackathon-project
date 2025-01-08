import mongoose from 'mongoose';

const regularUserSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        default: "Anonymous"
    },
    email: { 
        type: String, 
        required: true,
        unique: true
    },
}, { timestamps: true });

const RegularUser = mongoose.model('RegularUser', regularUserSchema);
export default RegularUser;
