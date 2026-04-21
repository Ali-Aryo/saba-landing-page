import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-lowest/50 to-surface-lowest z-10" />

        {/* Grid / Tech pattern via CSS */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(80,143,248,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(80,143,248,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(80,143,248,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-8">
          <h1
            id="hero-heading"
            className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.05] mb-6 text-on-background"
          >
            Unlocking Intelligence.
            <br />
            <span
              className="text-primary-container"
              style={{
                filter: "drop-shadow(0 0 30px rgba(80,143,248,0.3))",
              }}
            >
              Scaling Impact.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
            We architecture strategic AI advantages for enterprise. Moving
            beyond conceptual frameworks into operational reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button variant="primary">
                Explore Consulting
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#insights">
              <Button variant="secondary">View Case Studies</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-container-low to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  );
}
