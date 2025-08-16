import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function CaseStudies() {
  const completed = projects.filter((p) => p.status === "completed");
  return (
    <Box>
      <Section>
        <Heading size="2xl">Case studies</Heading>
        <Text mt={3} opacity={0.8}>Selected launches and results.</Text>
      </Section>
      <Section>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {completed.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </SimpleGrid>
      </Section>
    </Box>
  );
}