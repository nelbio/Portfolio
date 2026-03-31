import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
// Ajoute tes autres imports ici (img5, img6...)

const Projects = () => {
  const projectsList = [
    { id: 1, title: "MBOA EAT", img: img3 },
    { id: 2, title: "KingBox Cloud", img: img4 },
    { id: 3, title: "Smart Waste System", img: img3 }, // Exemple avec img3
    { id: 4, title: "Speed Tester", img: img4 },      // Exemple avec img4
  ];

  return (
    <div id="projects" className="bg-base-300 p-10 md:px-20 min-h-screen">
      {/* Titre de la section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          My <span className="text-orange-700">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-orange-700 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsList.map((project) => (
          <div 
            key={project.id} 
            className="group relative overflow-hidden rounded-xl bg-base-100 shadow-lg hover:shadow-orange-700/20 transition-all duration-300"
          >
            {/* Conteneur Image avec zoom au survol */}
            <div className="h-64 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay pour le Titre (apparaît au survol ou reste fixe en bas) */}
            <div className="p-4 bg-base-100 border-t border-base-200">
              <h3 className="text-xl font-bold text-center group-hover:text-orange-700 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Optionnel : Un bouton ou lien invisible sur toute la carte */}
            <a href="#" className="absolute inset-0 z-10"></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
