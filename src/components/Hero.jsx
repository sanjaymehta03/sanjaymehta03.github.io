import React from 'react';
import { Section } from '@astryxdesign/core/Section';
import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';
import { Button } from '@astryxdesign/core/Button';
import { Badge } from '@astryxdesign/core/Badge';
import { Card } from '@astryxdesign/core/Card';
import { VStack } from '@astryxdesign/core/VStack';
import { HStack } from '@astryxdesign/core/HStack';
import { Grid } from '@astryxdesign/core/Grid';
import { profileData } from '../data/profileData';
import { GithubIcon, LinkedinIcon, ScholarIcon, TwitterIcon } from './Icons';
import { MapPin, Mail, FileText, Sparkles, ArrowRight, Activity, Cpu } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <Section id="hero" variant="transparent" padding={0} className="relative pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <VStack gap={6} hAlign="center" className="text-center">
          
          {/* Status Badge */}
          <HStack gap={2} vAlign="center" hAlign="center" wrap="wrap">
            <Badge
              label="🧬 Biotech & Drug Discovery"
              variant="success"
              size="md"
            />
            <Badge
              label="Open for Collaborations"
              variant="neutral"
              size="md"
            />
          </HStack>

          {/* Headline and Title */}
          <VStack gap={3} hAlign="center" className="max-w-3xl">
            <Heading level={1} type="display-1" weight="bold" justify="center">
              {profileData.name}
            </Heading>
            <Heading level={3} color="secondary" weight="medium" justify="center">
              {profileData.title}
            </Heading>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto mt-2">
              {profileData.bio}
            </p>
          </VStack>

          {/* Location & Metadata Pill */}
          <HStack gap={4} vAlign="center" hAlign="center" wrap="wrap" className="text-sm text-neutral-500 dark:text-neutral-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              {profileData.location}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              {profileData.email}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Helix BioTherapeutics & MIT
            </span>
          </HStack>

          {/* Action CTAs */}
          <HStack gap={3} vAlign="center" hAlign="center" wrap="wrap" className="pt-2">
            <Button
              label="Explore Research & Projects"
              variant="primary"
              size="lg"
              href="#projects"
            />
            <Button
              label="Get In Touch"
              variant="secondary"
              size="lg"
              href="#contact"
            />
            <Button
              label="View Full CV / Resume"
              variant="ghost"
              size="lg"
              onClick={onOpenResume}
            />
          </HStack>

          {/* Social Profiles Row */}
          <HStack gap={2} vAlign="center" hAlign="center" wrap="wrap" className="pt-1">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={profileData.scholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium transition-all shadow-sm"
            >
              <ScholarIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Google Scholar
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium transition-all shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-700 dark:text-blue-400" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-rose-500 dark:text-rose-400" />
              Email Direct
            </a>
          </HStack>

          {/* Key Metrics Grid */}
          <div className="w-full pt-8">
            <Grid columns={{ minWidth: 200, max: 4 }} gap={3}>
              {profileData.stats.map((stat, i) => (
                <Card
                  key={i}
                  padding={3}
                  elevation="none"
                  className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors shadow-sm"
                >
                  <VStack gap={1} hAlign="center">
                    <span className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-mono">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </VStack>
                </Card>
              ))}
            </Grid>
          </div>

        </VStack>
      </div>
    </Section>
  );
}
