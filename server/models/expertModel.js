import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import validator from "validator"

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
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
//   expertRole: { type: String, required: true },
}, { timestamps: true });

// static signup method
expertSchema.statics.signup = async function (expertName, expertID, email, password) {
  // validation
  if (!email || !password || !expertName || !expertID) {
    throw Error('All fields must be filled')
  }

  if (!validator.isEmail(email)){
    throw Error('Email is not valid')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough')
  }

  if (!validator.isNumeric(expertID)) {
    throw Error('ID needs to have only numbers')
  }

  // Locating expert by expertID
  const exists = await this.findOne({ expertID })

  if (exists) {
    throw Error ('ID already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const expertUser = await this.create({expertName, expertID, email, password: hash})

  return expertUser
}

// static login method
expertSchema.statics.login = async function (email, password) {

    // Locating expert by expertID
    const expert = await this.findOne({email})

    if (!expert) {
      throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, expert.password)

    if (!match) {
      throw Error("Incorrect password")
    }

    return expert
}


const Expert = mongoose.model('Expert', expertSchema);
export default Expert;