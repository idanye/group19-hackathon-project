import Expert from '../models/expert.js';

// Middleware to validate if the expert exists in the database
const validateExpert = async (req, res, next) => {
  const { expertID } = req.body;

  try {
    const expert = await Expert.findOne({ expertID });
    if (!expert) {
      return res.status(403).json({ message: 'You are not authorized to answer questions' });
    }
    // Attach the expert details to the request object for further use
    req.expert = expert;
    next();
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default validateExpert;