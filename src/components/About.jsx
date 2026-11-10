import React from 'react';
import { Section } from '@astryxdesign/core/Section';
import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';
import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Badge } from '@astryxdesign/core/Badge';
import { VStack } from '@astryxdesign/core/VStack';
import { HStack } from '@astryxdesign/core/HStack';
import { Divider } from '@astryxdesign/core/Divider';
import { profileData } from '../data/profileData';
import { Atom, Brain, Dna, Server, GraduationCap, Briefcase, Award } from 'lucide-react';

const categoryIcons = {
  "Molecular Dynamics & Structural Biology": Atom,
  "AI & Cheminformatics": Brain,
  "Genomics & Bio-Pipelines": Dna,
  "HPC & Scientific Computing": Server
};

export default function About() {
  return (
    <Section id="about" variant="section" padding={6} className="py-16 border-t border-b border-neutral-200 bg-neutral-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <VStack gap={8}>
          
          {/* Section Header */}
          <VStack gap={2}>
            <HStack gap={2} vAlign="center">
              <Badge label="Background & Expertise" variant="neutral" size="sm" />
            </HStack>
            <Heading level={2} weight="bold">
              About Me & Scientific Philosophy
            </Heading>
            <Text color="secondary" size="lg">
              Bridging classical biophysics, atomistic molecular dynamics, and geometric deep learning to revolutionize therapeutics.
            </Text>
          </VStack>

          {/* Research Narrative Card */}
          <Card padding={5} elevation="none" className="border border-neutral-200 bg-white shadow-sm">
            <VStack gap={4}>
              <Heading level={4} weight="semibold">
                🔬 From Microsecond Trajectories to Generative Molecules
              </Heading>
              <div className="text-neutral-700 leading-relaxed space-y-3 text-sm sm:text-base">
                <p>
                  I am a Computational Biologist and Drug Discovery Scientist specializing in <strong>Structure-Based Drug Design (SBDD)</strong>. 
                  My research integrates all-atom <strong>Molecular Dynamics (MD)</strong>, <strong>Free Energy Perturbation (FEP)</strong> alchemical calculations, and state-of-the-art <strong>Geometric Deep Learning / GNNs</strong> to uncover cryptic allosteric pockets and design high-affinity lead candidates.
                </p>
                <p>
                  Currently leading computational lead-optimization pipelines at <strong>Helix BioTherapeutics Labs</strong> in San Francisco, I interface directly with wet-lab crystallographers and medicinal chemists to guide synthetic priorities and validate predictions via in-vitro SPR and enzymatic assays.
                </p>
              </div>
            </VStack>
          </Card>

          {/* Technical Competencies Matrix */}
          <VStack gap={4}>
            <Heading level={3} weight="semibold">
              Technical Competency Matrix
            </Heading>
            <Grid columns={{ minWidth: 240, max: 2 }} gap={4}>
              {profileData.skills.map((skillGroup, idx) => {
                const IconComponent = categoryIcons[skillGroup.category] || Atom;
                return (
                  <Card key={idx} padding={4} elevation="none" className="border border-neutral-200 bg-white hover:border-emerald-300 transition-colors">
                    <VStack gap={3}>
                      <HStack gap={2} vAlign="center">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <Heading level={4} weight="semibold" className="text-sm sm:text-base">
                          {skillGroup.category}
                        </Heading>
                      </HStack>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {skillGroup.items.map((item, itemIdx) => (
                          <Badge
                            key={itemIdx}
                            label={item}
                            variant="neutral"
                            size="sm"
                          />
                        ))}
                      </div>
                    </VStack>
                  </Card>
                );
              })}
            </Grid>
          </VStack>

          <Divider />

          {/* Experience & Education Split */}
          <Grid columns={{ minWidth: 300, max: 2 }} gap={6}>
            
            {/* Experience Column */}
            <VStack gap={4}>
              <HStack gap={2} vAlign="center">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                <Heading level={3} weight="semibold">
                  Recent Experience
                </Heading>
              </HStack>

              <VStack gap={3}>
                {profileData.experience.slice(0, 2).map((exp, idx) => (
                  <Card key={idx} padding={4} elevation="none" className="border border-neutral-200 bg-white">
                    <VStack gap={2}>
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <Heading level={4} weight="semibold">
                            {exp.role}
                          </Heading>
                          <Text color="secondary" size="sm">
                            {exp.company} • {exp.location}
                          </Text>
                        </div>
                        <Badge label={exp.period} variant="neutral" size="sm" />
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                        {exp.description}
                      </p>
                    </VStack>
                  </Card>
                ))}
              </VStack>
            </VStack>

            {/* Education Column */}
            <VStack gap={4}>
              <HStack gap={2} vAlign="center">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <Heading level={3} weight="semibold">
                  Education
                </Heading>
              </HStack>

              <VStack gap={3}>
                {profileData.education.map((edu, idx) => (
                  <Card key={idx} padding={4} elevation="none" className="border border-neutral-200 bg-white">
                    <VStack gap={2}>
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <Heading level={4} weight="semibold">
                            {edu.degree}
                          </Heading>
                          <Text color="secondary" size="sm">
                            {edu.institution}
                          </Text>
                        </div>
                        <Badge label={edu.year} variant="neutral" size="sm" />
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                        {edu.notes}
                      </p>
                    </VStack>
                  </Card>
                ))}
              </VStack>
            </VStack>

          </Grid>

        </VStack>
      </div>
    </Section>
  );
}
