import { useParams, Link as RouterLink } from "react-router-dom";
import { Badge, Box, Button, Heading, HStack, Image, SimpleGrid, Stack, Text, Divider } from "@chakra-ui/react";
import Section from "../../components/Section";
import { projects } from "../../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Section>
        <Heading size="lg">Project not found</Heading>
        <Button as={RouterLink} to="/projects/case-studies" mt={4} variant="ghost">Back to work</Button>
      </Section>
    );
  }

  return (
    <Box>
      <Section>
        <HStack justify="space-between" align="start">
          <Stack>
            <Heading size="2xl">{project.title}</Heading>
            <HStack>
              <Badge>{project.category}</Badge>
              <Badge colorScheme={project.status === "ongoing" ? "purple" : "green"} textTransform="capitalize">
                {project.status}
              </Badge>
            </HStack>
            <Text mt={3} opacity={0.8}>{project.excerpt}</Text>
          </Stack>
        </HStack>
      </Section>

      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
        <Box position="relative" rounded="xl" overflow="hidden" border="1px solid" borderColor="whiteAlpha.200">
          <Image src={project.cover} alt={project.title} w="100%" h={{ base: "240px", md: "420px" }} objectFit="cover" />
        </Box>
      </Box>

      <Section>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          <Box>
            <Heading size="md" mb={3}>Overview</Heading>
            <Text opacity={0.85}>
              {project.body ??
                "We partnered with the client to design, build, and deploy end-to-end. Scope included discovery, architecture, implementation, and a go-to-market launch."}
            </Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>Impact</Heading>
            <Text opacity={0.85}>+42% conversion, -35% latency, 99.95% uptime. Measurable lift across core metrics.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={3}>Tech</Heading>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {(project.tech ?? ["React", "Chakra UI"]).map((t) => (
                <Badge key={t} variant="subtle">{t}</Badge>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>

        <Divider my={10} borderColor="whiteAlpha.200" />
        <Heading size="md" mb={3}>Process</Heading>
        <Text opacity={0.85}>Discovery → Prototype → Build → Ship → Iterate. Tight feedback loops and measurable outcomes.</Text>
      </Section>
    </Box>
  );
}