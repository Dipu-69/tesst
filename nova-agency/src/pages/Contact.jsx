import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Switch,
  Checkbox,
  HStack,
  VStack,
  Wrap,
  WrapItem,
  Tag,
  TagLabel,
  Icon,
  InputGroup,
  InputLeftAddon,
  useToast,
  Divider,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Section from "../components/Section";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { FiMail, FiPhoneCall, FiVideo, FiUploadCloud, FiShield, FiClock, FiArrowRight } from "react-icons/fi";

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const serviceOptions = [
  "Web app (React)",
  "Design system",
  "AI / RAG",
  "MLOps",
  "eCommerce",
  "Analytics",
];

const budgetOptions = ["<$10k", "$10k–$25k", "$25k–$50k", "$50k–$100k", "$100k+"];

function SelectableTag({ label, active, onClick }) {
  return (
    <Tag
      size="lg"
      cursor="pointer"
      variant="subtle"
      bg={active ? "brand.500" : "whiteAlpha.100"}
      color={active ? "white" : "whiteAlpha.900"}
      border="1px solid"
      borderColor={active ? "transparent" : "whiteAlpha.200"}
      _hover={{ transform: "translateY(-1px)" }}
      transition="all 0.15s ease"
      onClick={onClick}
    >
      <TagLabel px={2} py={1}>
        {label}
      </TagLabel>
    </Tag>
  );
}

