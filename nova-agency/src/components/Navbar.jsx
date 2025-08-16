import { Box, Flex, HStack, Link, Button, Icon, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaBolt } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects/ongoing", label: "Ongoing" },
  { href: "/projects/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const bg = useColorModeValue("blackAlpha.700", "blackAlpha.700");
  return (
    <Box position="sticky" top={0} zIndex={50} backdropFilter="saturate(180%) blur(8px)" bg={bg} borderBottom="1px solid" borderColor="whiteAlpha.200">
      <Flex maxW="1200px" mx="auto" h="68px" px={{ base: 4, md: 6 }} align="center" justify="space-between">
        <HStack spacing={3}>
          <Icon as={FaBolt} color="brand.400" />
          <Link as={RouterLink} to="/" fontWeight="800" fontSize="lg" _hover={{ textDecoration: "none" }}>
            NovaForge
          </Link>
        </HStack>
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {links.map((l) => (
            <Link key={l.href} as={RouterLink} to={l.href} _hover={{ color: "brand.200" }}>
              {l.label}
            </Link>
          ))}
        </HStack>
        <HStack display={{ base: "none", md: "flex" }}>
          <Button as={RouterLink} to="/contact" size="sm">Start a Project</Button>
        </HStack>
      </Flex>
    </Box>
  );
}