import QuestionModel from '../models/questionModel.js';

const getAllQuestions = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        console.log(`Fetching page ${page} with limit ${limit}`);

        const questions = await QuestionModel
            .find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean();

        const total = await QuestionModel.countDocuments();

        console.log(`Found ${questions.length} questions out of ${total} total`);

        res.status(200).json({
            success: true,
            questions,
            hasMore: total > (skip + questions.length),
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            total
        });

    } catch (error) {
        console.error('Error in getAllQuestions:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

const getQuestionsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const questions = await QuestionModel.find({ category }).sort({ createdAt: -1 }); 

        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
   
const getQuestionByCategoryAndId = async (req, res) => {
    try {
        const { category, id } = req.params;
        const question = await QuestionModel.findOne({ _id: id, category });

        if (!question) {
            return res.status(404).json({ message: "Question not found in this category" });
        }
        res.status(200).json(question);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    } 
};

const createQuestion = async (req) => {
    try {
        const { category, question_header, question_body, name_asked_by, email_asked_by } = req.body;

        const question = new QuestionModel({
            category,
            question_header,
            question_body,
            name_asked_by,
            email_asked_by,
            is_anonymous: name_asked_by === "Anonymous"
        });

        const savedQuestion = await question.save();
        return { success: true, savedQuestion };
    } catch (error) {
        return { success: false, error: error };
    }
};

export {
    getAllQuestions,
    getQuestionsByCategory,
    getQuestionByCategoryAndId,
    createQuestion
};