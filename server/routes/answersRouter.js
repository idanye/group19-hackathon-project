import express from 'express';
import validateExpert from '../middlewares/expertValidation.js';
import validateRegularUser from '../middlewares/regularUserValidation.js';

import {
    addAnswerExpert,
    addAnswerRegularUser, 
    getAnswers
} from '../controllers/answersController.js';

const router = express.Router();

// POST an answer to a specific question from an expert
router.post('/exprt/:questionId', validateExpert, addAnswerExpert);

// Post an answer to a specific question from a regular user
router.post('/regularUser/:questionId', validateRegularUser, addAnswerRegularUser);

// GET all answers for a specific question
router.get('/:questionId', getAnswers);

export default router;