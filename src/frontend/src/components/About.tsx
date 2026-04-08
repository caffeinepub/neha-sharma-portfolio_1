import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-24"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <SectionHeader heading="About Neha" />
        <p className="font-semibold mb-6" style={{ color: "#FF4D8D" }}>
          Beauty • Fashion • Lifestyle Creator
        </p>
        <p className="text-lg leading-relaxed" style={{ color: "#555555" }}>
          Neha is a beauty and lifestyle content creator focused on relatable,
          authentic, and confidence-driven content. She creates engaging reels,
          skincare reviews, fashion styling videos, and positive lifestyle
          content that connects with a young, highly engaged audience. Her
          content blends aesthetics with honesty — making her audience trust her
          recommendations.
        </p>
      </div>
    </section>
  );
}
