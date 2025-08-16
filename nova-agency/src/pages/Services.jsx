import React from "react";
import {
    Box,
    Heading,
    Text,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Tab,
    SimpleGrid,
    Card,
    CardBody,
    HStack,
    Stack,
    List,
    ListItem,
    ListIcon,
    Icon,
    Button,
    Tag,
    TagLabel,
    Wrap,
    WrapItem,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Badge,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { FaCheckCircle, FaAws, FaGoogle } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import {
    FiCode,
    FiCpu,
    FiCloud,
    FiZap,
    FiShield,
    FiTrendingUp,
    FiCompass,
    FiLayers,
    FiSend,
    FiRefreshCcw,
} from "react-icons/fi";
import {
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiPython,
    SiTensorflow,
    SiPytorch,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiFastapi,
    SiVercel,
} from "react-icons/si";

import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const webServices = [
    {
        icon: FiCode,
        title: "Web Apps & Platforms",
        bullets: ["React SPAs", "Routing, state, data", "SSR alternative patterns"],
    },
    {
        icon: FiZap,
        title: "Performance & A11y",
        bullets: ["Core Web Vitals", "Accessibility (WCAG)", "Design tokens"],
    },
    {
        icon: FiLayers,
        title: "Design Systems",
        bullets: ["Component libraries", "Theming & tokens", "Docs & Storybook"],
    },
    {
        icon: FiCloud,
        title: "APIs & Data",
        bullets: ["REST/GraphQL", "Caching & search", "CI/CD pipelines"],
    },
    {
        icon: FiShield,
        title: "Security & Auth",
        bullets: ["RBAC/SSO", "OWASP best practices", "Secrets & key rotation"],
    },
    {
        icon: FiTrendingUp,
        title: "Analytics & Growth",
        bullets: ["Event tracking", "Experimentation", "Funnels & dashboards"],
    },
];

const aiServices = [
    {
        icon: FiCpu,
        title: "RAG / LLM Apps",
        bullets: ["Retrieval pipelines", "Eval harness & guardrails", "Feedback loops"],
    },
    {
        icon: FiLayers,
        title: "Embeddings & Vector DB",
        bullets: ["Chunking strategies", "Hybrid search", "Metadata filtering"],
    },
    {
        icon: FiZap,
        title: "MLOps & Serving",
        bullets: ["Batch/real-time inference", "Monitoring & drift", "CI for models"],
    },
    {
        icon: FiTrendingUp,
        title: "Forecasting & ML",
        bullets: ["Time-series & causal", "Feature stores", "Model evaluation"],
    },
    {
        icon: FiShield,
        title: "Safety & Compliance",
        bullets: ["PII redaction", "Prompt injection defense", "Eval reports"],
    },
    {
        icon: FiCloud,
        title: "Data Engineering",
        bullets: ["Pipelines & lakes", "ETL/ELT", "Warehousing"],
    },
];

const steps = [
    { icon: FiCompass, title: "Discover", body: "Align on goals, risks, and success metrics. Short research sprints." },
    { icon: FiLayers, title: "Prototype", body: "Clickable UX or working model to validate direction and scope." },
    { icon: FiCode, title: "Build", body: "Design system, codebase foundations, APIs, infra and integrations." },
    { icon: FiSend, title: "Launch", body: "Cut scope to essentials, polish, test, ship, and monitor." },
    { icon: FiRefreshCcw, title: "Grow", body: "Measure, iterate, and scale with a tight feedback loop." },
];

const stack = [
    { icon: SiReact, label: "React" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiPython, label: "Python" },
    { icon: SiFastapi, label: "FastAPI" },
    { icon: TbBrandOpenai, label: "OpenAI" },
    { icon: SiTensorflow, label: "TensorFlow" },
    { icon: SiPytorch, label: "PyTorch" },
    { icon: SiPostgresql, label: "Postgres" },
    { icon: SiRedis, label: "Redis" },
    { icon: SiDocker, label: "Docker" },
    { icon: SiKubernetes, label: "Kubernetes" },
    { icon: FaAws, label: "AWS" },
    { icon: FaGoogle, label: "GCP" },
    { icon: SiVercel, label: "Vercel" },
];

const faqs = [
    {
        q: "How fast can you start?",
        a: "Within 7–10 days for most projects. Discovery starts immediately and we align on a roadmap in week one.",
    },
    {
        q: "Do you do fixed-scope work?",
        a: "Yes—for well-defined projects. Otherwise we recommend sprint-based delivery with weekly demos and checkpoints.",
    },
    {
        q: "Can you join our stack and rituals?",
        a: "Absolutely. We work in your Slack/Jira/Linear, join standups, and push to your repos with transparent velocity metrics.",
    },
    {
        q: "What does a typical engagement cost?",
        a: "Startup MVPs start around $25k–$60k. AI pilots from $15k. Ongoing product squads are monthly retainers.",
    },
];

function FeatureCard({ icon, title, bullets }) {
    return (
        <Card
            h="full"
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.200"
            _hover={{ transform: "translateY(-4px)", borderColor: "whiteAlpha.300" }}
            transition="all 0.2s ease"
        >
            <CardBody>
                <HStack spacing={3} mb={3}>
                    <Icon as={icon} color="brand.400" boxSize={5} />
                    <Heading size="md">{title}</Heading>
                </HStack>
                <List spacing={2} mt={2}>
                    {bullets.map((b) => (
                        <ListItem key={b} display="flex" alignItems="flex-start" gap={2}>
                            <ListIcon as={FaCheckCircle} color="brand.400" mt="2px" />
                            <Text opacity={0.85}>{b}</Text>
                        </ListItem>
                    ))}
                </List>
            </CardBody>
        </Card>
    );
}

export default function Services() {
    const completed = projects.filter((p) => p.status === "completed").slice(0, 3);

    return (
        <Box>
            {/* Hero */}
            <Section>
                <Heading size="2xl">Services</Heading>
                <Text mt={3} opacity={0.8}>
                    Full-stack delivery across Web and AI/ML. Strategy, design, and engineering to go from 0→1 and scale.
                </Text>
            </Section>

            {/* Capabilities Tabs */}
            <Section>
                <Tabs variant="enclosed" isFitted>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>AI/ML</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text opacity={0.85} mb={6}>
                                Modern React apps, design systems, APIs, and performance that moves your metrics.
                            </Text>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                                {webServices.map((s) => (
                                    <FeatureCard key={s.title} icon={s.icon} title={s.title} bullets={s.bullets} />
                                ))}
                            </SimpleGrid>
                        </TabPanel>

                        <TabPanel>
                            <Text opacity={0.85} mb={6}>
                                Applied machine learning—usable, measurable, production-ready.
                            </Text>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                                {aiServices.map((s) => (
                                    <FeatureCard key={s.title} icon={s.icon} title={s.title} bullets={s.bullets} />
                                ))}
                            </SimpleGrid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Section>

            {/* Stats band */}
            <Section>
                <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
                    {[
                        { k: "60+", v: "Projects shipped" },
                        { k: "11+ yrs", v: "Avg. seniority" },
                        { k: "2–6 wks", v: "MVP timeline" },
                        { k: "99.95%", v: "Typical uptime" },
                    ].map((m) => (
                        <Box
                            key={m.k}
                            p={6}
                            rounded="lg"
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            bg="whiteAlpha.50"
                        >
                            <Heading size="lg">{m.k}</Heading>
                            <Text opacity={0.75}>{m.v}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Section>

            {/* Process timeline */}
            <Section>
                <Heading size="lg" mb={6}>
                    How we work
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 5 }} gap={5}>
                    {steps.map((s, idx) => (
                        <Box
                            key={s.title}
                            position="relative"
                            p={5}
                            rounded="lg"
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            bg="whiteAlpha.50"
                            _hover={{ transform: "translateY(-4px)" }}
                            transition="all 0.2s ease"
                        >
                            <HStack mb={2}>
                                <Icon as={s.icon} color="brand.400" />
                                <Badge colorScheme="blackAlpha" variant="subtle">
                                    Step {idx + 1}
                                </Badge>
                            </HStack>
                            <Heading size="md">{s.title}</Heading>
                            <Text mt={2} opacity={0.85}>
                                {s.body}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Section>

            {/* Engagement models */}
            <Section>
                <Heading size="lg">Engagement models</Heading>
                <Text opacity={0.8} mt={2}>
                    Pick what fits your stage. We can mix-and-match as we go.
                </Text>

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mt={6}>
                    {[
                        {
                            name: "Sprint Pack",
                            price: "4-week fixed sprint",
                            points: ["Clear scope", "Weekly demos", "Hands-on PM"],
                        },
                        {
                            name: "Product Squad",
                            price: "Monthly retainer",
                            points: ["Designer + Eng + DS", "Velocity targets", "Roadmap ownership"],
                        },
                        {
                            name: "Advisory",
                            price: "Flexible",
                            points: ["Architecture reviews", "AI strategy", "Hiring & onboarding"],
                        },
                    ].map((m) => (
                        <Card
                            key={m.name}
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            bg="whiteAlpha.50"
                            _hover={{ transform: "translateY(-4px)" }}
                            transition="all 0.2s ease"
                        >
                            <CardBody>
                                <Heading size="md">{m.name}</Heading>
                                <Text mt={1} opacity={0.75}>
                                    {m.price}
                                </Text>
                                <List spacing={2} mt={3}>
                                    {m.points.map((p) => (
                                        <ListItem key={p}>
                                            <ListIcon as={FaCheckCircle} color="brand.400" />
                                            {p}
                                        </ListItem>
                                    ))}
                                </List>
                                <Button mt={4} variant="ghost" as={RouterLink} to="/contact">
                                    Start a Project
                                </Button>
                            </CardBody>
                        </Card>
                    ))}
                </SimpleGrid>
            </Section>

            {/* Tech stack */}
            <Section>
                <Heading size="lg" mb={4}>
                    Tech we love
                </Heading>
                <Box
                    p={5}
                    rounded="xl"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    bgGradient="linear(to-r, blackAlpha.600, transparent)"
                >
                    <Wrap spacing={4}>
                        {stack.map((t) => (
                            <WrapItem key={t.label}>
                                <Tag
                                    size="lg"
                                    variant="subtle"
                                    bg="whiteAlpha.100"
                                    border="1px solid"
                                    borderColor="whiteAlpha.200"
                                    _hover={{ transform: "translateY(-2px)" }}
                                    transition="all 0.2s ease"
                                >
                                    <HStack spacing={2} px={2} py={1}>
                                        <Icon as={t.icon} color="brand.400" />
                                        <TagLabel>{t.label}</TagLabel>
                                    </HStack>
                                </Tag>
                            </WrapItem>
                        ))}
                    </Wrap>
                </Box>
            </Section>

            {/* Case study teasers */}
            <Section>
                <HStack justify="space-between" mb={4}>
                    <Heading size="lg">Selected work</Heading>
                    <Button variant="ghost" as={RouterLink} to="/projects/case-studies">
                        View all
                    </Button>
                </HStack>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                    {completed.map((p) => (
                        <ProjectCard key={p.slug} project={p} />
                    ))}
                </SimpleGrid>
            </Section>

            {/* FAQs */}
            <Section>
                <Heading size="lg" mb={4}>
                    FAQs
                </Heading>
                <Accordion allowMultiple>
                    {faqs.map((f) => (
                        <AccordionItem
                            key={f.q}
                            border="1px solid"
                            borderColor="whiteAlpha.200"
                            rounded="md"
                            mb={3}
                            overflow="hidden"
                        >
                            <h3>
                                <AccordionButton _expanded={{ bg: "whiteAlpha.100" }}>
                                    <Box as="span" flex="1" textAlign="left" fontWeight="600">
                                        {f.q}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h3>
                            <AccordionPanel pb={4} opacity={0.85}>
                                {f.a}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
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
                    <Heading>Have an idea? Let’s build it.</Heading>
                    <Text mt={2} opacity={0.85}>
                        We partner with founders, PMs, and CTOs to ship fast and scale. Tell us what you’re aiming for.
                    </Text>
                    <Stack direction={{ base: "column", md: "row" }} gap={4} mt={6}>
                        <Button size="lg" as={RouterLink} to="/contact">
                            Start a Project
                        </Button>
                        <Button variant="ghost" size="lg" as={RouterLink} to="/projects/case-studies">
                            See our work
                        </Button>
                    </Stack>
                </Box>
            </Section>
        </Box>
    );
}