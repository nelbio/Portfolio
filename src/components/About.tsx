import img from "../assets/img2.jpg";
import Title from "./Title";
import { Code2, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="bg-base-300 p-8 md:mb-32" id="About">
      <Title title="About Me" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 mt-10">
        
        {/* Profile Image */}
        <div className="relative">
          <img
            src={img}
            alt="Nelly Ariane"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-orange-700 shadow-2xl shadow-orange-700/80"
          />
          <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-orange-700 rounded-full blur-2xl"></div>
        </div>

        {/* About Content */}
        <div className="flex flex-col text-center md:text-left max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-700">
            Full-Stack Web & Mobile Developer
          </h2>

          <p className="text-lg text-base-content/90 leading-relaxed mb-8">
            Hello, I'm <span className="font-bold text-orange-700">Nelly Ariane</span>,
            a passionate Full-Stack Developer with experience building modern,
            responsive, and scalable web and mobile applications. I specialize
            in React, React Native, Node.js, Express.js, PostgreSQL, and REST
            APIs. I enjoy transforming ideas into efficient digital solutions
            and continuously improving my skills by working on real-world
            projects that solve practical problems.
          </p>

          <div className="space-y-6">
            {/* Expertise */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl bg-base-100/50 hover:bg-base-100 transition shadow-sm">
              <div className="p-3 bg-orange-700/10 rounded-xl">
                <Code2 className="text-orange-700" size={28} />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Full-Stack Development
                </h3>
                <p className="text-sm text-base-content/70">
                  I build complete web and mobile applications using React,
                  React Native, Node.js, Express.js, PostgreSQL, and modern UI
                  frameworks while focusing on clean code and great user
                  experiences.
                </p>
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 rounded-2xl bg-base-100/50 hover:bg-base-100 transition shadow-sm">
              <div className="p-3 bg-orange-700/10 rounded-xl">
                <Globe className="text-orange-700" size={28} />
              </div>

              <div className="w-full">
                <h3 className="font-bold text-lg mb-4">Languages</h3>

                <div className="mb-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span>French</span>
                    <span>80%</span>
                  </div>
                  <progress
                    className="progress progress-warning w-full"
                    value="80"
                    max="100"
                  ></progress>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium">
                    <span>English</span>
                    <span>50%</span>
                  </div>
                  <progress
                    className="progress progress-warning w-full"
                    value="50"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;