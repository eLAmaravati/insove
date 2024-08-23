import Image from 'next/image';
export default function LogoSection()
{
  return (
    <section>
      <div className="container flex flex-wrap gap-10 justify-center lg:justify-between">
        <Image src='/images/logo-1.svg' alt='Logo' width={ 120 } height={ 50 } />
        <Image src='/images/logo-2.svg' alt='Logo' width={ 120 } height={ 50 } />
        <Image src='/images/logo-3.svg' alt='Logo' width={ 120 } height={ 50 } />
        <Image src='/images/logo-4.svg' alt='Logo' width={ 120 } height={ 50 } />
        <Image src='/images/logo-5.svg' alt='Logo' width={ 120 } height={ 50 } />
      </div>
    </section>
  );
}