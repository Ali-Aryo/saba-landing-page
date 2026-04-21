import Image from "next/image";

interface Talk {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const talks: Talk[] = [
  {
    src: "/images/talk1.png",
    alt: "Talk 1 — conference presentation",
    title: "Talk 1",
    description: "Exploring the frontier of AI infrastructure strategy.",
  },
  {
    src: "/images/talk2.png",
    alt: "Talk 2 — conference presentation",
    title: "Talk 2",
    description: "Translating demand signals into executable projects.",
  },
  {
    src: "/images/talk3.png",
    alt: "Talk 3 — conference presentation",
    title: "Talk 3",
    description: "Navigating power-ready opportunities across Canada.",
  },
];

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

        {/* 3-Column Talk Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {talks.map((talk) => (
            <article
              key={talk.title}
              className="relative group overflow-hidden rounded-xl border border-outline-variant/10 min-h-[350px]"
            >
              <Image
                src={talk.src}
                alt={talk.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-surface-lowest/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 lg:p-8">
                <h3 className="font-headline font-bold text-xl lg:text-2xl text-on-background mb-2">
                  {talk.title}
                </h3>
                <p className="text-on-surface-variant text-sm lg:text-base">
                  {talk.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
