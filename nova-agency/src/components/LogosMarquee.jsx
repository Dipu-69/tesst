import React from "react";
import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";

// Color logos (SVGs/PNGs) that load reliably
const logos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", alt: "Google" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Shopify_logo_2018.svg", alt: "Shopify" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Stripe_Logo%2C_revised_2016.svg", alt: "Stripe" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", alt: "Spotify" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg", alt: "Netflix" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Atlassian-logo.svg", alt: "Atlassian" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Slack_Mark.svg", alt: "Slack" },
];

export default function LogosMarquee() {
  return (
    <Box
      py={10}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      mt={8}
      bg="linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))"
    >
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        // soft edge fade for premium feel
        sx={{
          maskImage:
            "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)",
        }}
      >
        <Text fontSize="sm" opacity={0.75} mb={4}>
          Trusted by teams at
        </Text>

        {/* Static, balanced layout that wraps nicely. No grayscale. */}
        <Wrap spacing={{ base: 10, md: 14 }} align="center">
          {logos.map((l) => (
            <WrapItem key={l.alt}>
              <Flex align="center" justify="center" h="28px">
                <Image
                  src={l.src}
                  alt={l.alt}
                  h="24px"
                  objectFit="contain"
                  loading="lazy"
                  // fallback if any remote logo fails
                  fallbackSrc="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='24' viewBox='0 0 120 24'><rect width='120' height='24' fill='%23222228'/></svg>"
                  transition="transform 0.2s ease, opacity 0.2s ease"
                  _hover={{ transform: "translateY(-2px)", opacity: 1 }}
                />
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}