export default function Contact() {
  const toast = useToast();
  const formRef = useRef(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [isSending, setIsSending] = useState(false);
  const FORM_ENDPOINT = "https://formspree.io/f/yourid"; // replace with your Formspree ID

  function toggleService(s) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(formRef.current);
    form.set("services", selectedServices.join(", "));
    form.set("budget", selectedBudget);

    // Spam honeypot: if filled, bail
    if (form.get("company_website")) {
      return;
    }

    try {
      setIsSending(true);
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        toast({
          title: "Thanks! We got your message.",
          description: "We’ll reply within 24–48 hours.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        formRef.current.reset();
        setSelectedServices([]);
        setSelectedBudget("");
      } else {
        throw new Error(data?.error || "Failed to send");
      }
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email hello@novaforge.studio",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <Box>
      {/* Hero with gradient accents */}
      <Section>
        <Box
          position="relative"
          rounded="2xl"
          p={{ base: 6, md: 10 }}
          overflow="hidden"
          border="1px solid"
          borderColor="whiteAlpha.200"
          bgGradient="linear(to-b, blackAlpha.500, blackAlpha.300)"
        >
          <Box
            aria-hidden
            position="absolute"
            top="-120px"
            left="-80px"
            w="420px"
            h="420px"
            rounded="full"
            filter="blur(40px)"
            bgGradient="radial(rgba(21,109,255,0.35), rgba(21,109,255,0.06))"
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
            bgGradient="radial(rgba(168,85,247,0.32), rgba(168,85,247,0.05))"
          />

          <Heading size="2xl" zIndex={1} position="relative">
            Let’s build something great
          </Heading>
          <Text mt={3} opacity={0.85} maxW="3xl" zIndex={1} position="relative">
            Tell us about your project. We’ll get back in 24–48h.
          </Text>

          {/* Quick contact options */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={6} zIndex={1} position="relative">
            {[
              { icon: FiMail, label: "Email us", sub: "hello@novaforge.studio", href: "mailto:hello@novaforge.studio" },
              { icon: FiVideo, label: "Book a call", sub: "30-minute intro", href: "https://calendly.com/your-cal" },
              { icon: FiPhoneCall, label: "Talk to us", sub: "+1 (555) 123‑4567", href: "tel:+15551234567" },
            ].map((c) => (
              <Card
                key={c.label}
                as={RouterLink}
                to={c.href}
                border="1px solid"
                borderColor="whiteAlpha.200"
                bg="whiteAlpha.50"
                _hover={{ transform: "translateY(-3px)", bg: "whiteAlpha.100" }}
                transition="all 0.15s ease"
              >
                <CardBody>
                  <HStack spacing={3}>
                    <Icon as={c.icon} color="brand.400" boxSize={5} />
                    <Box>
                      <Text fontWeight="600">{c.label}</Text>
                      <Text fontSize="sm" opacity={0.75}>
                        {c.sub}
                      </Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Section>

      {/* Form + Sidebar */}
      <Section>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={10}>
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Box
              as="form"
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              p={{ base: 4, md: 6 }}
              border="1px solid"
              borderColor="whiteAlpha.200"
              rounded="xl"
              bg="whiteAlpha.50"
            >
              {/* spam honeypot */}
              <Input type="text" name="company_website" display="none" tabIndex={-1} autoComplete="off" />

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input name="name" placeholder="Your name" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" placeholder="you@company.com" />
                </FormControl>

                <FormControl>
                  <FormLabel>Company</FormLabel>
                  <Input name="company" placeholder="Company or team" />
                </FormControl>

                <FormControl>
                  <FormLabel>Timeline</FormLabel>
                  <Select name="timeline" placeholder="Select timeline">
                    <option>ASAP (0–4 weeks)</option>
                    <option>1–2 months</option>
                    <option>3–6 months</option>
                    <option>Flexible / exploring</option>
                  </Select>
                </FormControl>
              </SimpleGrid>

              {/* Services interest */}
              <Box mt={6}>
                <FormLabel mb={2}>What do you need help with?</FormLabel>
                <Wrap spacing={3}>
                  {serviceOptions.map((s) => (
                    <WrapItem key={s}>
                      <SelectableTag
                        label={s}
                        active={selectedServices.includes(s)}
                        onClick={() => toggleService(s)}
                      />
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>

              {/* Budget presets */}
              <Box mt={6}>
                <FormLabel mb={2}>Budget</FormLabel>
                <Wrap spacing={3}>
                  {budgetOptions.map((b) => (
                    <WrapItem key={b}>
                      <SelectableTag
                        label={b}
                        active={selectedBudget === b}
                        onClick={() => setSelectedBudget(b)}
                      />
                    </WrapItem>
                  ))}
                </Wrap>
                <Text fontSize="sm" opacity={0.6} mt={2}>
                  Not sure yet? Pick a ballpark—scope is finalized during discovery.
                </Text>
              </Box>

              {/* Project details */}
              <FormControl isRequired mt={6}>
                <FormLabel>Project details</FormLabel>
                <Textarea
                  name="details"
                  placeholder="What are we building? Goals, users, constraints, links…"
                  rows={6}
                />
              </FormControl>

              {/* Links + attachments row */}
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mt={4}>
                <FormControl>
                  <FormLabel>Reference link</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>https://</InputLeftAddon>
                    <Input name="reference" placeholder="example.com/spec" />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <FormLabel>Attachment</FormLabel>
                  <Input name="attachment" type="file" accept=".pdf,.doc,.docx,.png,.jpg" />
                </FormControl>
              </SimpleGrid>

              {/* NDA + consent */}
              <HStack justify="space-between" mt={6}>
                <HStack>
                  <Icon as={FiShield} />
                  <Text opacity={0.8}>NDA required?</Text>
                  <Switch name="nda" />
                </HStack>
                <HStack>
                  <Icon as={FiClock} />
                  <Text opacity={0.8}>Response in 24–48h</Text>
                </HStack>
              </HStack>

              <Checkbox mt={6} defaultChecked name="consent" isRequired>
                I agree to the privacy policy and to be contacted about my request.
              </Checkbox>

              <HStack mt={6} spacing={4}>
                <Button type="submit" size="lg" isLoading={isSending} loadingText="Sending…">
                  Send message
                </Button>
                <Button
                  as={RouterLink}
                  to="https://calendly.com/your-cal"
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  variant="ghost"
                  rightIcon={<FiArrowRight />}
                >
                  Book a call
                </Button>
              </HStack>
            </Box>
          </GridItem>

          {/* Sidebar: why us / reassurance */}
          <GridItem>
            <VStack align="stretch" spacing={6}>
              <Box
                p={5}
                rounded="xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bgGradient="linear(to-r, blackAlpha.600, transparent)"
              >
                <Heading size="md">What you can expect</Heading>
                <VStack align="start" spacing={3} mt={3}>
                  {[
                    "A reply within 24–48h",
                    "Brief discovery call to align on goals",
                    "Clear proposal with scope & timeline",
                    "Senior team on day one",
                  ].map((i) => (
                    <HStack key={i} spacing={3}>
                      <Box w="8px" h="8px" bg="brand.400" rounded="full" />
                      <Text opacity={0.85}>{i}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>

              <Box
                p={5}
                rounded="xl"
                border="1px solid"
                borderColor="whiteAlpha.200"
                bg="whiteAlpha.50"
              >
                <Heading size="md">Prefer email?</Heading>
                <Text mt={2} opacity={0.85}>
                  Drop us a note at
                  {" "}
                  <Text as="a" href="mailto:hello@novaforge.studio" color="brand.200">
                    hello@novaforge.studio
                  </Text>
                  {" "}
                  — we’ll take it from there.
                </Text>
                <Divider my={4} opacity={0.15} />
                <Heading size="sm" opacity={0.8} mb={2}>
                  Offices
                </Heading>
                <Text opacity={0.75}>Remote-first across 5 timezones.</Text>
              </Box>

              <Card border="1px solid" borderColor="whiteAlpha.200" bg="whiteAlpha.50">
                <CardBody>
                  <Heading size="sm" mb={2}>
                    Data & Privacy
                  </Heading>
                  <Text fontSize="sm" opacity={0.8}>
                    We only use your details to reply about your project. No marketing lists. Attachments are kept
                    confidential and can be covered by NDA on request.
                  </Text>
                </CardBody>
              </Card>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Section>
    </Box>
  );
}