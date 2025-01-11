import QuestionModel from '../models/questionModel.js';
import RegularUserModel from '../models/regularUserModel.js';

// Get all questions
const getAllQuestions = async (req, res) => {  
    try {
        const questions = await QuestionModel.find();  // Fetch all questions from MongoDB
        res.status(200).json({ message: 'Questions fetched successfully', data: questions });
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Failed to fetch questions', error: error.message });
    }
};


// Get all questions from a certain category
const  getQuestionsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const questions = await QuestionModel.find({ category });
        // if (!questions.length) {
        //   return res.status(404).json({ message: "No questions found in this category" });
        // }
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
   

// Get a single questions from a category
const getQuestionByCategoryAndId = async (req, res) => {
    try {
        const { category, id } = req.params;
        const question = await QuestionModel.findOne({ _id: id, category });
        if (!question) {
          return res.status(404).json({ message: "QuestionModel not found in this category" });
        }
        res.status(200).json(question);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    } 
};


// Create a new question
const createQuestion = async (req, res) => { 
    try {
        const { category, question_header, question_body, name_asked_by, email_asked_by } = req.body;
        const question = new QuestionModel({
            category,
            question_header,
            question_body,
            name_asked_by :  name_asked_by, // default: "Anonymous"
            email_asked_by: email_asked_by,
            is_annonymous : name_asked_by == "Anonymous" ? true : false
        });
        const savedQuestion = await question.save();
        // adding the user who asked the question to the regularUser collection
        const existingUser = await RegularUserModel.findOne({ email: email_asked_by });
        // let savedUser = existingUser;
        if (!existingUser) {
            const newUser = new RegularUserModel({
                name: name_asked_by,
                email: email_asked_by
            });
            await newUser.save();
            //savedUser = await newUser.save();
        }
        res.status(201).json({
            message: 'QuestionModel created successfully!',
            question: savedQuestion,
            // user: savedUser
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export {
    getAllQuestions,
    getQuestionsByCategory,
    getQuestionByCategoryAndId,
    createQuestion
};