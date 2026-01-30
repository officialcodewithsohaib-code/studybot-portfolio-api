const GeminiService = require('../services/geminiService');

const geminiService = new GeminiService(process.env.GEMINI_API_KEY);

// Summarize endpoint controller
const summarizeNotes = async (req, res) => {
  try {
    const { text } = req.body;

    // Validation
    if (!text || text.trim().length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Text is required for summarization'
      });
    }

    if (text.length > 5000) {
      return res.status(400).json({
        status: 'error',
        message: 'Text is too long. Maximum 5000 characters allowed.'
      });
    }

    // Call Gemini service
    const summary = await geminiService.summarizeText(text);

    // Success response
    res.status(200).json({
      status: 'success',
      data: {
        original_length: text.length,
        summary: summary,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Summary Controller Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to summarize text',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
};

module.exports = {
  summarizeNotes
};
