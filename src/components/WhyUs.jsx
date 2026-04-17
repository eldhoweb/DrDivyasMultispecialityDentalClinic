import React from 'react';
import { HeartHandshake, Clock, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: HeartHandshake,
    title: 'Painless Procedures',
    desc: 'Patients consistently rate our treatments as comfortable and stress-free.',
  },
  {
    icon: Clock,
    title: 'Open Every Day',
    desc: "We're available 7 days a week, 9 AM to 7 PM — even on holidays.",
  },
  {
    icon: GraduationCap,
    title: 'Expert Specialists',
    desc: 'A full panel of MDS-qualified consultants under one roof.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-5 bg-teal-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500 rounded-full opacity-30 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-700 rounded-full opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-white/30">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Patients Choose Us
          </h2>
          <p className="mt-3 text-teal-100 text-base max-w-md mx-auto">
            We combine clinical expertise with genuine compassion for every patient.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center hover:bg-white/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-teal-100 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
