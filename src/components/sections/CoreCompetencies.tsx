import { Globe, Award, Rocket } from "lucide-react";
import type { ReactNode } from "react";

interface Competency {
  icon: ReactNode;
  title: string;
  description: string;
}

const competencies: Competency[] = [
  {
    icon: <Globe size={28} />,
    title: "Infrastructure Knowledge",
    description:
      "Deep Canadian AI infrastructure knowledge and relationships.",
  },
  {
    icon: <Award size={28} />,
    title: "Top-Ranked Experience",
    description:
      "Direct experience leading Canada's top-ranked AI cluster (Top500).",
  },
  {
    icon: <Rocket size={28} />,
    title: "Executable Projects",
    description:
      "Ability to translate demand signals into executable projects for AI-native firms and labs.",
  },
];

export default function CoreCompetencies() {
  return (
    <section
      className="py-24 lg:py-32 bg-surface-container-low relative"
      id="services"
      aria-labelledby="competencies-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20 max-w-3xl">
          <h2
            id="competencies-heading"
            className="font-headline font-bold text-4xl md:text-5xl tracking-tight text-on-background mb-6"
          >
            Core Competencies
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Access to AI-native firms and labs seeking GPU clusters, with the
            ability to translate demand signals into executable projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {competencies.map((item) => (
            <article
              key={item.title}
              className="
                bg-surface-variant/40 backdrop-blur-xl
                p-8 lg:p-10 rounded-xl
                border border-outline-variant/10
                shadow-[0_20px_40px_rgba(0,0,0,0.2)]
                hover:bg-surface-variant/60
                transition-all duration-500
                flex flex-col h-full group
              "
            >
              {/* Icon container */}
              <div
                className="
                  h-14 w-14 rounded-lg
                  bg-surface-container flex items-center justify-center
                  mb-8
                  border border-outline-variant/10
                  group-hover:border-primary-container/30
                  transition-colors duration-500
                "
              >
                <span className="text-primary-container">{item.icon}</span>
              </div>

              <h3 className="font-headline font-bold text-2xl text-on-background mb-4">
                {item.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed flex-grow">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
