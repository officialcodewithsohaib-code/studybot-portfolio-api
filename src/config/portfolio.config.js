/**
 * Portfolio Configuration
 * Update this file to modify portfolio data without touching code
 */

const portfolioConfig = {
  personal: {
    name: "Your Full Name",
    title: "Full-Stack Developer",
    location: "Karachi, Pakistan",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    bio: "Passionate full-stack developer specializing in modern web technologies with 3+ years of experience building scalable applications.",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "TailwindCSS",
      "TypeScript",
      "RESTful APIs",
      "Git & GitHub"
    ]
  },

  projects: [
    {
      id: 1,
      name: "Chemical Business Website",
      description: "Full-stack e-commerce platform for chemical products with inventory management and payment integration",
      technologies: ["Next.js", "React", "TailwindCSS", "Supabase", "Stripe"],
      features: [
        "Product catalog with search and filters",
        "Secure payment processing",
        "Admin dashboard for inventory",
        "Responsive design"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project"
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "Personal portfolio with AI-powered chatbot assistant",
      technologies: ["Next.js", "Node.js", "Express", "Gemini AI", "TailwindCSS"],
      features: [
        "Interactive AI assistant",
        "Project showcase",
        "Contact form with email integration",
        "Dark mode support"
      ],
      liveUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio"
    }
    // Add more projects here
  ],

  experience: [
    {
      role: "Full-Stack Developer",
      company: "Freelance",
      duration: "2022 - Present",
      description: "Building custom web applications for clients worldwide"
    }
    // Add more experience
  ],

  expertise: [
    "Full-stack web development with modern JavaScript frameworks",
    "API integration and development (REST, GraphQL)",
    "Database design and optimization (PostgreSQL, MongoDB, Supabase)",
    "Cloud deployment and DevOps (Vercel, AWS, Docker)",
    "Payment gateway integration (Stripe, Paddle)",
    "Email service integration (Resend API)",
    "Responsive UI/UX with TailwindCSS"
  ],

  services: [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies"
    },
    {
      title: "API Development",
      description: "RESTful API design and integration services"
    },
    {
      title: "Database Design",
      description: "Scalable database architecture and optimization"
    }
  ]
};

module.exports = portfolioConfig;
