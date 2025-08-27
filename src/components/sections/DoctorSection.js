'use client';
import Image from "next/image";
import { useState } from "react";

export default function DoctorSection()
{
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            name: "Dr. Megan Taylor, MD",
            specialty: "Cardiology",
            description: "Dr. Megan Taylor is a board-certified cardiologist with over 10 years of experience in treating heart conditions.",
            image: "/images/doctor-3.png"
        },
        {
            id: 2,
            name: "Dr. David Johnson, PHD",
            specialty: "Pathologist",
            description: "Dr. David Johnson is a leading pathologist with a focus on cancer diagnostics.",
            image: "/images/doctor-david.png"
        },
        {
            id: 3,
            name: "Dr. Emily Chen, MD, FACOG",
            specialty: "Gynecology",
            description: "Dr. Emily Chen is a board-certified gynecologist with a passion for women's health.",
            image: "/images/doctor-chen.png"
        }
    ]);

  return (
    <section id='doctors' className='scroll-mt-24 container py-12'>
      <h2 className='text-4xl font-semibold'>Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-2 gap-2">
            <figure className="col-span-1">
                <Image src={doctor.image} alt={doctor.name} width={400} height={400} className="w-full h-full object-cover" />
            </figure>
            <div className="p-4 col-span-1">
              <h3 className="text-lg font-semibold">{doctor.name}</h3>
              <p className="text-sm text-insove-blue tracking-wider uppercase">{doctor.specialty}</p>
              <p className="text-xs text-gray-500">{doctor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}