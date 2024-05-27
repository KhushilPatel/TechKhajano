import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { useNavigate } from 'react-router-dom';

const Trusted = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/register')
    window.scrollTo(0, 0); 
  }
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <section className="bg-orange-100">
      <div className="mx-auto py-20 overflow-hidden">
        <h3 className="text-center text-2xl font-bold text-black capitalize mb-8">
          Trusted By 1000+ Companies
        </h3>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden shadow-lg p-4">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="mt-8 p-4 text-center">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
            TechKhajano India News
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Sign up for the latest news, facts, analysis, and original stories about Amazon India delivered to you.
          </p>
          <button className="bg-bubble-gum text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-bubble-gum focus:ring-offset-2" onClick={handleClick}>
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
