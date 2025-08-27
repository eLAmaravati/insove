import Image from 'next/image';
export default function CtaSection()
{
  return (
    <section className='bg-insove-blue bg-[url("/images/pattern.svg")] bg-contain bg-left-bottom bg-no-repeat py-24'>
      <div className="container text-white grid gap-10 grid-cols-2 items-center">
        <div className="col-span-2 space-y-3 lg:col-span-1">
          <p className='uppercase tracking-widest text-sm'>Our newsletter</p>
          <h2 className='text-4xl font-semibold text-pretty text-white'>Subscribe Us to Get More Updates</h2>
        </div>
        <form action="#" method='POST' className='col-span-2 text-sm lg:col-span-1'>
          <label htmlFor="email" className='flex rounded-full border-2 border-white justify-between text-white p-1'>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete='email'
              placeholder="Your Email Address"
              className="bg-transparent text-inherit w-full p-4 focus:outline-none placeholder:text-white placeholder:focus:text-neutral-300"
            />
            <input
              type="submit"
              value="Subscribe"
              className='bg-white text-neutral-700 rounded-full cursor-pointer uppercase py-4 px-8 tracking-widest hover:text-insove-blue'
            />
          </label>
        </form>

      </div>
    </section>
  );
}