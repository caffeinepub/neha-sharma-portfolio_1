import { Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { About } from "./components/About";
import { AudienceActivity } from "./components/AudienceActivity";
import { Collaborations } from "./components/Collaborations";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LoveSupport } from "./components/LoveSupport";
import { MediaKit } from "./components/MediaKit";
import { Metrics } from "./components/Metrics";
import { Performance } from "./components/Performance";
import { Services } from "./components/Services";
import { Stories } from "./components/Stories";
import { Testimonials } from "./components/Testimonials";
import { ViralHighlight } from "./components/ViralHighlight";
import { WhyBrands } from "./components/WhyBrands";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Metrics />
        <ViralHighlight />
        <Performance />
        <MediaKit />
        <Collaborations />
        <Stories />
        <WhyBrands />
        <AudienceActivity />
        <Testimonials />
        <Services />
        <LoveSupport />
        <Contact />
      </main>
      <Footer />

      {/* Floating Work With Me button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-white font-bold text-sm shadow-2xl transition-shadow duration-200"
        style={{
          background: "linear-gradient(135deg, #f97316, #ec4899)",
          boxShadow:
            "0 8px 32px rgba(236,72,153,0.45), 0 2px 8px rgba(0,0,0,0.2)",
        }}
        data-ocid="floating.contact.button"
      >
        <Sparkles className="w-4 h-4" />
        Work With Me
        <Mail className="w-4 h-4" />
      </motion.a>
    </div>
  );
}
