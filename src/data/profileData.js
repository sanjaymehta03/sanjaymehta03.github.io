export const profileData = {
  name: "Sanjay Mehta",
  title: "Computational Biologist & AI Drug Discovery Scientist",
  badge: "Open for Biotech & Drug Discovery Collaborations",
  bio: "Researcher bridging Biotechnology, Molecular Dynamics (MD) simulations, and Deep Learning for Structure-Based Drug Design. Focused on target identification, protein-ligand binding kinetics, allosteric regulation, and generative chemistry for therapeutics.",
  location: "San Francisco, CA / Remote",
  email: "sanjay.mehta@example.com",
  github: "https://github.com/sanjaymehta03",
  scholar: "https://scholar.google.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  resumeUrl: "#resume-modal",
  
  stats: [
    { label: "Citations", value: "420+" },
    { label: "Research Papers", value: "7 Published" },
    { label: "Compounds Screened", value: "2.5M+" },
    { label: "Simulated Trajectories", value: "60+ µs" }
  ],

  skills: [
    { 
      category: "Molecular Dynamics & Structural Biology", 
      items: ["GROMACS", "OpenMM", "PyMOL", "AMBER / CHARMM", "AutoDock Vina", "Markov State Models (MSMs)"] 
    },
    { 
      category: "AI & Cheminformatics", 
      items: ["RDKit", "TorchDrug", "DiffDock", "Graph Neural Networks (GNNs)", "AlphaFold / ESMFold", "Binding Affinity (DTA)"] 
    },
    { 
      category: "Genomics & Bio-Pipelines", 
      items: ["Biopython", "CRISPR Off-Target Modeling", "RNA-Seq Analysis", "MMseqs2 / BLAST", "Nextflow / Snakemake"] 
    },
    { 
      category: "HPC & Scientific Computing", 
      items: ["Python", "PyTorch", "C++ / CUDA", "Docker", "SLURM HPC", "Git & CI/CD"] 
    }
  ],

  experience: [
    {
      role: "Senior Computational Drug Discovery Researcher",
      company: "Helix BioTherapeutics Labs",
      period: "2024 - Present",
      location: "San Francisco, CA",
      description: "Leading structure-based drug design (SBDD) and AI-driven lead optimization for novel oncology kinase targets. Integrating GPU molecular dynamics simulations with generative chemistry pipelines.",
      achievements: [
        "Identified two nanomolar lead candidates confirmed by in vitro binding assays.",
        "Scaled free energy perturbation (FEP) workflow across 100+ GPU nodes, reducing computation time by 60%.",
        "Authored 2 peer-reviewed publications on cryptic allosteric pocket discovery."
      ]
    },
    {
      role: "Molecular Dynamics & Cheminformatics Fellow",
      company: "BioTech Innovations Group",
      period: "2022 - 2024",
      location: "Boston, MA",
      description: "Architected high-throughput virtual screening (HTVS) platforms evaluating 2.5M+ compounds against viral proteases and membrane receptors using OpenMM and GNN scoring.",
      achievements: [
        "Discovered novel non-covalent inhibitors validated by biophysical SPR assays.",
        "Engineered automated Markov State Model trajectory clustering tool adopted lab-wide."
      ]
    },
    {
      role: "Graduate Research Fellow in Biotechnology & Biophysics",
      company: "Center for Molecular Biophysics & Structural Biology",
      period: "2019 - 2022",
      location: "Cambridge, MA",
      description: "Conducted doctoral research on conformational flexibility in drug-resistant bacterial enzymes and protein-ligand unbinding kinetics using enhanced sampling simulations.",
      achievements: [
        "Dissertation on allosteric communication pathways in antibiotic-resistant targets.",
        "Co-investigator on NIH-funded structural biology research initiative."
      ]
    }
  ],

  education: [
    {
      degree: "Ph.D. in Computational Biology & Biophysics",
      institution: "Massachusetts Institute of Technology (MIT)",
      year: "2019 - 2022",
      notes: "Dissertation: Enhanced Sampling Molecular Dynamics for Drug Resistance & Allosteric Pocket Discovery"
    },
    {
      degree: "B.Tech in Biotechnology",
      institution: "Indian Institute of Technology (IIT) / Stanford University",
      year: "2015 - 2019",
      notes: "First Class Honors with Distinction in Bioinformatics & Molecular Genetics"
    }
  ]
};
