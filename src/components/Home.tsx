
import { Mail } from "lucide-react";
import img from "../assets/img1.jpg"

const Home = () => {
    return(
        <div className="flex flex-col-reverse ml-2 md:flex-row justify-center items-center
        md:my-32 my-10">


            <div className="flex flex-col text-center md:text-left ">
            <h1 className="text-5xl md:text-6xl
            font-bold text=center md:text-lext
            mt-4 md:mt=0">HELLO! <br/>I'm
            <span className="text-orange-700"> Nelly Ariane GOUNOU</span></h1>

            <p className="my-4 text-md text-center md:text-left">Full stack web developper <br/>
            I'm a full stack developper with one year experience<br/> i'm workng with React JS and node Js 
            <br/> conctact me here if my services are needed</p>
        <a href="" className="btn bg-orange-700 hover:bg-orange-800 border-none
        hover:shadow-orange-600/60 transition-all
         md:w-fit">  contact me
            <Mail className="w-5 h-5" />
        </a>
        
        </div>
        <div>
            
           <img src={img} alt="mypicture" className="w-95 h-95 object-cover
           border-8 border-orange-700 shadow-2xl shadow-orange-700/80"
           style={{
            borderRadius : "50% 50%"
           }}
           
           />
        </div></div> 
    )
}

export default Home