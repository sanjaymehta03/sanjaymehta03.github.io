export const profileData = {
  name: "Sanjay Mehta",
  title: "AI Research Scientist & Systems Architect",
  badge: "Open for Collaborations & Consulting",
  bio: "Passionate researcher and software engineer specializing in Large Language Model Alignment, Efficient Neural Architectures, and High-Performance Distributed Systems. Dedicated to building open-source tools and publishing peer-reviewed research.",
  location: "San Francisco, CA / Remote",
  email: "sanjay.mehta@example.com",
  github: "https://github.com/sanjaymehta03",
  scholar: "https://scholar.google.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  resumeUrl: "#resume-modal",
  
  stats: [
    { label: "Citations", value: "450+" },
    { label: "Research Papers", value: "8 Published" },
    { label: "Open Source Stars", value: "3.2k+" },
    { label: "Years Experience", value: "6+ Years" }
  ],

  skills: [
    { category: "Artificial Intelligence", items: ["PyTorch", "Transformers", "vLLM", "RLHF / DPO", "CUDA", "LangChain"] },
    { category: "Systems & Cloud", items: ["Python", "Rust", "C++", "Docker", "Kubernetes", "Ray"] },
    { category: "Web & Front-end", items: ["React", "TypeScript", "Vite", "Node.js", "GraphQL", "Tailwind/Vanilla CSS"] },
    { category: "Tools & Methodologies", items: ["Git", "LaTeX", "Weights & Biases", "Linux", "CI/CD", "Distributed Training"] }
  ],

  experience: [
    {
      role: "Senior AI Research Scientist",
      company: "Apex AI Research Labs",
      period: "2024 - Present",
      location: "San Francisco, CA",
      description: "Leading research on efficient inference acceleration for 70B+ parameter LLMs. Optimizing KV-cache memory footprints and sub-quadratic attention kernels.",
      achievements: [
        "Reduced inference latency by 42% on H100 clusters.",
        "Published 2 top-tier papers at NeurIPS & ICML.",
        "Mentored 4 PhD research interns."
      ]
    },
    {
      role: "Machine Learning Systems Engineer",
      company: "ScaleTech Solutions",
      period: "2022 - 2024",
      location: "Boston, MA",
      description: "Designed and deployed real-time recommendation engines processing over 10M requests daily using Rust and PyTorch C++ API.",
      achievements: [
        "Architected distributed pipeline reducing p99 latency from 180ms to 24ms.",
        "Awarded Engineering Innovation Award 2023."
      ]
    },
    {
      role: "Graduate Research Assistant",
      company: "MIT Computer Science & AI Lab (CSAIL)",
      period: "2019 - 2022",
      location: "Cambridge, MA",
      description: "Conducted doctoral research on neural network quantization, sparse matrix computations, and bio-inspired computing algorithms.",
      achievements: [
        "Authored doctoral dissertation on sub-linear memory Transformer architectures.",
        "Co-investigator on NSF research grant."
      ]
    }
  ],

  education: [
    {
      degree: "Ph.D. in Computer Science & Artificial Intelligence",
      institution: "Massachusetts Institute of Technology (MIT)",
      year: "2019 - 2022",
      notes: "Dissertation: Efficient Sub-quadratic Transformer Attention Mechanisms"
    },
    {
      degree: "B.S. in Computer Science & Mathematics",
      institution: "Stanford University",
      year: "2015 - 2019",
      notes: "First Class Honors, GPA 3.96 / 4.00"
    }
  ]
};
