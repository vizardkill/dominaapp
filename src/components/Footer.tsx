import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[#1722FF] text-white p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          
          {/* Información de Contacto */}
          <div className="flex items-center space-x-3">
            <PhoneIcon className="h-5 w-5 text-white" />
            <span className="font-medium">+57 305 852 3482</span>
          </div>
  
          {/* Nombre y Slogan */}
          <div className="text-center mt-2 md:mt-0">
            <p className="text-lg font-semibold">Santiago Cardona Saldarriaga</p>
            <p className="text-sm text-gray-200">
              Transformando ideas en código, impulsando negocios con tecnología.
            </p>
          </div>
  
          {/* Email */}
          <div className="flex items-center space-x-3 mt-2 md:mt-0">
            <a href="mailto:cardona0496@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <EnvelopeIcon className="h-5 w-5 text-white" />
              <span className="font-medium">cardona0496@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;