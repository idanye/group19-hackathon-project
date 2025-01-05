
import Question from '../models/question.js';

// Get all questions
const getAllQuestions = async (req, res) => {  
    try {
        const questions = await Question.find();  // Fetch all questions from MongoDB
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
        const questions = await Question.find({ category });
        if (!questions.length) {
          return res.status(404).json({ message: "No questions found in this category" });
        }
        res.status(200).json(questions);
    } catch (error) 
    {
        res.status(500).json({ message: error.message });
    }
};
   

// Get a single questions from a category
const getQuestionByCategoryAndId = async (req, res) => {
    try {
        const { category, id } = req.params;
        const question = await Question.findOne({ _id: id, category });
        if (!question) {
          return res.status(404).json({ message: "Question not found in this category" });
        }
        res.status(200).json(question);
    }
    catch (error) 
    {
        res.status(500).json({ message: error.message });
    } 
};


// Create a new question
const createQuestion = async (req, res) => { 
    try {
        const { category, question_header, question_body, name_asked_by, email_asked_by } = req.body;
        const question = new Question({
            category,
            question_header,
            question_body,
            name_asked_by :  name_asked_by, // default: "אנונימי"
            email_asked_by: email_asked_by,
            is_annonymous : name_asked_by == "אנונימי" ? true : false
        });
        const savedQuestion = await question.save();
        res.status(201).json(savedQuestion);
    } catch (error)
    {
        res.status(500).json({ message: error.message });
    }
};


export {
    getAllQuestions,
    getQuestionsByCategory,
    getQuestionByCategoryAndId,
    createQuestion
};
