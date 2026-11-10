import React, { useState } from 'react';
import { Section } from '@astryxdesign/core/Section';
import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';
import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Badge } from '@astryxdesign/core/Badge';
import { Button } from '@astryxdesign/core/Button';
import { VStack } from '@astryxdesign/core/VStack';
import { HStack } from '@astryxdesign/core/HStack';
import { projectsData } from '../data/projectsData';
import { GithubIcon } from './Icons';
import { Star, GitFork, ExternalLink, Code2, Sparkles, FolderGit2 } from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Molecular Dynamics', 'Deep Learning', 'Genomics'];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Molecular Dynamics') {
      return project.tags.some(t => t.includes('MD') || t.includes('OpenMM') || t.includes('FEP') || t.includes('Dynamics'));
    }
    if (selectedFilter === 'Deep Learning') {
      return project.tags.some(t => t.includes('PyTorch') || t.includes('Diffusion') || t.includes('GNN'));
    }
    if (selectedFilter === 'Genomics') {
      return project.tags.some(t => t.includes('CRISPR') || t.includes('Genomics') || t.includes('Bioinformatics'));
    }
    return true;
  });

  return (
    <Section id="projects" variant="transparent" padding={6} className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <VStack gap={6}>
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <VStack gap={2}>
              <HStack gap={2} vAlign="center">
                <Badge label="Open Source & Research Software" variant="neutral" size="sm" />
              </HStack>
              <Heading level={2} weight="bold">
                Featured Projects & Software
              </Heading>
              <Text color="secondary" size="lg">
                Production-grade algorithms, computational pipelines, and deep learning architectures for therapeutic discovery.
              </Text>
            </VStack>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                      : 'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <Grid columns={{ minWidth: 320, max: 2 }} gap={4} className="pt-2">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                padding={5}
                elevation="none"
                className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <VStack gap={4}>
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2">
                    <HStack gap={2} vAlign="center">
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400">
                        <FolderGit2 className="w-5 h-5" />
                      </div>
                      <div>
                        <Heading level={4} weight="semibold">
                          {project.title}
                        </Heading>
                        {project.featured && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 px-1.5 py-0.5 rounded">
                            Featured
                          </span>
                        )}
                      </div>
                    </HStack>

                    {/* Stars Pill */}
                    {project.stars && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-mono font-medium">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        {project.stars}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed min-h-[50px]">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        label={tag}
                        variant="neutral"
                        size="sm"
                      />
                    ))}
                  </div>

                </VStack>

                {/* Card Footer Actions */}
                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    Source Code
                  </a>

                  <Button
                    label="View Details"
                    variant="ghost"
                    size="sm"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
              </Card>
            ))}
          </Grid>

        </VStack>
      </div>
    </Section>
  );
}
