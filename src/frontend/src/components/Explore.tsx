import {
  BarChart2,
  BookOpen,
  Briefcase,
  FileText,
  Flame,
  Handshake,
  Heart,
  HeartHandshake,
  Mail,
  Star,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const exploreLinks = [
  { label: "About", href: "#about", icon: User, desc: "Who I am" },
  { label: "Metrics", href: "#metrics", icon: BarChart2, desc: "My numbers" },
  {
    label: "Performance",
    href: "#performance",
    icon: TrendingUp,
    desc: "Growth stats",
  },
  {
    label: "Viral Campaign",
    href: "#viral-highlight",
    icon: Flame,
    desc: "Top campaigns",
  },
  {
    label: "Media Kit",
    href: "#media-kit",
    icon: FileText,
    desc: "Download my kit",
  },
  {
    label: "Collaborations",
    href: "#collaborations",
    icon: Handshake,
    desc: "Brand partners",
  },
  { label: "Stories", href: "#stories", icon: BookOpen, desc: "IG highlights" },
  {
    label: "Why Brands",
    href: "#why-brands",
    icon: Star,
    desc: "Why work with me",
  },
  {
    label: "Audience",
    href: "#audience",
    icon: Users,
    desc: "My audience",
  },
  {
    label: "Services",
    href: "#services",
    icon: Briefcase,
    desc: "Work with me",
  },
  {
    label: "Fan Love",
    href: "#fan-love",
    icon: Heart,
    desc: "Fan videos",
  },
  {
    label: "Love & Support",
    href: "#love-support",
    icon: HeartHandshake,
    desc: "Special moments",
  },
  { label: "Contact", href: "#contact", icon: Mail, desc: "Get in touch" },
];

export function Explore() {
  return (
    <section
      id="explore"
      className="py-20 md:py-24"
      style={{
        background: "linear-gradient(135deg, #FDF1F4 0%, #F2E3D8 100%)",
      }}
      data-ocid="explore.section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#D8BFA3" }}
          >
            Quick Navigation
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: "#2B2B2B" }}
          >
            Explore
          </h2>
          <p className="text-sm" style={{ color: "#7A7A7A" }}>
            Jump to any section
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {exploreLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px rgba(244,191,201,0.45)",
                }}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-transparent hover:border-[#F4BFC9] transition-all duration-200 cursor-pointer group"
                data-ocid={`explore.item.${i + 1}`}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#FDF1F4" }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-200"
                    style={{ color: "#F4BFC9" }}
                  />
                </div>
                <div>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#2B2B2B" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#7A7A7A" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
