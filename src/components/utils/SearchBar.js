'use client';
import { MapPinIcon, PhoneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button, Dialog, DialogPanel, DialogTitle, Transition, Description, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

export default function SearchBar()
{
  let [isOpen, setIsOpen] = useState(false)

  function open()
  {
    setIsOpen(true)
  }

  function close()
  {
    setIsOpen(false)
  }
  return (
    <>
      <Button
        onClick={ open }
        className="italic text-sm focus:outline-none data-[hover]:text-insove-blue data-[focus]:outline-1 data-[focus]:outline-white"
      >
        <MagnifyingGlassIcon className='size-4 inline-block mr-2 text-insove-blue' />
        Search ...
      </Button>

      <Dialog open={ isOpen } onClose={ () => setIsOpen(false) } className="relative z-50">
        {/* The backdrop, rendered as a fixed sibling to the panel container */ }
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

        {/* Full-screen container to center the panel */ }
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          {/* The actual dialog panel  */ }
          <DialogPanel className="space-y-4 bg-white p-12 rounded-xl drop-shadow-md w-2/3">
            <form className="flex items-center rounded-full border-2 border-neutral-300 p-2 w-full justify-between">
              <input
                className="outline-none w-full px-3"
                type="text"
                placeholder="Search..."
              />
              <button
                className="p-4 rounded-full bg-insove-blue text-white hover:bg-insove-blue-dark hover:drop-shadow-md"
                type="submit"
              >
                <MagnifyingGlassIcon className='size-4' />
              </button>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}