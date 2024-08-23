'use client';
import { useState, useEffect } from 'react';

export default function StatsSection({ endValue })
{
  return (
    <section>
      <div className="container flex flex-wrap justify-between gap-y-10 md:flex-nowrap">
        <div className="flex basis-1/2 flex-col items-center justify-center md:basis-1/4">
          <Counter endValue={ 5120 } />
          <p className="text-xs text-neutral-500 text-center">Happy patients</p>
        </div>
        <div className="flex basis-1/2 flex-col items-center justify-center md:basis-1/4">
          <Counter endValue={ 26 } />
          <p className="text-xs text-neutral-500">Total branches</p>
        </div>
        <div className="flex basis-1/2 flex-col items-center justify-center md:basis-1/4">
          <Counter endValue={ 53 } />
          <p className="text-xs text-neutral-500">Senior doctors</p>
        </div>
        <div className="flex basis-1/2 flex-col items-center justify-center md:basis-1/4">
          <Counter endValue={ 10 } />
          <p className="text-xs text-neutral-500">Years experience</p>
        </div>
      </div>
    </section>
  );
}

const Counter = ({ endValue }) =>
{
  const [count, setCount] = useState(0);

  useEffect(() =>
  {
    let start = 0;
    const duration = 2000; // durasi dalam milidetik
    const incrementTime = 50; // interval update dalam milidetik

    const increment = (endValue / (duration / incrementTime));

    const timer = setInterval(() =>
    {
      start += increment;
      if (start >= endValue)
      {
        start = endValue;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [endValue]);

  return (
    <p className='font-semibold text-insove-blue-dark text-4xl'>+{ count }</p>
  );
};