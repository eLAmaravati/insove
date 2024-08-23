import Link from 'next/link';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { PrimaryButton } from '../utils/Button';
import departmentsData from '../../../data/departments.json';

export default function DepartmentSection()
{
  const departments = departmentsData;

  return (
    <section className='bg-insove-soft-blue rounded-xl bg-[url("/images/pattern.svg")] bg-cover bg-right-bottom bg-no-repeat lg:mx-20'>
      <div className="container py-24">
        <TabGroup vertical className='grid gap-20 grid-cols-3'>
          <TabList className="grid grid-flow-row auto-rows-max gap-10 col-span-1 items-start text-left justify-between *:uppercase">
            { departments && departments.map((department) => (
              <Tab key={ department.department } className='text-left outline-none data-[selected]:font-semibold data-[hover]:text-insove-blue data-[selected]:text-insove-blue'>
                { department.department }
              </Tab>
            )) }
          </TabList>
          <TabPanels className='col-span-2'>
            { departments && departments.map((department) => (
              <TabPanel key={ department.department } className='space-y-9'>
                <h2 className='font-semibold text-3xl mb-2'>{ department.department }</h2>
                <p className='leading-relaxed'>{ department.description }</p>
                <ul className='grid grid-cols-3 divide-x divide-neutral-300'>
                  { department.clinics && department.clinics.map((clinic, index) => (
                    <li
                      key={ index }
                      className={ `text-insove-blue hover:text-neutral-500 ${index === 0 ? 'text-left' :
                          index === 1 ? 'text-center' :
                            index === 2 ? 'text-right' : ''
                        }` }
                    >
                      <Link href='#'>{ clinic }</Link>
                    </li>
                  )) }
                </ul>
                <div className="pt-5">
                  <PrimaryButton href='#' text='Learn More' />
                </div>
              </TabPanel>
            )) }
          </TabPanels>
        </TabGroup>

      </div>
    </section>
  );
}