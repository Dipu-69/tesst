import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Card,
  CardBody,
  Avatar,
  Icon,
  Button,
  Badge,
  Wrap,
  WrapItem,
  Divider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { FiTarget, FiFeather, FiZap, FiUsers, FiShield, FiTrendingUp, FiArrowRight, FiCalendar } from "react-icons/fi";
import { animate, useInView } from "framer-motion";
import Section from "../components/Section";

// Animated counter
function Stat({ value, label, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <Card bg="whiteAlpha.50" border="1px solid" borderColor="whiteAlpha.200">
      <CardBody>
        <Heading ref={ref} size="2xl" letterSpacing="-0.02em">
          {prefix}
          {count}
          {suffix}
        </Heading>
        <Text mt={2} opacity={0.8}>
          {label}
        </Text>
      </CardBody>
    </Card>
  );
}

const values = [
  {
    icon: FiTarget,
    title: "Outcome > Output",
    body: "We optimize for business impact, not feature count. Clear metrics in every project.",
  },
  {
    icon: FiFeather,
    title: "Craftsmanship",
    body: "Clean code, thoughtful UX, sharp details. Maintainable, scalable, delightful.",
  },
  {
    icon: FiZap,
    title: "Speed with quality",
    body: "Short sprints, fast feedback loops, and strong QA to keep momentum.",
  },
  {
    icon: FiUsers,
    title: "Open collaboration",
    body: "We work in your tools, join your rituals, and ship together as one team.",
  },
  {
    icon: FiShield,
    title: "Security by default",
    body: "From auth to data handling, we ship production-grade and audit-ready.",
  },
  {
    icon: FiTrendingUp,
    title: "Learning culture",
    body: "We measure, learn, and iterate—continuously improving product and process.",
  },
];

const timeline = [
  {
    year: "2018",
    title: "Founded the studio",
    body: "Started with a small core team shipping MVPs for early-stage startups.",
  },
  {
    year: "2020",
    title: "Systems & scale",
    body: "Built out design systems, CI/CD, analytics stacks, and shipped 20+ products.",
  },
  {
    year: "2022",
    title: "AI turns practical",
    body: "Shipped our first RAG systems, evaluation harnesses, and ML ops pipelines.",
  },
  {
    year: "2024",
    title: "Global delivery",
    body: "Distributed squad model across timezones with reliable handoffs and velocity.",
  },
];

const team = [
  { name: "A. Patel", role: "Founder & Tech Lead", seed: "AP" },
  { name: "J. Park", role: "Design Lead", seed: "JP" },
  { name: "S. Rao", role: "Data Science", seed: "SR" },
  { name: "M. Singh", role: "Frontend Eng", seed: "MS" },
  { name: "L. Kim", role: "Product", seed: "LK" },
  { name: "D. Cruz", role: "DevOps", seed: "DC" },
];

const testimonials = [
  {
    quote:
      "They ship fast and keep quality high. We hit our launch date and beat conversion targets in week two.",
    author: "Product Lead, SaaS",
  },
  {
    quote:
      "Their AI team turned our doc chaos into a reliable assistant with evals and feedback loops. Huge win for support.",
    author: "Head of Ops, Enterprise",
  },
  {
    quote: "Best partners we’ve worked with—clear comms, crisp UI, and measurable results.",
    author: "Founder, eCommerce",
  },
];

