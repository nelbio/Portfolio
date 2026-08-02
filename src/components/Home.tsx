import { Mail, Code, ArrowDown } from "lucide-react";
import img from "../assets/img1.png";

// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden" id="Home">
            {/* Animated background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/5 rounded-full blur-3xl"></div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 px-6 max-w-6xl mx-auto relative z-10">
                
                {/* Left Content */}
                <div className="flex flex-col text-center md:text-left max-w-2xl animate-fade-in-up">
                    {/* Small badge */}
                    <div className="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur-sm text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4 mx-auto md:mx-0 w-fit border border-orange-200/50">
                        <Code className="w-4 h-4" />
                        <span>Available for freelance work</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                        HELLO! <br/>
                        I'm
                        <span className="text-orange-700 relative inline-block ml-2">
                            Nelly Ariane Gounou
                            <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-700/30 rounded-full"></span>
                        </span>
                    </h1>

                    <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                        <span className="w-12 h-0.5 bg-orange-700/40 hidden md:block"></span>
                        <p className="text-lg text-gray-600 font-medium">Full Stack Web Developer</p>
                    </div>

                    <p className="text-md md:text-lg text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
                        Crafting beautiful and functional web applications with 
                        <span className="text-orange-700 font-semibold"> React.js</span> and 
                        <span className="text-orange-700 font-semibold"> Node.js</span>. 
                        <br className="hidden md:block"/>
                        I turn ideas into seamless digital experiences.
                    </p>

                    {/* Key stats */}
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start mb-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-orange-700">1+</div>
                            <div className="text-sm text-gray-500">Years Experience</div>
                        </div>
                        <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-orange-700">10+</div>
                            <div className="text-sm text-gray-500">Projects Completed</div>
                        </div>
                        <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-orange-700">100%</div>
                            <div className="text-sm text-gray-500">Client Satisfaction</div>
                        </div>
                    </div>

                    {/* Buttons group */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a href="mailto:nelliprincesse@gmail.com" 
                           className="btn bg-orange-700 hover:bg-orange-800 text-white px-8 py-3 rounded-full 
                                  flex items-center gap-2 shadow-lg hover:shadow-orange-600/40 
                                  transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center">
                            <Mail className="w-5 h-5" />
                            Contact Me
                        </a>
                        
                        <a href="#Projects" 
                           className="px-8 py-3 rounded-full border-2 border-orange-700 text-orange-700 
                                  hover:bg-orange-700 hover:text-white transition-all duration-300 
                                  transform hover:scale-105 w-full sm:w-auto text-center font-medium">
                            View My Work
                        </a>
                    </div>

                    {/* Social links 
                    <div className="flex gap-4 justify-center md:justify-start mt-6">
                        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 
                                            text-gray-600 hover:text-orange-700 transition-all duration-300 
                                            hover:scale-110 hover:shadow-md">
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 
                                            text-gray-600 hover:text-orange-700 transition-all duration-300 
                                            hover:scale-110 hover:shadow-md">
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 
                                            text-gray-600 hover:text-orange-700 transition-all duration-300 
                                            hover:scale-110 hover:shadow-md">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                    </div>*/}
                </div>

                {/* Right Image */}
                <div className="relative group">
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-orange-700/20 
                                  animate-spin-slow group-hover:border-orange-700/40 
                                  transition-all duration-500" 
                         style={{ width: '340px', height: '340px', top: '-10px', left: '-10px' }}>
                    </div>
                    
                    {/* Second ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-orange-400/10 
                                  animate-spin-slow-reverse group-hover:border-orange-400/30 
                                  transition-all duration-500"
                         style={{ width: '380px', height: '380px', top: '-30px', left: '-30px' }}>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-700/10 
                                  to-transparent blur-2xl group-hover:from-orange-700/20 
                                  transition-all duration-500"
                         style={{ width: '320px', height: '320px', top: '0', left: '0' }}>
                    </div>

                    <img src={img} alt="Nelly Ariane Gounou" 
                         className="w-80 h-80 md:w-96 md:h-96 object-cover
                                border-8 border-orange-700 shadow-2xl shadow-orange-700/30
                                relative z-10 transition-all duration-500
                                group-hover:shadow-orange-700/50 group-hover:scale-105
                                group-hover:border-orange-500"
                         style={{ borderRadius: '50% 50%' }}
                    />
                </div>
            </div>

            {/* Scroll down indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-orange-700 transition-colors cursor-pointer">
                    <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
                    <ArrowDown className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}

export default Home;