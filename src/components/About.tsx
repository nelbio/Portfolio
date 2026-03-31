import img from "../assets/img2.jpg";
import Title from "./Title";
import { Paintbrush, Wallpaper } from "lucide-react";

const About = () => {
  return (
    <div className="bg-base-300 p-8 md:mb-32" >
      <Title title="About Me" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 mt-10">
        
        {/* Section Image */}
        <div className="relative">
          <img
            src={img}
            alt="Nelly Ariane"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-orange-700 shadow-2xl shadow-orange-700/80"
          />
          {/* Un petit élément décoratif optionnel derrière */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-orange-700 rounded-full blur-2xl"></div>
        </div>

        {/* Texte et Compétences */}
        <div className="flex flex-col text-center md:text-left max-w-2xl">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-700">
            Software Engineering Intern
          </h2>

          <p className="text-lg text-base-content/90 leading-relaxed mb-6">
            Hello, I'm <span className="font-bold text-orange-700">Nelly Ariane</span>, 
            a passionate Software Engineering intern focused on building 
            modern and responsive web applications.
          </p>

          {/* Points d'intérêts stylisés */}
          <div className="space-y-6">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl bg-base-100/50 hover:bg-base-100 transition-colors shadow-sm">
              <div className="p-3 bg-orange-700/10 rounded-xl">
                <Paintbrush className="text-orange-700" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Frontend Specialist</h3>
                <p className="text-sm text-base-content/70">
                  I'm specialized in React development and enjoy creating clean, user-friendly interfaces with Tailwind CSS.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl bg-base-100/50 hover:bg-base-100 transition-colors shadow-sm">
              <div className="p-3 bg-orange-700/10 rounded-xl">
                <Wallpaper className="text-orange-700" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Full-Stack Growth</h3>
                <p className="text-sm text-base-content/70">
                  Strengthening my skills through real-world projects and performance-based systems.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;