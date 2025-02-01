import express from 'express';
import {
    getAllQuestions,
    getQuestionByCategoryAndId,
    createQuestion 
} from '../controllers/questionsController.js';
import { 
    sendEmailConfirmation, 
    sendNewQuestionNotification
} from '../services/emailService.js';
import requireAuth from "../middlewares/requireAuth.js";
import ExpertModel from '../models/expertModel.js';

const router = express.Router();

// Public routes
router.get('/', getAllQuestions);
router.get('/getCategoryQuestions/:category/:id', getQuestionByCategoryAndId);

// Protected routes
router.use(requireAuth);

router.post('/addQuestion', async (req, res) => {
    try {
        const result = await createQuestion(req, res);

        if (!result.success) {
            return res.status(500).json({ message: result.error.message }); 
        }

        const { email_asked_by } = req.body;

        if (email_asked_by) {
            await sendEmailConfirmation(email_asked_by);
        }

        const expertsInThisCategory = await ExpertModel.find({
            expertField: req.body.category
        });
        
        const notificationPromises = expertsInThisCategory.map(expert => 
            sendNewQuestionNotification(
                expert.email,
                req.body.question_header,
                `http://localhost:3000/${req.body.category}/${result.savedQuestion._id}`
            )
        );

        await Promise.all(notificationPromises);

        res.status(201).json({
            success: true,
            message: 'Question created and notifications sent successfully!',
            question: result.savedQuestion
        });

    } catch (error) {
        console.error('Error in addQuestion:', error);
        res.status(500).json({
            success: false,
            message: 'Error processing question submission',
            error: error.message
        });
    }
});

export default router;