export default function About() {
  return (
    <Box>
      {/* Hero with subtle backdrop */}
      <Section>
        <Box
          position="relative"
          rounded="2xl"
          p={{ base: 6, md: 10 }}
          overflow="hidden"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bgGradient="linear(to-b, blackAlpha.400, blackAlpha.200)"
        >
          {/* background accents */}
          <Box
            aria-hidden
            position="absolute"
            top="-80px"
            left="-120px"
            w="400px"
            h="400px"
            rounded="full"
            filter="blur(40px)"
            bgGradient="radial(rgba(21,109,255,0.4), rgba(21,109,255,0.05))"
          />
          <Box
            aria-hidden
            position="absolute"
            bottom="-120px"
            right="-80px"
            w="380px"
            h="380px"
            rounded="full"
            filter="blur(40px)"
            bgGradient="radial(rgba(168,85,247,0.35), rgba(168,85,247,0.05))"
          />

          <Heading size="2xl" bgGradient="linear(to-r, brand.200, #A855F7)" bgClip="text">
            About NovaForge
          </Heading>
          <Text mt={3} fontSize="lg" opacity={0.85} maxW="3xl">
            We’re a senior team of engineers, designers, and data scientists. We partner with founders and product teams
            to turn ideas into products—and scale them with confidence.
          </Text>

          <HStack mt={6} spacing={3} wrap="wrap">
            <Badge colorScheme="purple" variant="subtle">
              Web Platforms
            </Badge>
            <Badge colorScheme="blue" variant="subtle">
              AI/ML & RAG
            </Badge>
            <Badge colorScheme="cyan" variant="subtle">
              Design Systems
            </Badge>
            <Badge colorScheme="green" variant="subtle">
              MLOps
            </Badge>
          </HStack>
        </Box>
      </Section>

      {/* Animated stats */}
      <Section>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          <Stat value={11} suffix="+" label="Years avg. experience" />
          <Stat value={60} suffix="+" label="Projects shipped" />
          <Stat value={5} label="Timezones covered" />
        </SimpleGrid>
      </Section>

      {/* Values / Principles */}
      <Section>
        <Heading size="lg" mb={6}>
          What drives us
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {values.map((v) => (
            <Card
              key={v.title}
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.200"
              _hover={{ transform: "translateY(-4px)", borderColor: "whiteAlpha.300" }}
              transition="all 0.2s ease"
              h="full"
            >
              <CardBody>
                <HStack spacing={3} mb={2}>
                  <Icon as={v.icon} color="brand.400" boxSize={5} />
                  <Heading size="md">{v.title}</Heading>
                </HStack>
                <Text opacity={0.85}>{v.body}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Section>

      {/* Story timeline */}
      <Section>
        <Heading size="lg" mb={6}>
          Our story
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={5}>
          {timeline.map((t) => (
            <Box
              key={t.year}
              p={5}
              rounded="lg"
              border="1px solid"
              borderColor="whiteAlpha.200"
              bg="whiteAlpha.50"
              position="relative"
              _hover={{ transform: "translateY(-4px)" }}
              transition="all 0.2s ease"
            >
              <HStack mb={1} spacing={2}>
                <Icon as={FiCalendar} color="brand.400" />
                <Badge variant="subtle">{t.year}</Badge>
              </HStack>
              <Heading size="md">{t.title}</Heading>
              <Text mt={2} opacity={0.85}>
                {t.body}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      {/* Team snapshot */}
      <Section>
        <HStack justify="space-between" mb={4}>
          <Heading size="lg">The team</Heading>
          <Button as={RouterLink} to="/contact" variant="ghost" rightIcon={<FiArrowRight />}>
            Work with us
          </Button>
        </HStack>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} gap={6}>
          {team.map((m) => (
            <VStack
              key={m.name}
              p={4}
              rounded="lg"
              border="1px solid"
              borderColor="whiteAlpha.200"
              bg="whiteAlpha.50"
              spacing={2}
              _hover={{ transform: "translateY(-3px)" }}
              transition="all 0.2s ease"
            >
              <Avatar
                name={m.name}
                size="lg"
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
                  m.seed
                )}&backgroundType=gradientLinear`}
              />
              <Text fontWeight="600">{m.name}</Text>
              <Text fontSize="sm" opacity={0.7}>
                {m.role}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Section>

      {/* Testimonials */}
      <Section>
        <Heading size="lg" mb={6}>
          What partners say
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              border="1px solid"
              borderColor="whiteAlpha.200"
              bg="whiteAlpha.50"
              _hover={{ transform: "translateY(-4px)" }}
              transition="all 0.2s ease"
            >
              <CardBody>
                <Icon as={FaQuoteLeft} color="whiteAlpha.600" />
                <Text mt={3} fontSize="lg" lineHeight={1.5}>
                  “{t.quote}”
                </Text>
                <Text mt={3} opacity={0.75}>
                  — {t.author}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Section>

      {/* CTA */}
      <Section>
        <Box
          p={{ base: 6, md: 10 }}
          rounded="2xl"
          bgGradient="linear(to-r, brand.800, blackAlpha.700)"
          border="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Heading>Let’s build what’s next.</Heading>
          <Text mt={2} opacity={0.85}>
            Have a product in mind or need a reliable squad to accelerate? We’d love to hear about it.
          </Text>
          <HStack mt={6} spacing={4}>
            <Button size="lg" as={RouterLink} to="/contact">
              Start a Project
            </Button>
            <Button size="lg" variant="ghost" as={RouterLink} to="/projects/case-studies">
              See our work
            </Button>
          </HStack>
        </Box>
      </Section>

      <Divider opacity={0.1} />
      <Box h={8} />
    </Box>
  );
}