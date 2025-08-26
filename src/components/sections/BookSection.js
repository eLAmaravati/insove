'use client';
import React, { useState } from 'react';
import { PrimaryButton } from '../utils/Button';
import departmentsData from '../../../data/departments.json';



export default function BookSection()
{
  const departments = departmentsData;
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');


  return (
    <section>
      <div className="container space-y-10">
        <div>
          <h2 className='font-semibold text-3xl text-pretty text-neutral-700'>Book Appointment
            or call: <span className='text-insove-blue'>(+487) 384 9452</span></h2>
        </div>

        {/* Form */ }
        <form action="" className='text-sm grid grid-cols-2 gap-10'>
          <div className="col-span-2 lg:col-span-1">
            <div className="w-full relative">
              <select
                id="department"
                name="department"
                autoComplete="department-name"
                value={ selectedDepartment }
                onChange={ (e) =>
                {
                  setSelectedDepartment(e.target.value);
                  setSelectedDoctor('');
                } }
                className="block appearance-none w-full bg-white border border-gray-300 text-neutral-400 py-3 px-6 pr-8 rounded-md shadow-sm leading-6 focus:outline-none focus:ring-2 focus-within:bg-neutral-50 focus:ring-insove-blue-light focus:border-transparent sm:text-sm"
              >
                <option value="" disabled selected hidden>Select Department</option>
                { departments && departments.map((department) => (
                  <option key={ department.id }>{ department.department }</option>
                )) }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-3 text-neutral-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <label htmlFor="name" className='mt-7 block'>
              <div class="flex py-3 px-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-insove-blue-light focus-within:bg-neutral-50">
                <input type="text" name="name" id="name" autoComplete="name" className="block w-full border-0 bg-transparent text-gray-900 placeholder:text-neutral-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6" placeholder="Full Name" />
              </div>
            </label>

            <label htmlFor="date" className='mt-7 block'>
              <div class="flex py-3 px-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-insove-blue-light focus-within:bg-neutral-50">
                <input type="date" name="date" id="date" autoComplete="date" className="block w-full border-0 bg-transparent text-neutral-400 placeholder:text-neutral-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </label>
          </div>

          {/* KOLOM DUA */ }
          <div className="col-span-2 lg:col-span-1">
            <div className="w-full relative">
              <select
                id="doctor"
                name="doctor"
                autoComplete="doctor-name"
                value={ selectedDoctor }
                onChange={ (e) => setSelectedDoctor(e.target.value) }
                className="block appearance-none w-full bg-white border border-gray-300 text-neutral-400 py-3 px-6 pr-8 rounded-md shadow-sm leading-6 focus:outline-none focus:ring-2 focus-within:bg-neutral-50 focus:ring-insove-blue-light focus:border-transparent sm:text-sm"
              >
                <option value="" disabled selected hidden>Select Doctor</option>
                { departments
                  .find((dept) => dept.department === selectedDepartment)
                  ?.doctors.map((doctor) => (
                    <option key={ doctor } value={ doctor }>
                      { doctor }
                    </option>
                  )) }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-3 text-neutral-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>


            <label htmlFor="telephone" className='mt-7 block'>
              <div class="flex py-3 px-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-insove-blue-light focus-within:bg-neutral-50">
                <input type="tel" name="telephone" id="telephone" autoComplete="telephone" placeholder='Phone Number' className="block w-full border-0 bg-transparent text-neutral-400 placeholder:text-neutral-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6" />
              </div>
            </label>

            <label htmlFor="time" className='mt-7 block'>
              <div class="flex py-3 px-6 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-insove-blue-light focus-within:bg-neutral-50">
                <input type="time" name="time" id="time" autoComplete="time" className="block w-full border-0 bg-transparent text-neutral-400 placeholder:text-neutral-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6" min='08:00' max='18:00' value='08:00' />
              </div>
            </label>
          </div>
        </form>
        <div className="col-span-2">
          <PrimaryButton href='#' text='Book an appointment' />
        </div>

      </div>
    </section>
  );
}