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

// Get all unapproved experts
const getUnApprovedExperts = async (req, res) => {
    try {
        const experts = await ExpertModel.find({ approved: false })
        res.status(200).json({ message: 'experts fetched successfully', data: experts });
    } catch (error) {
        console.error('Error fetching experts:', error);
        res.status(500).json({ message: 'Failed to fetch experts', error: error.message });
    }
};

// Post: Approve an expert
const approveExpert = async (req, res) => {
    try {
        const { expertID } = req.params;
        const expert = await ExpertModel.findOne({ expertID: expertID });
        if (!expert) {
            return res.status(404).json({ message: 'Expert not found' });
        }
        expert.approved = true;
        await expert.save();
        res.status(200).json({ message: 'Expert approved successfully', data: expert });
    } catch (error) {
        console.error('Error approving expert:', error);
        res.status(500).json({ message: 'Failed to approve expert', error: error.message });
    }
};


export {
    getAllExperts,
    getUnApprovedExperts,
    approveExpert,
};