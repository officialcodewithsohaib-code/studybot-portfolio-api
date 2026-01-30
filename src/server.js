require('dotenv').config();
const express = require('express');
const cors = require('cors');
const summaryRoutes = require('./routes/summaryRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', summaryRoutes);      // Study notes summarization
app.use('/api', portfolioRoutes);    // Portfolio chatbot

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'StudyMate AI Server is running!',
    timestamp: new Date().toISOString(),
    endpoints: {
      summarize: '/api/summarize',
      portfolioChat: '/api/portfolio/chat'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// To this:
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}