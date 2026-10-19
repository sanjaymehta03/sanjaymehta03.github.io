export const blogPosts = [
  {
    id: "post-1",
    slug: "free-energy-perturbation-fep-drug-discovery",
    title: "Free Energy Perturbation (FEP) in Modern Drug Discovery: From Theory to High-Throughput Screening",
    date: "August 14, 2026",
    readTime: "9 min read",
    category: "Computational Chemistry",
    tags: ["FEP", "Molecular Dynamics", "Drug Design", "OpenMM", "Thermodynamics"],
    summary: "How alchemical transformation simulations and Bennett Acceptance Ratio (BAR) calculations predict relative binding free energies (ΔΔG) with chemical accuracy to guide medicinal chemistry synthesis.",
    content: `
### Introduction

In modern lead optimization, synthesizing a single candidate molecule in a wet lab can cost between \$3,000 and \$10,000, often taking weeks of synthetic chemistry effort. **Free Energy Perturbation (FEP)** allows computational chemists to accurately predict the difference in binding affinity between candidate congeners before a single vial is synthesized.

---

### The Thermodynamic Cycle of Binding

Direct computation of absolute binding free energy $\\Delta G_{bind}$ is computationally challenging because it involves simulating the entire association process of a ligand entering a hydrated binding cavity.

Instead, we use a thermodynamic cycle with **alchemical transformations**:

$$\\Delta\\Delta G_{bind} = \\Delta G_{bind}^{L_2} - \\Delta G_{bind}^{L_1} = \\Delta G_{alchemical}^{bound} - \\Delta G_{alchemical}^{unbound}$$

Where:
- $\\Delta G_{alchemical}^{bound}$ is the work done mutating Ligand 1 into Ligand 2 while bound to the solvated protein receptor.
- $\\Delta G_{alchemical}^{unbound}$ is the work done mutating Ligand 1 into Ligand 2 in bulk aqueous solvent.

---

### Alchemical Lambda Scheduling with OpenMM

By parameterizing the Hamiltonian with an alchemical coupling parameter $\\lambda \\in [0, 1]$:

$$H(\\lambda) = (1 - \\lambda) H_{A} + \\lambda H_{B}$$

\`\`\`python
import openmm as mm
from openmm import app, unit
from openmmtools import alchemy

# Setup dual-topology alchemical factory
factory = alchemy.AbsoluteAlchemicalFactory(
    consistent_exceptions=False, 
    softcore_beta=0.5
)
alchemical_region = alchemy.AlchemicalRegion(
    alchemical_atoms=ligand_atoms, 
    annihilate_electrostatics=True
)
alchemical_system = factory.create_alchemical_system(reference_system, alchemical_region)

# Simulate intermediate lambda windows
for lmb in [0.0, 0.1, 0.25, 0.5, 0.75, 0.9, 1.0]:
    print(f"Sampling ensemble at lambda window = {lmb}")
\`\`\`

---

### Key Practical Insights

1. **Soft-Core Potentials**: Standard Lennard-Jones 12-6 potentials suffer from the "end-point catastrophe" as atoms vanish. Soft-core potentials ensure smooth energetic transitions.
2. **Water Equilibration**: Buried water molecules that displace upon ligand substitution are the #1 source of FEP error. Always verify hydration state stability with grand canonical Monte Carlo (GCMC) or long equilibrium runs.
    `
  },
  {
    id: "post-2",
    slug: "accelerating-molecular-dynamics-gpu-openmm",
    title: "Accelerating Molecular Dynamics Simulations on Modern GPUs: OpenMM & CUDA Optimization",
    date: "June 28, 2026",
    readTime: "7 min read",
    category: "Molecular Modeling",
    tags: ["OpenMM", "CUDA", "GROMACS", "GPU Computing", "Biophysics"],
    summary: "Benchmarks, tips, and architectural trade-offs when scaling multi-microsecond all-atom protein-ligand MD simulations on consumer vs datacenter GPUs.",
    content: `
### Why Nanoseconds-Per-Day (ns/day) Matters

Molecular processes—such as conformational state transitions, loop closures, and drug unbinding kinetics—typically unfold over hundreds of nanoseconds to tens of microseconds. A simulation pipeline generating only 15 ns/day will take over two months to observe a single binding event.

---

### Performance Profiling: 80,000 Atom Solvated Kinase System

| GPU Architecture | Precision | Integrator Step | Throughput (ns/day) |
| :--- | :--- | :--- | :--- |
| **NVIDIA RTX 4090** | Mixed (FP32/FP64) | 4.0 fs (HMR) | **485 ns/day** |
| **NVIDIA H100 SXM** | Mixed (FP32/FP64) | 4.0 fs (HMR) | **640 ns/day** |
| **NVIDIA A100 PCIe** | Mixed (FP32/FP64) | 4.0 fs (HMR) | **390 ns/day** |

---

### High-Impact Optimization Tactics

1. **Hydrogen Mass Repartitioning (HMR)**: By shifting mass from heavy parent atoms to bonded hydrogens, highest-frequency covalent bond vibrations slow down, allowing stable integration time steps of **4.0 fs** instead of 2.0 fs—a 2x performance multiplication for zero computational cost.

\`\`\`python
# Applying HMR in OpenMM
from openmm import app, unit

prmtop = app.AmberPrmtopFile('solvated_complex.prmtop')
system = prmtop.createSystem(
    nonbondedMethod=app.PME,
    nonbondedCutoff=1.0 * unit.nanometers,
    constraints=app.HBonds,
    hydrogenMass=3.0 * unit.amu # Enables 4fs timestep!
)
integrator = mm.LangevinMiddleIntegrator(300*unit.kelvin, 1.0/unit.picosecond, 0.004*unit.picoseconds)
\`\`\`

2. **Mixed Precision Mode**: Keep particle coordinates and forces in FP32 while accumulating virial and total energy in FP64 to preserve exact numerical conservation without double-precision penalty.
    `
  },
  {
    id: "post-3",
    slug: "diffusion-models-structure-based-drug-design",
    title: "Generative AI in Drug Discovery: SE(3)-Equivariant Diffusion Beyond Rigid Docking",
    date: "April 19, 2026",
    readTime: "11 min read",
    category: "AI in Biotech",
    tags: ["Diffusion Models", "Equivariance", "RDKit", "TorchDrug", "AlphaFold"],
    summary: "Exploring how SE(3)-equivariant graph neural networks model translational, rotational, and torsional degrees of freedom for generative molecule design directly inside protein pockets.",
    content: `
### The Flaw of Traditional Grid-Based Docking

Conventional docking tools like AutoDock Vina or Glide discretize protein receptors into static potential grids. While fast, this treats the target protein as a rigid brick, ignoring induced-fit adaptations and active-site restructuring that occur in nature.

---

### Formulating Docking as Reverse Diffusion

Equivariant diffusion models treat ligand pose prediction as reverse denoising on the manifold of rotations $SO(3)$, translations $\\mathbb{R}^3$, and internal dihedral torsion angles $(S^1)^m$:

$$\\mathcal{M} = \\mathbb{R}^3 \\times SO(3) \\times \\mathbb{T}^m$$

1. **Equivariance Property**:
$$f(g \\cdot X) = g \\cdot f(X) \\quad \\forall g \\in SE(3)$$

If the coordinate system of the target protein rotates or shifts in space, the predicted ligand pose rotates and shifts identically.

---

### Integrating with RDKit and TorchDrug

\`\`\`python
import torch
from rdkit import Chem
from rdkit.Chem import AllChem

# Convert SMILES to 3D conformation graph
mol = Chem.MolFromSmiles('CC1=C(C(=O)NC2=CC=CC=C2)N=C(C)S1')
mol = Chem.AddHs(mol)
AllChem.EmbedMolecule(mol, randomSeed=42)

# Graph representation with atomic coordinates and bond torsion masks
# Ready for SE(3)-Equivariant Message Passing layers
\`\`\`

---

### Conclusion

Structure-conditioned generative diffusion represents the future of rational therapeutics: designing drug-like chemical matter tailored atom-by-atom to the unique electrostatic and hydrophobic landscape of disease targets.
    `
  }
];
