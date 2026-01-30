const { GoogleGenerativeAI } = require('@google/generative-ai');
const portfolioConfig = require('../config/portfolio.config');

class GeminiService {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('Gemini API key is required');
    }
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  }

  /**
   * Generic text generation method
   */
  async generateText(prompt) {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error.message);
      throw new Error('Failed to generate content from Gemini API');
    }
  }

  /**
   * Summarize study notes (existing feature)
   */
  async summarizeText(text) {
    const prompt = `You are a helpful study assistant. Summarize the following notes in a clear, concise manner with key points:

${text}

Provide:
1. Main Topic
2. Key Points (bullet points)
3. Quick Summary (2-3 sentences)`;

    return await this.generateText(prompt);
  }

  /**
   * Portfolio Assistant - Answer questions about developer's portfolio
   */
  async answerPortfolioQuestion(userQuestion) {
    const { personal, projects, expertise, experience } = portfolioConfig;

    // Build context string
    const projectsList = projects
      .map(p => `- ${p.name}: ${p.description} (Tech: ${p.technologies.join(', ')})`)
      .join('\n');

    const experienceList = experience
      .map(e => `- ${e.role} at ${e.company} (${e.duration})`)
      .join('\n');

    const systemPrompt = `You are an intelligent AI assistant for ${personal.name}'s portfolio website.

**STRICT RULES:**
1. Answer ONLY questions about this developer's portfolio, projects, skills, experience, and professional background
2. If asked about unrelated topics (weather, news, general knowledge, etc.), respond: "I'm specifically designed to help with questions about ${personal.name}'s portfolio and work. Please ask about projects, skills, or experience."
3. Be professional, concise, and helpful
4. Use information provided below - do not make up details
5. If information is not available, politely say you don't have that specific information

**DEVELOPER INFORMATION:**
Name: ${personal.name}
Title: ${personal.title}
Location: ${personal.location}
Email: ${personal.email}
Bio: ${personal.bio}

**SKILLS:**
${personal.skills.join(', ')}

**PROJECTS:**
${projectsList}

**EXPERIENCE:**
${experienceList}

**EXPERTISE AREAS:**
${expertise.join('\n')}

**USER QUESTION:** ${userQuestion}

Provide a clear, professional response:`;

    return await this.generateText(systemPrompt);
  }
}

module.exports = GeminiService;
