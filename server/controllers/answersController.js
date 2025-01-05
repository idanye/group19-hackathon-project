import Answer from "../models/answer.js";

/**
 * Add an answer to a specific question
 * This route is restricted to verified experts only
 */
const addAnswer = async (req, res) => {
  try {
    const { text } = req.body;
    const { questionId } = req.params;

    // Extract expert details from the middleware
    const { expertName, expertID /* , expertRole*/ } = req.expert;

    // Create a new answer object
    const answer = new Answer({
      text,
      questionId, // Link the answer to the question ID
      expertName,
      expertID,
      //expertRole,
    });

    const savedAnswer = await answer.save();
    res.status(201).json(savedAnswer); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

/**
 * Get all answers for a specific question
 * Returns answers sorted by creation date (newest first)
 */
const getAnswers = async (req, res) => {
  try {
    const { questionId } = req.params;
    const answers = await Answer.find({ questionId: questionId }).sort({ createdAt: -1 });

    // Check if no answers were found
    if (!answers.length) {
      return res.status(404).json({ message: 'No answers found for this question' });
    }

    res.status(200).json(answers); // Send the answers as a response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle server errors
  }
};

export {
  addAnswer,
  getAnswers,
};