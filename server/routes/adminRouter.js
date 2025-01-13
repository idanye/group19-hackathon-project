import express from 'express';
import {
    getAllApprovedExperts,
    getAllPendingExperts,
    approveExpert,
    DeclineExpert,
} from '../controllers/adminController.js';


const router = express.Router();

/**
 * Read Only Permission Routes
 */
// GET all approved experts
router.get('/approvedExperts', getAllApprovedExperts);

// GET all unapproved experts
router.get('/pendingExperts', getAllPendingExperts);


/**
 * Read and Write Permission Routes
 */
// POST: Approve an expert
router.post('/approveExpert/:expertID', approveExpert);
// POST: Reject an expert
router.post('/declineExpert/:expertID', DeclineExpert);


export default router;