'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { SecondaryButton } from '../utils/Button';
import SearchBar from '../utils/SearchBar';

export default function Header()
{
  const navLinks = [
    {
      href: '#',
      text: 'Home'
    },
    {
      href: '#',
      text: 'Doctors',
    },
    {
      href: '#',
      text: 'Departments',
    },
    {
      href: '#',
      text: 'Services',
    },
    {
      href: '#blog',
      text: 'Blog',
    },
    {
      href: '#',
      text: 'Contact',
    },
  ]
  return (
    <header>
      <div className="container grid grid-cols-12 py-7">
        <Link href='#' className='col-span-2'>
          <Image src='/images/logo-insove.svg' alt='Logo Insove' height={ 70 } width={ 150 } />
        </Link>

        <div className="flex justify-end gap-5 col-span-10">
          <Link href='#' className='text-sm flex items-center gap-2 text-neutral-500 hover:text-insove-blue'>
            <span className='inline-block'>
              <MapPinIcon className='size-5 text-insove-blue' />
            </span>
            123 Arling, Miola, NY
          </Link>

          <Link href='#' className='text-sm flex items-center gap-2 text-neutral-500 hover:text-insove-blue'>
            <span className='inline-block'>
              <PhoneIcon className='size-4 text-insove-blue' />
            </span>
            (+487) 384 9452
          </Link>

          <SecondaryButton href='#' text='Book Now' />
        </div>

        {/* Navbar */ }
        <nav className='col-span-12 -mb-12 mt-6 hidden h-14 items-center justify-between overflow-hidden rounded-xl border border-neutral-50 bg-white p-5 shadow-lg shadow-transparent drop-shadow-md lg:flex'>
          <ul className='grid grid-flow-col auto-cols-fr divide-x divide-neutral-300'>
            {
              navLinks.map((navlink, index) => (
                <li className='text-center px-5 text-sm hover:text-insove-blue data-[active]:text-insove-blue'>
                  <Link href={ navlink.href } className='text-center'>{ navlink.text }</Link>
                </li>
              ))
            }
          </ul>
  <SearchBar/>
      </nav>
      </div>
    </header>
  );
}