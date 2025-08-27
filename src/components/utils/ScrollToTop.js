'use client';
import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed right-10 cursor-pointer bottom-10 rounded-full bg-insove-soft-blue text-insove-blue size-14 bg-opacity-50 flex justify-center items-center hover:bg-opacity-100 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <ChevronUpIcon className="size-6" />
    </button>
  );
};

export default ScrollToTop;
