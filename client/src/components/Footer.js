import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "../styles/Button";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0); 
  };

  return (
    <>
      <section className=" py-4">
        <div className="max-w-screen-xl bg-amber-300 mx-auto flex flex-col md:flex-row justify-between items-center px-10 py-20 shadow-md rounded-lg transform translate-y-1/2">
          <div>
            <h3 className="text-3xl font-bold">Ready to get started?</h3>
            <h3 className="text-3xl font-bold">Talk to us today</h3>
          </div>
          <div>
            <button className="btn bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 md:mt-0" onClick={handleClick}>
              Connect Us
            </button>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white py-28 mt-11">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-10">
          <div>
            <h3 className="text-2xl font-bold">Khushil Patel</h3>
            <p>Gandhinagar Gujarat<br />India</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold">Subscribe to get important updates</h3>
            <form className="mt-4">
              <Button onClick={()=>{
                navigate('/register')
              }}>Subscribe Now</Button>
             
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <FaDiscord className="text-3xl cursor-pointer" />
              <a href="https://www.instagram.com/k_p4411/" target="_blank" rel="noreferrer">
                <FaInstagram className="text-3xl cursor-pointer" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube className="text-3xl cursor-pointer" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold">Call Us</h3>
            <h3 className="text-xl mt-4">+91 12345678978</h3>
          </div>
        </div>
        
        <div className="container mx-auto mt-10 border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center px-10">
          <p className="text-center">&copy; {new Date().getFullYear()} Khushil Patel. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
