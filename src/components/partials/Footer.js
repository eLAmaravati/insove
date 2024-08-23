import Image from 'next/image';
import Link from 'next/link';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
export default function Footer()
{
  const quickLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Doctors' },
    { href: '#', label: 'Department' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Our Pricing' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Faqs' },
    { href: '#', label: 'Privacy Policy' },
  ];

  return (
    <footer className='pt-24 pb-5'>
      <div className="container grid grid-cols-3 gap-10">
        <div className="col-span-3 lg:col-span-1 text-sm text-neutral-400 space-y-3">
          <Image src='/images/logo-insove.svg' alt='Logo Insove' width='150' height='70' />
          <p className='leading-relaxed'>Dedicated to providing compassionate, comprehensive, and cutting-edge healthcare.</p>
          <ul className='space-y-2'>
            <li className='flex items-center gap-2'>
              <MapPinIcon className='size-4 text-insove-blue inline-block' />
              123 Arling, Miola, NY
            </li>
            <li className='flex items-center gap-2'>
              <EnvelopeIcon className='size-4 text-insove-blue inline-block' />
              Info@yourinfo.com
            </li>
            <li className='flex items-center gap-2'>
              <PhoneIcon className='size-4 text-insove-blue inline-block' />
              (+487) 384 9452
            </li>
          </ul>
        </div>

        <div className="col-span-3 lg:col-span-1 text-sm text-neutral-400 space-y-3">
          <h3 className='text-lg font-semibold text-neutral-600'>Quick Links</h3>
          <ul className='space-y-2 columns-2'>
            { quickLinks.map((link, index) => (
              <li key={ index } >
                <Link href={ link.href } className='hover:text-insove-blue'>
                  { link.label }
                </Link>
              </li>
            )) }
          </ul>
        </div>

        <div className="col-span-3 lg:col-span-1 text-sm text-neutral-500 space-y-3">
          <h3 className='text-lg font-semibold text-neutral-600'>Opening Hours</h3>
          <ul className='*:border-b border-b-neutral-200'>
            <li className='flex justify-between py-2'>
              <span>Monday - Thursday</span>
              <span className='text-insove-blue'>8:00 am - 6:00 pm</span>
            </li>
            <li className='flex justify-between py-2'>
              <span>Friday - Saturday</span>
              <span className='text-insove-blue'>10:00 am - 4:00 pm</span>
            </li>
            <li className='flex justify-between py-2'>
              <span>Sunday</span>
              <span className='text-insove-blue'>Emergency only</span>
            </li>
            <li className='flex justify-between py-2'>
              <span>Personal</span>
              <span className='text-insove-blue'>7:00 pm - 9:00 pm</span>
            </li>
          </ul>
        </div>

        <div className="col-span-3 border-t border-t-neutral-200 flex flex-wrap gap-5 justify-between text-xs text-neutral-400 py-5 lg:pb-0">
          <p>© 2024 - Coded by: <Link href='https://www.langitamaravati.com' target='_blank' rel='noopener noreferrer' className='font-semibold hover:text-insove-blue'>Langit Amaravati</Link></p>
          <p>Designed by: <Link href='https://templatesjungle.com/downloads/insove-medical-healthcare-free-figma-website-template/' target='_blank' rel='noopener noreferrer' className='font-semibold hover:text-insove-blue'>TemplatesJungle</Link></p>
        </div>
      </div>
    </footer>

  );
}