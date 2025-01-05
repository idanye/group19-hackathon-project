import express from 'express';
import validateExpert from '../middlewares/expertValidation.js';

import {
    addAnswer, 
    getAnswers
} from '../controllers/answersController.js';

const router = express.Router();

// POST an answer to a specific question
router.post('/:questionId', validateExpert, addAnswer);

// GET all answers for a specific question
router.get('/:questionId', getAnswers);

export default router;