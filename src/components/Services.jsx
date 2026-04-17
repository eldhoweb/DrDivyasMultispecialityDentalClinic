import React from 'react';
import {
  Sparkles,
  Anchor,
  Zap,
  Scissors,
  Scan,
  Crown,
  Smile,
  AlignCenter,
  Baby,
  Stethoscope,
  Layers,
  Cpu,
} from 'lucide-react';

const services = [
  { icon: Sparkles,    name: 'Teeth Whitening' },
  { icon: Anchor,      name: 'Dental Implants' },
  { icon: Zap,         name: 'Root Canals' },
  { icon: Scissors,    name: 'Extractions' },
  { icon: Scan,        name: 'Laser Dentistry' },
  { icon: Crown,       name: 'Veneers & Crowns' },
  { icon: Smile,       name: 'Cosmetic Procedures' },
  { icon: AlignCenter, name: 'Orthodontics' },
  { icon: Baby,        name: 'Paediatric Dentistry' },
  { icon: Stethoscope, name: 'Oral Surgery' },
  { icon: Layers,      name: 'Fillings & Sealants' },
  { icon: Cpu,         name: 'Dentures & Bridges' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-teal-100">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-500 text-base max-w-md mx-auto">
            Comprehensive dental care delivered by specialist consultants under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-3 bg-gray-50 hover:bg-teal-50 border border-gray-100 hover:border-teal-200 rounded-2xl p-5 text-center transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-default"
            >
              <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-600 rounded-xl flex items-center justify-center transition-colors duration-200">
                <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-teal-700 leading-tight transition-colors duration-200">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
