import ExpertModel from '../models/expertModel.js';

// Get all approved experts
const getAllExperts = async (req, res) => {  
    try {
        const experts = await ExpertModel.find({ approved: true }) 
        res.status(200).json({ message: 'experts fetched successfully', data: experts });
    } catch (error) {
        console.error('Error fetching experts:', error);
        res.status(500).json({ message: 'Failed to fetch experts', error: error.message });
    }
};

const getUnApprovedExperts = async (req, res) => {
    try {
        const experts = await ExpertModel.find({ approved: false })
        res.status(200).json({ message: 'experts fetched successfully', data: experts });
    } catch (error) {
        console.error('Error fetching experts:', error);
        res.status(500).json({ message: 'Failed to fetch experts', error: error.message });
    }
};

// approve an expert - TODO

export {
    getAllExperts,
    getUnApprovedExperts,
};