import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

const MotionSection = chakra(motion.section, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Section({ children, delay = 0 }) {
  return (
    <MotionSection
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
      py={{ base: 12, md: 20 }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </MotionSection>
  );
}