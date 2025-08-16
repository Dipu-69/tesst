import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Section from "../../components/Section";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function Ongoing() {
  const ongoing = projects.filter((p) => p.status === "ongoing");
  return (
    <Box>
      <Section>
        <Heading size="2xl">Ongoing projects</Heading>
        <Text mt={3} opacity={0.8}>A look at what’s on our desks right now.</Text>
      </Section>
      <Section>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {ongoing.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </SimpleGrid>
      </Section>
    </Box>
  );
}