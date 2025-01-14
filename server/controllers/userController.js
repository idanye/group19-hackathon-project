import RegularUser from '../models/regularUserModel.js'
import Expert from '../models/expertModel.js'
import jwt from 'jsonwebtoken'
import { sendExpertSignUpNotification } from '../services/emailService.js'

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

// login user
export const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        // validation
        if (!email || !password) {
            throw Error('All fields must be filled')
        }

        const user = await Promise.any([
            RegularUser.login(email, password), // Try logging in as a RegularUser
            Expert.login(email, password),     // Try logging in as an Expert
        ]);

        // create a token for the successfully logged-in user
        const token = createToken(user._id);

        res.status(200).json({ email, token })
    } catch (error) {
        if (error instanceof AggregateError) {
            res.status(400).json({error: 'Invalid email or password'})
        }
        else {
            // Handle unexpected errors
            res.status(500).json({ error: error.message});
        }
    }
}

// signup regular user
export const signupUser = async (req, res) => {
    const {name, email, password} = req.body

    try {
        const regularUser = await RegularUser.signup(name, email, password)

        // create token
        const token = createToken(regularUser._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// signup expert
export const signupExpert = async (req, res) => {
    const {expertName, expertID, email, password, expertField} = req.body

    try {
        const expert = await Expert.signup(expertName, expertID, email, password, expertField)

        // create token
        const token = createToken(expert._id)

        // send a notification to the admin to approve or decline the expert
        sendExpertSignUpNotification();

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export default {
    loginUser,
    signupUser,
    signupExpert
}