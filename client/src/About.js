import React from 'react';
import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productcontex';

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "TechKhajano",
  };

  return (
    <>
      {myName}
     
      <div className="about-section container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-4">
          Welcome to <strong>TechKhajano</strong>, your number one source for all things
          [product, ie: shoes, bags, etc.]. We're dedicated to giving you the very best of
          [product], with a focus on dependability, customer service and uniqueness.
        </p>
        <p className="text-lg mb-4">
          Founded in [2024] by Khushil Patel, TechKhajanohas come a long way from its
          beginnings in [starting location]. When Khushil first started out, his
          passion for [passion of founder, ie: helping other parents be more eco-friendly,
          providing the best equipment for his fellow musicians] drove him to [action: quit day job,
          do tons of research, etc.] so that TechKhajano can offer you [competitive
          differentiator - ie: the world's most advanced toothbrush]. We now serve customers all
          over [place, ie: the US, the world, the Austin area], and are thrilled that we're able to
          turn our passion into our own website.
        </p>
        <p className="text-lg mb-4">
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any
          questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-lg">
          Sincerely,
          <br />
          Khushil Patel, Founder
        </p>
      </div>
    </>
  );
};

export default About;
