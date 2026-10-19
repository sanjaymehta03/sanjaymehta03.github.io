export const papersData = [
  {
    id: "paper-1",
    title: "SubQuadratic-Attn: Linear Memory Scalability for Multi-Modal LLMs",
    authors: "Sanjay Mehta, Elena Rostova, David K. Vance",
    venue: "NeurIPS 2025 (Oral Presentation)",
    year: 2025,
    category: "AI & Neural Networks",
    pdfUrl: "#",
    doi: "10.48550/arXiv.2501.99999",
    codeUrl: "https://github.com/sanjaymehta03",
    abstract: "Standard Transformer architectures suffer from quadratic time and memory complexity with respect to context sequence length. We introduce SubQuadratic-Attn, a novel kernel factorization technique that reduces attention memory footprint by 78% without loss in perplexity or downstream task accuracy.",
    bibtex: `@inproceedings{mehta2025subquadratic,
  title={SubQuadratic-Attn: Linear Memory Scalability for Multi-Modal LLMs},
  author={Mehta, Sanjay and Rostova, Elena and Vance, David K.},
  booktitle={Advances in Neural Information Processing Systems (NeurIPS)},
  year={2025}
}`
  },
  {
    id: "paper-2",
    title: "Quantized Speculative Decoding for Edge AI Inference",
    authors: "Sanjay Mehta, Marcus Thorne",
    venue: "ICML 2024",
    year: 2024,
    category: "AI Systems",
    pdfUrl: "#",
    doi: "10.48550/arXiv.2405.12345",
    codeUrl: "https://github.com/sanjaymehta03",
    abstract: "Deploying large language models on edge devices remains challenging due to constrained memory bandwidth. This paper proposes 3-bit quantized speculative decoding, enabling 3.4x token generation speedup on consumer mobile SoCs.",
    bibtex: `@inproceedings{mehta2024quantized,
  title={Quantized Speculative Decoding for Edge AI Inference},
  author={Mehta, Sanjay and Thorne, Marcus},
  booktitle={International Conference on Machine Learning (ICML)},
  year={2024}
}`
  },
  {
    id: "paper-3",
    title: "Fault-Tolerant Distributed Gradient Aggregation at Scale",
    authors: "Sophia Lin, Sanjay Mehta, Hiroshi Tanaka",
    venue: "IEEE Transactions on Parallel & Distributed Systems",
    year: 2023,
    category: "Distributed Systems",
    pdfUrl: "#",
    doi: "10.1109/TPDS.2023.3289001",
    codeUrl: "https://github.com/sanjaymehta03",
    abstract: "Node dropouts during distributed deep learning training jobs cause expensive checkpoints and restarts. We present a Byzantine resilient gradient consensus protocol that maintains training throughput even when up to 15% of worker nodes fail unpredictably.",
    bibtex: `@article{lin2023fault,
  title={Fault-Tolerant Distributed Gradient Aggregation at Scale},
  author={Lin, Sophia and Mehta, Sanjay and Tanaka, Hiroshi},
  journal={IEEE Transactions on Parallel and Distributed Systems},
  volume={34},
  number={8},
  pages={2200--2214},
  year={2023}
}`
  },
  {
    id: "paper-4",
    title: "Direct Preference Optimization in Low-Resource Domains",
    authors: "Sanjay Mehta, Clara Oswald",
    venue: "ACL 2023 (Short Paper)",
    year: 2023,
    category: "NLP & Alignment",
    pdfUrl: "#",
    doi: "10.18653/v1/2023.acl-short.88",
    codeUrl: "https://github.com/sanjaymehta03",
    abstract: "Direct Preference Optimization (DPO) has emerged as a stable alternative to PPO for LLM alignment. We investigate DPO's performance boundaries under extreme data scarcity and introduce synthetic pairwise preference scaling to compensate.",
    bibtex: `@inproceedings{mehta2023direct,
  title={Direct Preference Optimization in Low-Resource Domains},
  author={Mehta, Sanjay and Clara Oswald},
  booktitle={Association for Computational Linguistics (ACL)},
  year={2023}
}`
  }
];
