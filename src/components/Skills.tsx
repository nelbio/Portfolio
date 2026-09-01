import Title from "./Title";
import {
  Database,
  Code2,
  Server,
  Palette,
  Layout,
  Smartphone,
  Zap,
  Shield,
  GitBranch,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const skillsData = [
    { 
      name: "PostgreSQL", 
      value: 95,
      icon: Database,
      category: "Database",
      color: "from-blue-500 to-cyan-400"
    },
    { 
      name: "HTML", 
      value: 90,
      icon: Code2,
      category: "Frontend",
      color: "from-orange-500 to-red-400"
    },
    { 
      name: "Node.js", 
      value: 80,
      icon: Server,
      category: "Backend",
      color: "from-green-500 to-emerald-400"
    },
    { 
      name: "CSS", 
      value: 75,
      icon: Palette,
      category: "Frontend",
      color: "from-blue-400 to-purple-400"
    },
    { 
      name: "React", 
      value: 60,
      icon: Layout,
      category: "Frontend",
      color: "from-cyan-500 to-blue-400"
    },
    { 
      name: "React Native", 
      value: 50,
      icon: Smartphone,
      category: "Mobile",
      color: "from-indigo-500 to-purple-400"
    },
  ];

  // Additional skills for visual richness
  const additionalSkills = [
    { name: "REST APIs", icon: Zap },
    { name: "Git", icon: GitBranch },
    { name: "Express.js", icon: Server },
    { name: "Firebase", icon: Cloud },
    { name: "TypeScript", icon: Shield },
  ];

  return (
    <section 
      className="relative bg-base-200 px-6 py-16 md:px-12 lg:px-24 overflow-hidden"
      id="Skills"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Decorative Orange Blob */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Label */}
        <div className="flex items-center gap-4 text-sm font-mono text-orange-600 tracking-widest mb-6">
          <span className="w-8 h-px bg-orange-400/60" />
          02 — SKILLS
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Technical
              </span>
              <br />
              Proficiency
            </h2>
            
            <p className="text-base-content/70 text-sm leading-relaxed">
              My expertise spans across the full development stack, 
              with a focus on creating seamless digital experiences 
              from database to interface.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {additionalSkills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-base-100/70 border border-base-300/50 rounded-full text-base-content/70 hover:border-orange-400/40 hover:bg-base-100 transition-all duration-200"
                >
                  <skill.icon size={12} className="text-orange-400" />
                  {skill.name}
                </span>
              ))}
            </div>

            {/* Stat Card */}
            <div className="bg-base-100/50 backdrop-blur-sm border border-base-300/60 rounded-xl p-5 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-orange-500">6+</p>
                  <p className="text-xs text-base-content/60">Core Technologies</p>
                </div>
                <div className="h-8 w-px bg-base-300" />
                <div>
                  <p className="text-2xl font-bold text-orange-500">3</p>
                  <p className="text-xs text-base-content/60">Development Areas</p>
                </div>
                <div className="h-8 w-px bg-base-300" />
                <div>
                  <p className="text-2xl font-bold text-orange-500">100%</p>
                  <p className="text-xs text-base-content/60">Commitment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills List */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
              {skillsData.map((skill, index) => (
                <div 
                  key={index} 
                  className="group relative"
                >
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-10`}>
                        <skill.icon size={16} className="text-orange-500" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-base-content/90">
                          {skill.name}
                        </span>
                        <span className="ml-2 text-xs font-mono text-base-content/40">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-orange-500/80">
                      {skill.value}%
                    </span>
                  </div>

                  {/* Progress Bar with Gradient */}
                  <div className="relative h-2 w-full bg-base-300/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.value}%`,
                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-white/20 blur-sm" />
                    </div>
                  </div>

                  {/* Animated Dots */}
                  <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(3)].map((_, i) => (
                      <span 
                        key={i}
                        className="w-1 h-1 rounded-full bg-orange-400/40"
                        style={{ 
                          animation: `pulse-dot 1.5s ease-in-out ${i * 0.3}s infinite`
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-10 flex items-center gap-4 text-xs text-base-content/40 border-t border-base-300/40 pt-6">
              <span className="flex items-center gap-1.5">
                <Zap size={12} className="text-orange-400" />
                Continuously learning
              </span>
              <span className="w-px h-4 bg-base-300/40" />
              <span>Always growing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* Progress bar animation on scroll */
        .group .h-full {
          width: var(--skill-value);
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .group .h-full {
            transition: none !important;
          }
          .group .absolute.opacity-0 {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;