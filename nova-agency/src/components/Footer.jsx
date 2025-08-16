"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  HStack,
  VStack,
  Text,
  Heading,
  Link as ChakraLink,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Icon,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBolt, FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaEnvelope } from "react-icons/fa";

function PreFooterCTA() {
  return (
    <Box
      mt={20}
      mx="auto"
      maxW="1200px"
      position="relative"
      overflow="hidden"
      rounded="2xl"
      border="1px solid"
      borderColor="whiteAlpha.200"
      bgGradient="linear(to-r, blackAlpha.700, blackAlpha.600)"
      px={{ base: 6, md: 10 }}
      py={{ base: 8, md: 12 }}
    >
      {/* gradient orbs */}
      <Box
        aria-hidden
        position="absolute"
        top="-80px"
        left="-100px"
        w="380px"
        h="380px"
        rounded="full"
        filter="blur(40px)"
        bgGradient="radial(rgba(21,109,255,0.35), rgba(21,109,255,0.05))"
      />
      <Box
        aria-hidden
        position="absolute"
        bottom="-100px"
        right="-60px"
        w="340px"
        h="340px"
        rounded="full"
        filter="blur(40px)"
        bgGradient="radial(rgba(168,85,247,0.35), rgba(168,85,247,0.05))"
      />

      <Flex direction={{ base: "column", md: "row" }} align="center" gap={6} position="relative" zIndex={1}>
        <VStack align="start" spacing={2} flex="1">
          <Heading size="lg">Ready to move faster?</Heading>
          <Text opacity={0.85}>
            Bring us your hardest problems. We’ll design, build, and ship with measurable outcomes.
          </Text>
        </VStack>
        <HStack spacing={3}>
          <Button as={RouterLink} to="/contact" size="lg">
            Start a Project
          </Button>
          <Button
            as={RouterLink}
            to="https://calendly.com/your-cal"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="lg"
            rightIcon={<FaArrowRight />}
          >
            Book a call
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default function Footer() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const { pathname } = useLocation();

  function subscribe() {
    if (!email || !email.includes("@")) {
      toast({ title: "Enter a valid email", status: "warning", duration: 3000, isClosable: true });
      return;
    }
    toast({
      title: "Subscribed",
      description: "Thanks! We’ll occasionally share launches and case studies.",
      status: "success",
      duration: 3500,
      isClosable: true,
    });
    setEmail("");
  }

  const linkStyle = { opacity: 0.85, _hover: { color: "brand.200", opacity: 1 } };

  return (
    <Box mt={20}>
      {/* Pre-footer CTA (hide on contact to avoid double-CTA) */}
      {pathname !== "/contact" && <PreFooterCTA />}

      {/* Main footer */}
      <Box mt={12} borderTop="1px solid" borderColor="whiteAlpha.200">
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }} py={{ base: 10, md: 14 }}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
            {/* Brand */}
            <VStack align="start" spacing={4}>
              <HStack spacing={3}>
                <Icon as={FaBolt} color="brand.400" />
                <ChakraLink as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
                  <Heading size="md">NovaForge</Heading>
                </ChakraLink>
              </HStack>
              <Text opacity={0.8}>
                We build category‑defining products in Web & AI/ML. Strategy, design, and engineering—end to end.
              </Text>
              <HStack spacing={4}>
                <ChakraLink href="https://github.com/" isExternal aria-label="GitHub" _hover={{ color: "brand.200" }}>
                  <Icon as={FaGithub} boxSize={5} />
                </ChakraLink>
                <ChakraLink href="https://twitter.com/" isExternal aria-label="Twitter" _hover={{ color: "brand.200" }}>
                  <Icon as={FaTwitter} boxSize={5} />
                </ChakraLink>
                <ChakraLink href="https://linkedin.com/" isExternal aria-label="LinkedIn" _hover={{ color: "brand.200" }}>
                  <Icon as={FaLinkedin} boxSize={5} />
                </ChakraLink>
              </HStack>
            </VStack>

            {/* Links: Company */}
            <VStack align="start" spacing={3}>
              <Heading size="sm" opacity={0.9}>
                Company
              </Heading>
              <ChakraLink as={RouterLink} to="/about" {...linkStyle}>
                About
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/services" {...linkStyle}>
                Services
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/projects/case-studies" {...linkStyle}>
                Case Studies
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/projects/ongoing" {...linkStyle}>
                Ongoing
              </ChakraLink>
            </VStack>

            {/* Links: Resources */}
            <VStack align="start" spacing={3}>
              <Heading size="sm" opacity={0.9}>
                Resources
              </Heading>
              <ChakraLink href="#" {...linkStyle}>
                Playbook
              </ChakraLink>
              <ChakraLink href="#" {...linkStyle}>
                Guides
              </ChakraLink>
              <ChakraLink href="#" {...linkStyle}>
                Open source
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/privacy" {...linkStyle}>
                Privacy
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/terms" {...linkStyle}>
                Terms
              </ChakraLink>
            </VStack>

            {/* Newsletter / Contact */}
            <VStack align="start" spacing={4}>
              <Heading size="sm" opacity={0.9}>
                Stay in the loop
              </Heading>
              <Text opacity={0.8}>Monthly updates on launches, insights, and behind‑the‑scenes.</Text>
              <InputGroup maxW="sm">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bg="whiteAlpha.50"
                  borderColor="whiteAlpha.200"
                />
                <InputRightElement width="3rem">
                  <Button h="2rem" w="2.4rem" p={0} onClick={subscribe}>
                    <Icon as={FaArrowRight} />
                  </Button>
                </InputRightElement>
              </InputGroup>

              <HStack spacing={2}>
                <Icon as={FaEnvelope} />
                <ChakraLink href="mailto:hello@novaforge.studio" {...linkStyle}>
                  hello@novaforge.studio
                </ChakraLink>
              </HStack>
              <Text fontSize="sm" opacity={0.6}>
                Remote-first across 5 timezones
              </Text>
            </VStack>
          </SimpleGrid>

          <Divider my={8} opacity={0.15} />

          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" gap={4}>
            <Text opacity={0.7}>© {new Date().getFullYear()} NovaForge Studio</Text>
            <HStack spacing={6}>
              <ChakraLink as={RouterLink} to="/privacy" opacity={0.8} _hover={{ opacity: 1 }}>
                Privacy
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/terms" opacity={0.8} _hover={{ opacity: 1 }}>
                Terms
              </ChakraLink>
              <ChakraLink as={RouterLink} to="/contact" opacity={0.8} _hover={{ opacity: 1 }}>
                Contact
              </ChakraLink>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}