import ExpertModel from '../models/expertModel.js';

// Get all experts
const getAllExperts = async (req, res) => {  
    try {
        const experts = await ExpertModel.find();  
        res.status(200).json({ message: 'experts fetched successfully', data: experts });
    } catch (error) {
        console.error('Error fetching experts:', error);
        res.status(500).json({ message: 'Failed to fetch experts', error: error.message });
    }
};

export {
    getAllExperts,
};