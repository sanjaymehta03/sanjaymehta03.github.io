export const blogPosts = [
  {
    id: "post-1",
    slug: "understanding-flash-attention-3",
    title: "Deep Dive into FlashAttention-3: FP8 Tensor Core Acceleration",
    date: "July 18, 2025",
    readTime: "8 min read",
    category: "AI Engineering",
    tags: ["CUDA", "PyTorch", "FlashAttention", "LLMs"],
    summary: "An intuitive explanation of how FlashAttention-3 leverages asynchronous data movement, warp-group GEMMs, and FP8 precision to shatter previous FLOPS ceilings on modern GPUs.",
    content: `
### Introduction

Large Language Model inference and training speed is primarily limited by memory bandwidth rather than computation speed. **FlashAttention** revolutionized transformer efficiency by keeping intermediate attention matrices inside fast GPU SRAM instead of writing them back to high-latency HBM (High Bandwidth Memory).

With the arrival of FlashAttention-3, the algorithm takes another giant leap forward by harnessing NVIDIA Hopper architectures and FP8 Tensor Cores.

---

### The Fundamental Bottleneck: HBM vs SRAM

In traditional self-attention computation:

$$S = Q K^T$$
$$P = \\text{softmax}(S)$$
$$O = P V$$

Writing $S$ and $P$ back to HBM requires $O(N^2)$ memory reads and writes. FlashAttention uses **tiling** to break $Q, K, V$ into blocks, maintaining running statistics (max and sum of exponentials) for online softmax.

---

### What Makes FlashAttention-3 Special?

1. **Asynchronous Warp Specialization**: Separates memory loading warps from computation warps so Tensor Cores never sit idle.
2. **Ping-Pong Softmax Scaling**: Overlaps tile exponentiation with the next matrix multiplication.
3. **Native FP8 Tensor Core Support**: Leverages 8-bit floating point precision with dynamic scaling factors for 2x theoretical throughput boost.

\`\`\`python
# Example pseudo-code for FlashAttention tiling concept
import torch

def FlashAttention_Forward(Q, K, V, block_size=64):
    N, d = Q.shape
    O = torch.zeros_like(Q)
    l = torch.zeros(N, 1) # running sum
    m = torch.full((N, 1), fill_value=-float('inf')) # running max
    
    # Process blocks in SRAM
    for j in range(0, N, block_size):
        K_j = K[j:j+block_size]
        V_j = V[j:j+block_size]
        # Perform block computation without allocating N x N matrix
    return O
\`\`\`

---

### Key Takeaways for ML Engineers

- If you are training models with context lengths > 8k tokens, FlashAttention-3 provides up to **1.8x to 2.4x speedup** compared to FlashAttention-2.
- FP8 requires careful scaling factor tuning to avoid underflow in lower layers.
    `
  },
  {
    id: "post-2",
    slug: "building-zero-cost-research-portfolio",
    title: "How to Build & Host a Developer & Research Portfolio for $0",
    date: "June 02, 2025",
    readTime: "6 min read",
    category: "Web & DevOps",
    tags: ["GitHub Pages", "Vite", "React", "DevOps"],
    summary: "Step-by-step architectural breakdown of hosting high-speed static web applications, research papers, and blog engines using GitHub Pages and free CI/CD pipelines.",
    content: `
### Why Pay for Portfolio Hosting?

Many engineers and academic researchers spend $10-$20/month on cloud hosting, VPS, or static hosting providers when high-performance, global CDN hosting is available **100% free forever**.

---

### The Tech Stack Blueprint

1. **Vite + React**: Lightning fast bundling, zero runtime overhead for static sites.
2. **GitHub Pages**: Free unlimited static site hosting backed by Fastly CDN.
3. **GitHub Actions**: Automated CI/CD build matrix running on every \`git push\`.

---

### Setting Up GitHub Actions (.github/workflows/deploy.yml)

\`\`\`yaml
name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          
      - name: Install & Build
        run: |
          npm ci
          npm run build
          
      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
\`\`\`

---

### Conclusion

With this simple workflow, updating your publication list or publishing a new blog post is as easy as editing a single JSON/Markdown file and pushing to GitHub!
    `
  },
  {
    id: "post-3",
    slug: "rust-for-cuda-developers",
    title: "Rust for CUDA Developers: Safe GPU Systems Programming",
    date: "April 14, 2025",
    readTime: "10 min read",
    category: "Systems",
    tags: ["Rust", "CUDA", "GPU", "Systems"],
    summary: "Exploring Rust bindings for CUDA (cust, cudarc) to eliminate memory safety bugs in high-throughput GPU inference engines.",
    content: `
### The Dilemma of C++ CUDA Codebases

C++ CUDA codebases power almost all modern deep learning frameworks. However, raw pointer manipulation, host-device memory synchronization, and stream safety often result in hard-to-debug segfaults and race conditions.

---

### Enter Rust & cudarc

By wrapping CUDA Driver & Runtime APIs in Rust's ownership and lifetime system, we get compile-time guarantees for GPU memory management:

\`\`\`rust
use cudarc::driver::*;

fn main() -> Result<(), DriverError> {
    let dev = CudaDevice::new(0)?;
    
    // Allocate device memory safely tied to Rust lifetimes
    let a_dev = dev.htod_copy(vec![1.0f32; 1024])?;
    let b_dev = dev.htod_copy(vec![2.0f32; 1024])?;
    let mut c_dev = dev.alloc_zeros::<f32>(1024)?;

    println!("Allocated 1024 elements safely on GPU 0");
    Ok(())
}
\`\`\`

---

### Memory Safety Guarantees

- **No Use-After-Free**: Dropping host or device buffers automatically manages streams and allocations.
- **Data Race Protection**: Rust's \`Send\` and \`Sync\` traits prevent invalid cross-thread CUDA stream operations.
    `
  }
];
