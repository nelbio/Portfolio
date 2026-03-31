import { ChessQueen } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex justify-center
        md:justify-between items-center p-4">
                <a href="#" 
                className='flex items-center font-bold text-3xl md:text-2xl'>
                <ChessQueen className="text-orange-700 mr-2"/> 
                NGA
                 <span className="text-orange-700">DEV</span>
                </a>
                <ul className="hidden md:flex space-x-4">
                    <li>
                        <a href="#Home" className="btn btn-sm btn-ghost">Home</a>
                    </li>
                    <li>
                        <a href="#About" className="btn btn-sm btn-ghost">About</a>
                    </li>
                    <li>
                        <a href="#Skills" className="btn btn-sm btn-ghost">My skills</a>
                    </li>
                    <li>
                        <a href="#Projects" className="btn btn-sm btn-ghost">My projects</a>
                    </li>

                </ul>
        </div>
    )
}

export default Navbar