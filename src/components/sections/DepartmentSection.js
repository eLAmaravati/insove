import Link from 'next/link';
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { PrimaryButton } from '../utils/Button';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import departmentsData from '../../../data/departments.json';

export default function DepartmentSection() {
  const departments = departmentsData;

  return (
    <section id='departments' className='bg-insove-soft-blue scroll-mt-24 rounded-xl bg-[url("/images/pattern.svg")] bg-cover bg-right-bottom bg-no-repeat lg:mx-20'>
      <div className="container py-24 hidden md:block">
        <TabGroup vertical className='grid gap-20 grid-cols-3'>
          <TabList className="grid grid-flow-row auto-rows-max gap-10 col-span-1 items-start text-left justify-between *:uppercase">
            {departments && departments.map((department) => (
              <Tab key={department.department} className='text-left outline-none data-[selected]:font-semibold data-[hover]:text-insove-blue data-[selected]:text-insove-blue'>
                {department.department}
              </Tab>
            ))}
          </TabList>
          <TabPanels className='col-span-2'>
            {departments && departments.map((department) => (
              <TabPanel key={department.department} className='space-y-9'>
                <h2 className='font-semibold text-3xl mb-2'>{department.department}</h2>
                <p className='leading-relaxed'>{department.description}</p>
                <ul className='grid grid-cols-3 divide-x divide-neutral-300'>
                  {department.clinics && department.clinics.map((clinic, index) => (
                    <li
                      key={index}
                      className={`text-insove-blue hover:text-neutral-500 ${index === 0 ? 'text-left' :
                        index === 1 ? 'text-center' :
                          index === 2 ? 'text-right' : ''
                        }`}
                    >
                      <Link href='#'>{clinic}</Link>
                    </li>
                  ))}
                </ul>
                <div className="pt-5">
                  <PrimaryButton href='#' text='Learn More' />
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>

      </div>

      <div className="container py-24 md:hidden">
        <h2 className='text-4xl mb-4 text-center font-semibold'>Our Departments</h2>
        {departments && departments.map((department) => (
        <Disclosure as="div" key={department.department} className='mb-5 border-b border-neutral-200'>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="font-medium uppercase text-lg group-data-hover:text-insove-blue group-data-open:text-insove-blue">
              {department.department}
            </span>
            <ChevronDownIcon className="size-5 group-data-hover:fill-insove-blue group-data-open:rotate-180 group-data-open:fill-insove-blue" />
          </DisclosureButton>
          <DisclosurePanel ass="div" className="text-sm leading-5">{department.description}</DisclosurePanel>
        </Disclosure>
      ))}
      </div>
    </section>
  );
}