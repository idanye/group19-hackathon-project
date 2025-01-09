import express from 'express';
import {
    getAllQuestions,
    getQuestionsByCategory,
    getQuestionByCategoryAndId,
    createQuestion,
} from '../controllers/questionsController.js';

const router = express.Router();

/**
 * Read Only Permission Routes
 */
// GET all questions
router.get('/', getAllQuestions);

// GET all questions from a certain category
router.get('/getCategoryQuestions/:category',  getQuestionsByCategory);

// GET a single questions from a category
router.get('/getCategoryQuestions/:category/:id', getQuestionByCategoryAndId)

/**
 * Read and Write Permission Routes
 */
// POST a new question
router.post('/addQuestion', createQuestion)

export default router;