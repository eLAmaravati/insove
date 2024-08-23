import Image from 'next/image';
import Link from 'next/link';
import { PrimaryButton } from '../utils/Button';
export default function BlogSection()
{
  return (
    <section id='blog'>
      <div className="container grid grid-cols-3 gap-10">
        <h2 className='font-semibold text-4xl col-span-3'>Our Recent Posts</h2>
        <article className="group relative col-span-3 cursor-pointer rounded-xl bg-white shadow-md lg:col-span-1">
          <div className='relative overflow-hidden rounded-t-xl'>
            <Image src='/images/blog-1.jpg' alt='Food' width={ 500 } height={ 200 } className='rounded-t-xl scale-100 transition-transform duration-300 ease-linear group-hover:scale-110' />
            <span className='absolute left-0 bottom-0 bg-insove-blog-meta text-white p-3 text-xs uppercase tracking-widest '>Medical</span>
          </div>
          <div className="p-5">
            <time className='text-sm text-neutral-400'>June 18, 2024</time>
            <h3 className='font-semibold text-lg'><Link href='#' className='group-hover:text-insove-blue'>10 foods to avoid for your heart health</Link></h3>
            <p className='text-sm text-neutral-500 line-clamp-3'>Here are ten foods you should avoid to maintain a healthy heart. Steering clear of these can significantly improve cardiovascular health.</p>
          </div>
        </article>
        <article className="group relative col-span-3 cursor-pointer rounded-xl bg-white shadow-md lg:col-span-1">
          <div className='relative overflow-hidden rounded-t-xl'>
            <Image src='/images/blog-2.jpg' alt='Food' width={ 500 } height={ 200 } className='rounded-t-xl scale-100 transition-transform duration-300 ease-linear group-hover:scale-110' />
            <span className='absolute bottom-0 left-0 bg-insove-blog-meta p-3 text-xs uppercase tracking-widest text-white'>Mental Health</span>
          </div>
          <div className="p-5">
            <time className='text-sm text-neutral-400'>June 14, 2024</time>
            <h3 className='font-semibold text-lg'><Link href='#' className='group-hover:text-insove-blue'>How to be Relax & Calm in Hard Situations</Link></h3>
            <p className='text-sm text-neutral-500 line-clamp-3'>Managing stress in challenging situations is crucial. Learn how to stay relaxed and calm with these practical tips to improve your mental resilience.</p>
          </div>
        </article>

        <article className="group relative col-span-3 cursor-pointer rounded-xl bg-white shadow-md lg:col-span-1">
          <div className='relative overflow-hidden rounded-t-xl'>
            <Image src='/images/blog-3.jpg' alt='Food' width={ 500 } height={ 200 } className='rounded-t-xl scale-100 transition-transform duration-300 ease-linear group-hover:scale-110' />
            <span className='absolute bottom-0 left-0 bg-insove-blog-meta p-3 text-xs uppercase tracking-widest text-white'>Dental</span>
          </div>
          <div className="p-5">
            <time className='text-sm text-neutral-400'>June 10, 2024</time>
            <h3 className='font-semibold text-lg'><Link href='#' className='group-hover:text-insove-blue'>Best Ways to Make Your Teeth Strong</Link></h3>
            <p className='text-sm text-neutral-500 line-clamp-3'>Discover the best ways to make your teeth strong. Incorporate these practices into your daily routine for healthier, stronger teeth and a brighter smile.</p>
          </div>
        </article>

        <div className="col-span-3 mx-auto mt-5">
          <PrimaryButton href='#' text='Read More Blogs'/>
        </div>
      </div>
    </section>
  );
}