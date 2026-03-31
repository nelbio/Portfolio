import { ChessQueen, Mail, Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-t-3xl shadow-2xl">
      <div className="space-y-4">
        {/* Logo & Branding */}
        <div className="flex items-center justify-center font-bold text-2xl">
          <ChessQueen className="text-orange-700 mr-2" size={32} />
          <span>NGA</span>
          <span className="text-orange-700">DEV</span>
        </div>
        
        <p className="max-w-md italic opacity-80">
          "Building the future of software, one line of code at a time."
        </p>
      </div>

      {/* Liens de navigation rapides (Invisibles sur très petit mobile) */}
      <div className="grid grid-flow-col gap-4 font-semibold uppercase text-sm tracking-widest">
        <a href="#about" className="link link-hover hover:text-orange-700">About</a>
        <a href="#skills" className="link link-hover hover:text-orange-700">Skills</a>
        <a href="#projects" className="link link-hover hover:text-orange-700">Projects</a>
      </div>

      {/* Réseaux Sociaux */}
      <div>
        <div className="grid grid-flow-col gap-6 text-2xl"> {/* Taille définie ici */}
          <a href="https://github.com/nelbio" target="_blank" rel="noreferrer" 
             className="hover:text-orange-700 hover:-translate-y-1 transition-all">
            {/* Icône GitHub de FontAwesome */}
            <span className="i-fa6-brands-github block">G</span>
          </a>
          <a href="https://linkedin.com/in/gounou-nelly-ariane" target="_blank" rel="noreferrer"
             className="hover:text-orange-700 hover:-translate-y-1 transition-all">
            {/* Icône LinkedIn de Material Design Icons */}
            <span className="i-mdi-linkedin block">L</span>
          </a>
          <a href="mailto:nelliprincesse@gmail.com" 
             className="hover:text-orange-700 hover:-translate-y-1 transition-all">
            {/* On garde Mail de Lucide car il marche */}
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-xs opacity-50 flex items-center gap-1 border-t border-base-300 w-full justify-center pt-6">
        <Copyright size={12} />
        {new Date().getFullYear()} - All rights reserved by 
        <span className="font-bold text-orange-700"> Nelly Ariane Gounou</span>
      </div>
    </footer>
  );
};

export default Footer;