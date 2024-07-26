import React, { useState } from "react";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();
  const [showFullContent, setShowFullContent] = useState(false);

  const data = {
    name: "TechKhajano",
  };

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="bg-white flex">
  
      <div className="container mx-auto px-4 py-8 flex  lg:flex-row gap-6">
        {/* Left Sidebar for Newsfeed */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded max-h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Newsfeed</h2>
          <ul className="space-y-7">
            <li className="mb-2">
              TechKhajano will make 50 startups ready for global markets
            </li>
            <hr />
            <li className="mb-2">
              Amazon Propel will make 50 startups ready for global markets 14
              May 2024
            </li>
            <hr />
            <li className="mb-2">
              Tata Play's customers can now get Amazon Prime benefits 2 May 2024
            </li>
            <hr />
            <li className="mb-2">
              Amazon launches a health program for truck drivers, families 11
              April 2024
            </li>
            <hr />
            <li className="mb-2">
              Amazon CEO Andy Jassy’s 2023 Letter to Shareholders 27 February
              2024
            </li>
            <hr />
            <li>
              You can customise your Prime Video homepage for preferred
              languages
            </li>
          </ul>
        </div>

        {/* Middle Section for Photo and Main News */}
        <div className="w-full lg:w-2/4">
          <div className="about-section bg-white p-4 rounded shadow">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="mb-4">
              <img
                src="./images/hero.jpg"
                alt="Main News Photo"
                className="w-full h-auto mb-4 rounded"
              />
              <p className="text-lg mb-4">
                Welcome to <strong>TechKhajano</strong>, your number one source
                for all things [product, ie: shoes, bags, etc.]. We're dedicated
                to giving you the very best of [product], with a focus on
                dependability, customer service and uniqueness.
              </p>
              {showFullContent && (
                <>
                  <p className="text-lg mb-4">
                    Founded in [2024] by Khushil Patel, TechKhajano has come a
                    long way from its beginnings in [starting location]. When
                    Khushil first started out, his passion for [passion of
                    founder, ie: helping other parents be more eco-friendly,
                    providing the best equipment for his fellow musicians] drove
                    him to [action: quit day job, do tons of research, etc.] so
                    that TechKhajano can offer you [competitive differentiator -
                    ie: the world's most advanced toothbrush]. We now serve
                    customers all over [place, ie: the US, the world, the Austin
                    area], and are thrilled that we're able to turn our passion
                    into our own website.
                  </p>
                  <p className="text-lg mb-4">
                    We hope you enjoy our products as much as we enjoy offering
                    them to you. If you have any questions or comments, please
                    don't hesitate to contact us.
                  </p>
                  <p className="text-lg">
                    Sincerely,
                    <br />
                    Khushil Patel, Founder
                  </p>
                </>
              )}
              <button
                onClick={toggleContent}
                className="text-blue-500 hover:underline"
              >
                {showFullContent ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar for Top Stories */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded max-h-screen overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-bold text-lg mb-1">
                Chandrayaan-3 Successfully Lands on Moon
              </h3>
              <p className="text-sm text-gray-700">
                India’s Chandrayaan-3 mission successfully landed near the
                Moon's south pole, making India the first country to achieve
                this feat. The mission aims to explore lunar resources and
                conduct scientific experiments.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-lg mb-1">
                India's New Parliament Building Inaugurated
              </h3>
              <p className="text-sm text-gray-700">
                Prime Minister Narendra Modi inaugurated India's new Parliament
                building in New Delhi. The state-of-the-art structure symbolizes
                India's growth and modernity.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-lg mb-1">
                India Surpasses China in Population
              </h3>
              <p className="text-sm text-gray-700">
                According to the latest UN data, India has become the world's
                most populous country, surpassing China with a population of
                over 1.4 billion people.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-lg mb-1">
                India’s Economy Grows at Record Pace
              </h3>
              <p className="text-sm text-gray-700">
                India’s GDP growth rate has reached a record high of 7.8% in the
                last quarter, making it one of the fastest-growing major
                economies in the world.
              </p>
            </li>
            <li>
              <h3 className="font-bold text-lg mb-1">
                Historic Supreme Court Ruling on Same-Sex Marriage
              </h3>
              <p className="text-sm text-gray-700">
                In a landmark decision, the Supreme Court of India recognized
                same-sex marriages, granting equal rights and legal recognition
                to LGBTQ+ couples.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
