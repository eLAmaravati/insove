'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon, PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { PrimaryButton, SecondaryButton } from '../utils/Button';
import SearchBar from '../utils/SearchBar';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navLinks = [
    {
      href: '#',
      text: 'Home'
    },
    {
      href: '#doctors',
      text: 'Doctors',
    },
    {
      href: '#departments',
      text: 'Departments',
    },
    {
      href: '#services',
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
    <>
      <header className='hidden lg:block'>
        {/* Desktop */}
        <div className="container grid grid-cols-12 py-7">
          <Link href='#' className='col-span-2'>
            <Image src='/images/logo-insove.svg' alt='Logo Insove' height={70} width={150} />
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

            <SecondaryButton href='#book' text='Appointment' />
          </div>

          {/* Navbar */}
          <nav className='col-span-12 -mb-12 mt-6 hidden h-14 items-center justify-between overflow-hidden rounded-xl border border-neutral-50 bg-white p-5 shadow-lg shadow-transparent drop-shadow-md lg:flex'>
            <ul className='grid grid-flow-col auto-cols-fr divide-x divide-neutral-300'>
              {
                navLinks.map((navlink, index) => (
                  <li key={index} className='text-center px-5 text-sm hover:text-insove-blue data-[active]:text-insove-blue'>
                    <Link href={navlink.href} className='text-center'>{navlink.text}</Link>
                  </li>
                ))
              }
            </ul>
            <SearchBar />
          </nav>
        </div>
      </header>

      {/* Tablet */}
      <header className='lg:hidden'>
        {/* <div className="container flex justify-between gap-5 col-span-12">
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
          </div> */}

        <div class="bg-insove-soft-blue px-4 py-8">
          <div class="flex container !px-5 !py-2 justify-between items-center col-span-12 mt-5 rounded-xl border border-neutral-50 bg-white shadow-lg shadow-transparent drop-shadow-md">
            <Link href='#' className='col-span-2'>
              <Image src='/images/logo-insove.svg' alt='Logo Insove' height={50} width={120} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation" className='cursor-pointer'>
              <Bars3Icon className="size-5 text-insove-blue" />
            </button>

            <Dialog open={open} onClose={setOpen} className="relative z-10">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
              />

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                    <DialogPanel
                      transition
                      className="pointer-events-auto relative w-[60vw] max-w-md transform transition duration-500 ease-in-out data-closed:-translate-x-full sm:duration-700"
                    >
                      <TransitionChild>
                        <div className="absolute top-0 right-0 -mr-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-mr-10 sm:pr-4">
                          <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="relative rounded-md text-gray-300 hover:text-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                          </button>
                        </div>
                      </TransitionChild>

                      <div className="relative flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                        <ul className="flex flex-col divide-y divide-neutral-300 mt-16">
                          {navLinks.map((navlink, index) => (
                            <li
                              key={index}
                              className="text-center py-4 text-sm hover:text-insove-blue data-[active]:text-insove-blue"
                            >
                              <Link
                                href={navlink.href}
                                className="block w-full"
                                onClick={() => setOpen(false)}
                              >
                                {navlink.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="p-4 flex justify-center">
                          <PrimaryButton href="#book" text="Appointment" className="w-full" />
                        </div>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
        </div>
      </header>
    </>
  );
}