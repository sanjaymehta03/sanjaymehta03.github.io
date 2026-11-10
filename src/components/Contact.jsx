import React, { useState } from 'react';
import { Section } from '@astryxdesign/core/Section';
import { Heading } from '@astryxdesign/core/Heading';
import { Card } from '@astryxdesign/core/Card';
import { Grid } from '@astryxdesign/core/Grid';
import { Badge } from '@astryxdesign/core/Badge';
import { Button } from '@astryxdesign/core/Button';
import { TextInput } from '@astryxdesign/core/TextInput';
import { TextArea } from '@astryxdesign/core/TextArea';
import { Banner } from '@astryxdesign/core/Banner';
import { VStack } from '@astryxdesign/core/VStack';
import { HStack } from '@astryxdesign/core/HStack';
import { profileData } from '../data/profileData';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission and open mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
      const mailtoBody = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
      window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 600);
  };

  return (
    <Section id="contact" variant="section" padding={6} className="py-16 border-t border-[var(--app-border)] bg-[var(--app-surface-subtle)]/60 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <VStack gap={8}>
          
          {/* Section Header */}
          <VStack gap={2}>
            <HStack gap={2} vAlign="center">
              <Badge label="Get in Touch" variant="neutral" size="sm" />
            </HStack>
            <Heading level={2} weight="bold">
              Let's Collaborate on Next-Gen Therapeutics
            </Heading>
            <p className="text-base sm:text-lg text-[var(--app-text-muted)]">
              Have a computational biology question, FEP pipeline inquiry, or seeking research collaboration? Reach out below.
            </p>
          </VStack>

          {/* Form and Info Layout */}
          <Grid columns={{ minWidth: 300, max: 2 }} gap={6}>
            
            {/* Contact Details Card */}
            <VStack gap={4}>
              <Card padding={5} elevation="none" className="border border-[var(--app-border)] bg-[var(--app-card-bg)] shadow-sm">
                <VStack gap={4}>
                  <Heading level={4} weight="semibold">
                    Direct Contact & Availability
                  </Heading>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--app-text-subtle)] font-medium">Email Address</div>
                        <a href={`mailto:${profileData.email}`} className="text-sm font-semibold text-[var(--app-text)] hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                          {profileData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--app-text-subtle)] font-medium">Location</div>
                        <div className="text-sm font-semibold text-[var(--app-text)]">
                          {profileData.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[var(--app-text-subtle)] font-medium">Response Time</div>
                        <div className="text-sm font-semibold text-[var(--app-text)]">
                          Within 24–48 hours
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[var(--app-border)]">
                    <div className="text-xs font-semibold text-[var(--app-text)] mb-2 uppercase tracking-wider">
                      Collaboration Interests
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["Allosteric Modulation", "Kinase FEP Automation", "GNN Binding Kinetics", "Wet-lab Validation"].map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-md border border-[var(--app-border)] bg-[var(--app-tag-bg)] text-[var(--app-tag-text)] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </VStack>
              </Card>
            </VStack>

            {/* Interactive Contact Form */}
            <Card padding={5} elevation="none" className="border border-[var(--app-border)] bg-[var(--app-card-bg)] shadow-sm">
              <form onSubmit={handleSubmit}>
                <VStack gap={4}>
                  <Heading level={4} weight="semibold">
                    Send a Direct Message
                  </Heading>

                  {submitted && (
                    <Banner
                      status="success"
                      title="Message prepared!"
                      description="Your email client will open with the pre-filled inquiry."
                      isDismissable
                      onDismiss={() => setSubmitted(false)}
                    />
                  )}

                  <TextInput
                    label="Your Full Name"
                    placeholder="e.g. Dr. Jane Doe"
                    value={formData.name}
                    onChange={(val) => setFormData(prev => ({ ...prev, name: val }))}
                    isRequired
                    width="100%"
                  />

                  <TextInput
                    label="Your Email"
                    type="email"
                    placeholder="e.g. jane.doe@biotech.com"
                    value={formData.email}
                    onChange={(val) => setFormData(prev => ({ ...prev, email: val }))}
                    isRequired
                    width="100%"
                  />

                  <TextInput
                    label="Subject / Topic"
                    placeholder="e.g. Potential Collaboration on Kinase FEP"
                    value={formData.subject}
                    onChange={(val) => setFormData(prev => ({ ...prev, subject: val }))}
                    width="100%"
                  />

                  <TextArea
                    label="Message / Inquiry"
                    placeholder="Describe your research project, question, or proposal..."
                    value={formData.message}
                    onChange={(val) => setFormData(prev => ({ ...prev, message: val }))}
                    isRequired
                    rows={4}
                    width="100%"
                  />

                  <Button
                    label={isSubmitting ? "Sending..." : "Send Message"}
                    variant="primary"
                    size="md"
                    type="submit"
                    isLoading={isSubmitting}
                    width="100%"
                  />
                </VStack>
              </form>
            </Card>

          </Grid>

        </VStack>
      </div>
    </Section>
  );
}
