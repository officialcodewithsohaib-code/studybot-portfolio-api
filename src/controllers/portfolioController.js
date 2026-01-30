const GeminiService = require('../services/geminiService');
const { successResponse, errorResponse } = require('../utils/responseFormatter');

const geminiService = new GeminiService(process.env.GEMINI_API_KEY);

/**
 * Handle portfolio chatbot questions
 * POST /api/portfolio/chat
 */
const chatWithPortfolio = async (req, res) => {
  try {
    const { question } = req.body;

    // Validation
    if (!question || question.trim().length === 0) {
      return errorResponse(res, 'Question is required', 400);
    }

    if (question.length > 500) {
      return errorResponse(res, 'Question is too long. Maximum 500 characters allowed.', 400);
    }

    // Get AI response
    const answer = await geminiService.answerPortfolioQuestion(question);

    // Success response
    return successResponse(res, {
      question: question.trim(),
      answer: answer,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Portfolio Chat Error:', error);
    return errorResponse(res, 'Failed to process your question. Please try again.', 500);
  }
};

module.exports = {
  chatWithPortfolio
};
