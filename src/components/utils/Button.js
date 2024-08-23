import Link from 'next/link';

// Primary Button
const PrimaryButton = ({ href, text }) => {
  return (
    <Link href={href} className='rounded-full border border-insove-blue bg-insove-blue px-10 py-4 text-sm font-semibold uppercase text-white drop-shadow transition duration-300 ease-linear hover:border-insove-blue-dark hover:bg-insove-blue-dark'>
      {text}
    </Link>
  );
};

// Secondary Button
const SecondaryButton = ({ href, text }) => {
  return (
    <Link href={href} className='flex justify-center items-center rounded-full text-insove-blue py-2 px-6 text-sm/none border-2 border-insove-blue uppercase transition duration-300 ease-linear hover:drop-shadow-md hover:text-white hover:bg-insove-blue-dark hover:border-insove-blue-dark'>
      {text}
    </Link>
  );
};

export { PrimaryButton, SecondaryButton };
