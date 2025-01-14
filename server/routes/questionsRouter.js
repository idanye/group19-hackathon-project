import express from 'express';
import {
    getAllQuestions,
    getQuestionsByCategory,
    getQuestionByCategoryAndId,
    createQuestion,
} from '../controllers/questionsController.js';
import { sendEmailConfirmation } from '../services/emailService.js';
import { requireAuth } from "../middlewares/requireAuth.js";

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
router.use(requireAuth)
// POST a new question
router.post('/addQuestion', async (req, res) => {
    await createQuestion(req, res); // create question in DB

    const { email_asked_by } = req.body; //send email to the user who asked the question

    if (email_asked_by) {
      sendEmailConfirmation(email_asked_by);
    } else {
      console.log("No email found");
    }
  });
  

export default router;