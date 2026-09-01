import img from "../assets/img2.jpg";
import Title from "./Title";
import {
  Code2,
  Monitor,
  Smartphone,
  Server,
  MapPin,
  Briefcase,
  Languages,
  Sparkles,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      className="relative bg-base-200 px-6 py-16 md:px-12 lg:px-24 overflow-hidden"
      id="About"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Label */}
        <div className="flex items-center gap-4 text-sm font-mono text-orange-600 tracking-widest mb-6">
          <span className="w-8 h-px bg-orange-400/60" />
          01 — ABOUT
        </div>

        {/* Desktop Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content (60%) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              Code that turns ideas
              <br />
              into{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent animate-gradient">
                experiences.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-base-content/80 max-w-xl leading-relaxed">
              I&apos;m <span className="font-semibold text-orange-600">Nelly Ariane</span>,
              a Full-Stack Web & Mobile Developer crafting modern, scalable
              digital solutions. I bridge design and engineering to turn
              complex problems into intuitive, high-performance applications.
            </p>

            {/* CTA */}
            <div className="inline-block group">
              <span className="flex items-center gap-3 text-sm font-medium tracking-wide text-orange-600 border-b-2 border-orange-400/40 pb-1 transition-colors hover:border-orange-500">
                Let&apos;s build something useful.
                <Sparkles size={16} className="text-orange-400 group-hover:rotate-12 transition-transform" />
              </span>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {/* Web */}
              <div className="group relative bg-base-100/50 backdrop-blur-sm p-5 rounded-xl border border-base-300/60 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-orange-400/70">01</span>
                  <Monitor size={18} className="text-orange-500" />
                </div>
                <h4 className="font-semibold text-sm tracking-wide">WEB</h4>
                <p className="text-xs text-base-content/70 mt-1 leading-relaxed">
                  React · JavaScript · Responsive UI
                </p>
              </div>

              {/* Mobile */}
              <div className="group relative bg-base-100/50 backdrop-blur-sm p-5 rounded-xl border border-base-300/60 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-orange-400/70">02</span>
                  <Smartphone size={18} className="text-orange-500" />
                </div>
                <h4 className="font-semibold text-sm tracking-wide">MOBILE</h4>
                <p className="text-xs text-base-content/70 mt-1 leading-relaxed">
                  React Native · Expo · Mobile UX
                </p>
              </div>

              {/* Backend */}
              <div className="group relative bg-base-100/50 backdrop-blur-sm p-5 rounded-xl border border-base-300/60 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-orange-400/70">03</span>
                  <Server size={18} className="text-orange-500" />
                </div>
                <h4 className="font-semibold text-sm tracking-wide">BACKEND</h4>
                <p className="text-xs text-base-content/70 mt-1 leading-relaxed">
                  Node.js · Express · PostgreSQL · REST
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "React Native", "Node.js", "Express.js", "PostgreSQL", "REST APIs"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 text-xs font-mono font-medium bg-base-100/70 border border-base-300/50 rounded-full text-base-content/80 hover:border-orange-400/40 hover:bg-base-100 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* Profile Details */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-base-content/70 border-t border-base-300/40">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-400" />
                <span>Based in Cameroon</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-orange-400" />
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages size={16} className="text-orange-400" />
                <span>French / English</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image (40%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Glow Behind Image */}
              <div className="absolute -inset-4 bg-orange-500/20 blur-3xl rounded-full animate-pulse-glow" />

              {/* Asymmetric Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/10 border border-orange-400/10">
                <img
                  src={img}
                  alt="Nelly Ariane"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.04)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                {/* Floating Tech Badge */}
                <div className="absolute -bottom-3 -right-3 bg-base-100/80 backdrop-blur-md border border-orange-400/20 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs font-mono text-orange-600">
                  <Code2 size={14} />
                  <span>full-stack</span>
                </div>

                {/* Decorative Code Element */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-orange-400/40 opacity-70 leading-relaxed">
                  <span className="block">{`<experience />`}</span>
                  <span className="block">{`{ code: "clean" }`}</span>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-6 left-6 w-12 h-px bg-orange-400/30 rotate-12" />
                <div className="absolute top-1/3 right-4 w-8 h-px bg-orange-400/20 -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations - Inline styles for Tailwind compatibility */}
      <style>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-gradient,
          .animate-pulse-glow,
          .group:hover,
          img:hover {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;