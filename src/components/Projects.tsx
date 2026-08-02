import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";

import Title from "./Title";


const Projects = () => {
  const projectsList = [
    { id: 1, title: "Restaurant App", img: img3, link: "#" },
    { id: 2, title: "Weather App", img: img4, link: "#" },
    { id: 3, title: "intern management", img: img5, link: "#" },
    { id: 4, title: "Speed Tester", img: img6, link: "#" }, 
    { id: 5, title: "Daily Report App", img: img7, link: "#" }, 
    { id: 6, title: "Quote Generator", img: img8, link: "#" },
    { id: 7, title: "Smart Waste Management ", img: img9, link: "#" },
    { id: 8, title: "BRN gas Platform", img: img10, link: "#" },
    { id: 9, title: "Admin Management System", img: img11, link: "#" },
  ];

  return (
    <div id="Projects" className="bg-base-300 p-10 md:px-20 min-h-screen">
      
      <div className="text-center mb-16">
        <Title title="My Projects" />
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project) => (
          <div 
            key={project.id} 
            className="group relative overflow-hidden rounded-xl bg-base-100 shadow-lg hover:shadow-orange-700/20 transition-all duration-300"
          >
            {/* Conteneur Image */}
            <div className="h-64 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4 bg-base-100 border-t border-base-200">
              <h3 className="text-xl font-bold text-center group-hover:text-orange-700 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Lien avec href personnalisé pour chaque projet */}
            <a 
              href={project.link} 
              className="absolute inset-0 z-10"
              target="_blank" 
              rel="noopener noreferrer"
            ></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;