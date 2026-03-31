import Title from "./Title"
const Skills = () => {
  
  const skillsData = [
    { name: "HTML", value: 90 },      
    { name: "CSS", value: 80 },
    { name: "JAVASCRIPT", value: 60 },
    { name: "REACT", value: 50 },
    
  ];

  return (
   
    <div className="bg-base-300 min-h-screen p-10 flex justify-center items-center" id="Skills">
      <div className="w-full max-w-4xl space-y-12 md:mb-32 ">
        
        < Title title={"My skills"}  />

        {/* LISTE DES COMPÉTENCES */}
        <div className="space-y-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="space-y-5">
              
              {/* Le nom de la compétence (en majuscules, gris clair) */}
              <p className="text-sm font-semibold text-base-content/70 tracking-widest uppercase">
                {skill.name}
              </p>

              {/* BARRE DE PROGRESSION daisyUI */}
              <progress 
  className="progress w-full h-4 [&::-webkit-progress-value]:bg-orange-700 [&::-moz-progress-bar]:bg-orange-700 bg-gray-100" 
  value={skill.value} 
  max="100">
</progress>

              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;