'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function TestimonialSection()
{

  const testimonies = [
    {
      quote: '"The service at Insove Hospital is excellent. The doctors and nurses are very friendly and professional. I felt very well taken care of during my treatment."',
      name: 'Emily Robertson',
      cite: 'Customer'
    },
    {
      quote: '"The facilities are comprehensive and modern. The administrative process was quick and efficient, making my stay at Insove Hospital comfortable."',
      name: 'John Davis',
      cite: 'Customer'
    },
    {
      quote: '"My experience at Insove Hospital was very positive. The medical team is competent and always ready to help, making me feel safe and at ease."',
      name: 'Sarah Mitchell',
      cite: 'Customer'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === testimonies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };



  return (
    <section className='bg-insove-soft-blue py-12 bg-[url("/images/pattern-2.svg")] bg-contain bg-no-repeat bg-right-top'>
      <div className="container grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Image src='/images/testimonial.png' alt='Testimonial' width={ 400 } height={ 400 } />
        </div>

        <div className="col-span-2 place-self-center overflow-hidden relative lg:col-span-1">
          <div
            className="flex mb-10 items-center transition-transform duration-500 ease-in-out"
            style={ { transform: `translateX(-${currentIndex * 100}%)` } }
          >
            { testimonies.map((testimony, index) => (
              <blockquote className="w-full flex-shrink-0 space-y-3" key={ index }>
                <p key={ index } className='text-lg'>{testimony.quote}</p>
                <footer className='font-semibold' key={ index }>{testimony.name}</footer>
                <cite className='text-xs text-neutral-400 not-italic uppercase tracking-widest' key={ index }>{testimony.cite}</cite>
              </blockquote>
            )) }
          </div>

          {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &gt;
      </button> */}
      <div className="absolute left-10 bottom-0 transform -translate-x-1/2 flex space-x-4">
        {testimonies.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`size-3 rounded-full mb-2 ${currentIndex === index ? 'bg-insove-blue ring-1 ring-insove-blue ring-offset-2' : 'bg-insove-blue-light/50'}`}
          />
        ))}
      </div>
        </div>
      </div>

    </section >
  );
}