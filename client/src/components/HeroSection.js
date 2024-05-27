import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../styles/Button"; // Assuming Button is a styled component

const HeroSection = ({ myData }) => {
  const { name } = myData;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products");
    window.scrollTo(0, 0); 
  };

  return (
    <div className="py-48 bg-bubble-gum">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="hero-section-data">
            <p className="text-lg text-gray-700 mb-4">Welcome to </p>
            <h1 className="text-5xl font-bold capitalize mb-6">{name}</h1>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to the Ecommerce App created By Khushil
            </p>
            
              <Button 
                onClick={handleClick}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
              >
                Shop Now
              </Button>
          
          </div>
         
          <div className="flex justify-center items-center">
            <figure className="relative">
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="w-full h-auto"
              />
              <div className="absolute top-[-2.5rem] left-1/2 transform -translate-x-1/2 z-[-1] w-3/5 h-4/5 bg-purple-700 opacity-40"></div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
