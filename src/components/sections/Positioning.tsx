import { Cpu, Zap, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

interface Audience {
  icon: ReactNode;
  label: string;
  bullets: string[];
}

const audiences: Audience[] = [
  {
    icon: <Cpu size={24} />,
    label: "AI Natives",
    bullets: [
      "Secure scalable GPU capacity",
      "Scout power-ready sites",
      "Structure long-term offtake",
    ],
  },
  {
    icon: <Zap size={24} />,
    label: "Providers",
    bullets: [
      "Find qualified AI offtakers",
      "Structure bankable contracts",
      "Accelerate deployment timelines",
    ],
  },
  {
    icon: <TrendingUp size={24} />,
    label: "Neo-Clouds & LPS",
    bullets: [
      "Originate qualified opportunities",
      "Match with AI-native demand",
      "De-risk investment decisions",
    ],
  },
];

export default function Positioning() {
  return (
    <section
      className="py-20 lg:py-28 bg-surface-container-low relative overflow-hidden"
      aria-labelledby="positioning-heading"
    >
      {/* Subtle top divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(80,143,248,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Positioning statement */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <h2
            id="positioning-heading"
            className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-on-background mb-6"
          >
            The Bridge Between AI Demand and Infrastructure Supply
          </h2>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-3xl mx-auto mb-6">
            SABA Management Consulting operates at the intersection of AI-native
            demand and AI infrastructure supply. We help AI natives, labs, and
            enterprises secure GPU capacity; support LPS owners
            in finding the right offtakers and infrastructure partners; and connect
            neo-cloud operators and LPS into high-conviction, executable AI
            infrastructure opportunities across North America.
          </p>
          <p className="text-sm md:text-base text-on-surface-variant/70 italic max-w-2xl mx-auto">
            We maintain an active view of where LPS owners are
            seeking partners—and where AI-native, lab, and enterprise demand is
            emerging—for AI infrastructure across North America.
          </p>
        </div>

        {/* 3-Column Ecosystem Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((aud) => (
            <div
              key={aud.label}
              className="
                bg-surface-variant/30 backdrop-blur-xl
                p-8 rounded-xl
                border border-outline-variant/10
                hover:border-primary-container/20
                shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                transition-all duration-500
                text-center
              "
            >
              <div className="h-12 w-12 rounded-lg bg-surface-container flex items-center justify-center mx-auto mb-5 border border-outline-variant/10">
                <span className="text-primary-container">{aud.icon}</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-on-background mb-4">
                {aud.label}
              </h3>
              <ul className="space-y-2 text-left">
                {aud.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-on-surface-variant text-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-container/60 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
