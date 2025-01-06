import mongoose from 'mongoose';

const expertSchema = mongoose.Schema({
  expertName: { 
    type: String, 
    required: true 
},
  expertID: { 
    type: String, 
    required: true, 
    unique: true 
  },
//   expertRole: { type: String, required: true },
}, { timestamps: true });

const Expert = mongoose.model('Expert', expertSchema);
export default Expert;