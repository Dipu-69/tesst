import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ongoing from "./pages/projects/Ongoing";
import CaseStudies from "./pages/projects/CaseStudies";
import ProjectDetail from "./pages/projects/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Box>
      <Navbar />
      <ScrollToTop />
      <Box as="main" minH="70vh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/ongoing" element={<Ongoing />} />
          <Route path="/projects/case-studies" element={<CaseStudies />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}