import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

const answerSchema = mongoose.Schema({
  text: { 
    type: String, 
    required: true 
  },
  questionId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Question', 
    required: true 
  },

  // fields for the regular user
  name: { 
    type: String,
  },
  email: { 
    type: String,
  },

  // fields for the expert
  expertName: { 
    type: String,
  },
  expertID: { 
    type: String,
  },
//   expertRole: { type: String, required: true },
}, { timestamps: true });

// incrypt the expertID
// answerSchema.pre('save', async function (next) {
//   if (!this.isModified('expertID')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.expertID = await bcrypt.hash(this.expertID, salt);
// });

const Answer =  mongoose.model('Answer', answerSchema);
export default Answer;
