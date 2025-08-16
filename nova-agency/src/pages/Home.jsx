import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Hero from "../components/Hero";
import LogosMarquee from "../components/LogosMarquee";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";


export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <Box>
      <Hero />
      
      <LogosMarquee />

      <Section>
        <Heading size="lg">What we do</Heading>
        <Text mt={3} opacity={0.8}>
          Strategy, design, and engineering across the stack. We turn 0→1 ideas into shipped products.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={8}>
          {[
            { title: "Web Development", body: "React apps, design systems, performant frontends." },
            { title: "AI/ML Projects", body: "RAG, MLOps, forecasting, applied NLP & CV." },
            { title: "Product & Design", body: "UX research, brand, motion, prototypes." },
          ].map((cap) => (
            <Box key={cap.title} p={6} border="1px solid" borderColor="whiteAlpha.200" rounded="lg" bg="whiteAlpha.50">
              <Heading size="md">{cap.title}</Heading>
              <Text mt={2} opacity={0.8}>{cap.body}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Box display="flex" gap={4} mt={8} flexDir={{ base: "column", md: "row" }}>
          <Button as={RouterLink} to="/services" variant="ghost">Explore Services</Button>
          <Button as={RouterLink} to="/projects/ongoing">See Ongoing Projects</Button>
        </Box>
      </Section>

      <Section>
        <Heading size="lg">Selected work</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={6}>
          {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </SimpleGrid>
        <Button as={RouterLink} to="/projects/case-studies" mt={6} variant="ghost">View all case studies</Button>
      </Section>

      <Section>
        <Box p={8} rounded="2xl" bgGradient="linear(to-r, brand.800, blackAlpha.700)" border="1px solid" borderColor="whiteAlpha.200">
          <Heading>Have an idea? Let’s build it.</Heading>
          <Text mt={2} opacity={0.85}>We partner with founders, PMs, and CTOs to ship fast and scale.</Text>
          <Button as={RouterLink} to="/contact" mt={6} size="lg">Get in touch</Button>
        </Box>
      </Section>
    </Box>
  );
}