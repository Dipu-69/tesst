import React, { useRef } from "react";
import { Box, Button, Heading, HStack, Text, useToken, chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion, useScroll, useTransform, useMotionValue, animate, useReducedMotion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

function MagneticButton({ to, children, ...props }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);

  function handleMove(e) {
    if (reduced) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.06);
    y.set(dy * 0.06);
  }
  function handleLeave() {
    animate(x, 0, { type: "spring", stiffness: 200, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 200, damping: 20 });
  }

  return (
    <MotionDiv
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      display="inline-block"
    >
      <Button as={RouterLink} to={to} size="lg" {...props}>
        {children}
      </Button>
    </MotionDiv>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();
  const [brand500, brand400] = useToken("colors", ["brand.500", "brand.400"]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBack = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <Box position="relative" overflow="hidden">
      <Box
        ref={containerRef}
        position="relative"
        minH={{ base: "80vh", md: "92vh" }}
        display="grid"
        alignItems="center"
        bgGradient="linear(to-b, blackAlpha.700, transparent)"
      >
        {/* Background grid + gradient washes */}
        <MotionDiv
          aria-hidden
          position="absolute"
          inset={0}
          style={{ y: reduced ? 0 : yBack }}
          sx={{
            backgroundImage: `
              radial-gradient(1200px 500px at 20% 10%, rgba(21, 109, 255, 0.20), transparent 60%),
              radial-gradient(1000px 400px at 80% 70%, rgba(163, 73, 214, 0.18), transparent 60%),
              repeating-linear-gradient(to right, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 80px)
            `,
            backgroundBlendMode: "screen, screen, normal, normal",
          }}
          pointerEvents="none"
        />

        {/* Glowing orbs */}
        <MotionDiv
          aria-hidden
          position="absolute"
          top={{ base: "20%", md: "10%" }}
          left={{ base: "-10%", md: "-6%" }}
          w={{ base: "320px", md: "520px" }}
          h={{ base: "320px", md: "520px" }}
          rounded="full"
          filter="blur(40px)"
          style={{ y: reduced ? 0 : yBack }}
          opacity={0.6}
          sx={{
            backgroundImage: `radial-gradient(${brand500} 0%, rgba(21,109,255,0.05) 60%)`,
          }}
        />
        <MotionDiv
          aria-hidden
          position="absolute"
          bottom={{ base: "10%", md: "8%" }}
          right={{ base: "-8%", md: "-4%" }}
          w={{ base: "240px", md: "380px" }}
          h={{ base: "240px", md: "380px" }}
          rounded="full"
          filter="blur(30px)"
          style={{ y: reduced ? 0 : yMid }}
          opacity={0.5}
          sx={{
            backgroundImage: "radial-gradient(rgba(128, 90, 213, 0.9) 0%, rgba(128,90,213,0.05) 60%)",
          }}
        />

        {/* Vignette */}
        <Box
          aria-hidden
          position="absolute"
          inset={0}
          bg="linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))"
          pointerEvents="none"
        />

        {/* Content */}
        <MotionDiv
          maxW="1100px"
          mx="auto"
          px={{ base: 4, md: 6 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ y: reduced ? 0 : yFront }}
        >
          <Heading
            as="h1"
            size="2xl"
            lineHeight={1.1}
            letterSpacing="-0.02em"
            bgGradient={`linear(to-r, ${brand400}, #A855F7)`}
            bgClip="text"
          >
            We build category-defining products in Web & AI/ML.
          </Heading>

          <Text mt={4} fontSize="xl" opacity={0.85} maxW="3xl">
            Strategy, design, and engineering for ambitious teams. From SaaS platforms to applied machine learning.
          </Text>

          <HStack mt={8} spacing={4}>
            <MagneticButton to="/contact">Start a Project</MagneticButton>
            <Button as={RouterLink} to="/projects/case-studies" size="lg" variant="ghost">
              View Work
            </Button>
          </HStack>
        </MotionDiv>

        {/* Scroll cue */}
        <MotionDiv
          position="absolute"
          left="50%"
          bottom="20px"
          transform="translateX(-50%)"
          color="whiteAlpha.700"
          display={{ base: "none", md: "block" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <MotionDiv
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Box as={FiChevronDown} boxSize={7} />
          </MotionDiv>
        </MotionDiv>
      </Box>
    </Box>
  );
}