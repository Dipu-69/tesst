import { Link as RouterLink } from "react-router-dom";
import { Badge, Card, CardBody, Heading, HStack, Link as ChakraLink, Stack, Text, Image, AspectRatio } from "@chakra-ui/react";

export default function ProjectCard({ project }) {
  return (
    <ChakraLink as={RouterLink} to={`/projects/${project.slug}`} _hover={{ textDecoration: "none" }}>
      <Card overflow="hidden" _hover={{ transform: "translateY(-4px)", transition: "all 0.2s ease" }}>
        <AspectRatio ratio={16 / 9}>
          <Image src={project.cover} alt={project.title} objectFit="cover" />
        </AspectRatio>
        <CardBody>
          <HStack justify="space-between" mb={2}>
            <Heading size="md">{project.title}</Heading>
            <Badge colorScheme={project.status === "ongoing" ? "purple" : "green"} textTransform="capitalize">
              {project.status}
            </Badge>
          </HStack>
          <Text opacity={0.8} noOfLines={2}>{project.excerpt}</Text>
          <Stack direction="row" mt={3} spacing={2}>
            {project.tags.slice(0, 3).map((t) => (
              <Badge key={t} variant="subtle">{t}</Badge>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </ChakraLink>
  );
}