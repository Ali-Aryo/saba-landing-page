import { Download } from "lucide-react";
import Image from "next/image";

export default function GlobalInsights() {
  return (
    <section
      className="py-24 lg:py-32 relative bg-surface-lowest"
      id="insights"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-8">
          <div className="max-w-2xl">
            <h2
              id="insights-heading"
              className="font-headline font-bold text-4xl md:text-5xl tracking-tight text-on-background mb-4"
            >
              Global Insights
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Thought leadership and operational truth from the frontlines of
              technical evolution.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[auto_auto] gap-6">
          {/* Large Feature (Keynote) – spans 2 cols and 2 rows */}
          <article className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl border border-outline-variant/10 min-h-[400px]">
            <Image
              src="/images/keynote.webp"
              alt="Tech keynote speaker on a dark stage with cool blue spotlights addressing an audience"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-surface-lowest/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 lg:p-8">
              <span className="inline-block px-3 py-1 bg-surface-variant/80 backdrop-blur-md rounded text-xs font-medium text-primary-container mb-4">
                Keynote
              </span>
              <h3 className="font-headline font-bold text-2xl lg:text-3xl text-on-background mb-2">
                The Architecture of Tomorrow
              </h3>
              <p className="text-on-surface-variant text-sm lg:text-base">
                Navigating the complexities of rapid deployment in legacy
                environments.
              </p>
            </div>
          </article>

          {/* Secondary Top (Masterclass) */}
          <article className="md:col-span-2 relative group overflow-hidden rounded-xl border border-outline-variant/10 min-h-[250px]">
            <Image
              src="/images/masterclass.webp"
              alt="Collaborative meeting in a glass-walled boardroom with professionals analyzing technical diagrams"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-surface-lowest/40 to-transparent" />
            <div className="absolute top-0 right-0 p-6">
              <span className="text-xs font-medium text-on-surface-variant/60 uppercase tracking-widest">
                Masterclass
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-block px-3 py-1 bg-surface-variant/80 backdrop-blur-md rounded text-xs font-medium text-primary-container mb-3">
                Masterclass
              </span>
              <h3 className="font-headline font-bold text-xl text-on-background">
                Operationalizing LLMs
              </h3>
            </div>
          </article>

          {/* Secondary Bottom (Whitepaper) */}
          <article className="md:col-span-2 relative group overflow-hidden rounded-xl border border-outline-variant/10 min-h-[250px] bg-surface-container-low flex items-center p-6 lg:p-8">
            <div className="max-w-md">
              <h3 className="font-headline font-bold text-xl lg:text-2xl text-on-background mb-4">
                Whitepaper: Synthetic Data Structures
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                A deep dive into reducing bias and increasing model efficacy
                through structured synthetic inputs.
              </p>
              <a
                href="#"
                className="text-primary-container text-sm font-medium flex items-center gap-2 hover:text-surface-tint transition-colors group/link"
              >
                Download PDF{" "}
                <Download
                  size={16}
                  className="group-hover/link:translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
