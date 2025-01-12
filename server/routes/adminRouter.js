import express from 'express';
import {
    getAllExperts,
} from '../controllers/adminController.js';


const router = express.Router();

/**
 * Read Only Permission Routes
 */
// GET all experts
router.get('/allExperts', getAllExperts);


/**
 * Read and Write Permission Routes
 */


export default router;