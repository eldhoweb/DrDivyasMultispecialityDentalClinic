import React from 'react';
import { UserCircle, Award } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Divya A.S',
    degree: 'BDS, MDS',
    speciality: 'Oral Medicine & Radiologist',
    isChief: true,
  },
  {
    name: 'Dr. Abhiraj',
    degree: 'MDS',
    speciality: 'Orthodontist',
    isChief: false,
  },
  {
    name: 'Dr. Remya Mohan',
    degree: 'MDS',
    speciality: 'Endodontist',
    isChief: false,
  },
  {
    name: 'Dr. Anoop Kumar',
    degree: 'MDS',
    speciality: 'Oral Maxillofacial Surgeon & Implantologist',
    isChief: false,
  },
  {
    name: 'Niyas Bin Nazimudeen',
    degree: 'MDS',
    speciality: 'Periodontist',
    isChief: false,
  },
  {
    name: 'Dr. Anisha Nanda',
    degree: 'MDS',
    speciality: 'Pedodontist',
    isChief: false,
  },
  {
    name: 'Dr. Subin E K',
    degree: 'MDS',
    speciality: 'Prosthodontist',
    isChief: false,
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 px-5 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-teal-100">
            Meet Our Experts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Our Panel of Consultants
          </h2>
          <p className="mt-3 text-slate-500 text-base max-w-md mx-auto">
            MDS-qualified specialists dedicated to your oral health.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className={`relative flex items-start gap-4 bg-white rounded-2xl p-5 border transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${
                doc.isChief
                  ? 'border-teal-300 shadow-md shadow-teal-100 sm:col-span-2'
                  : 'border-gray-100'
              }`}
            >
              {/* Icon avatar */}
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  doc.isChief ? 'bg-teal-600' : 'bg-teal-50'
                }`}
              >
                <UserCircle
                  className={`w-7 h-7 ${doc.isChief ? 'text-white' : 'text-teal-600'}`}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-slate-800 text-base">{doc.name}</h3>
                  {doc.isChief && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                      <Award className="w-3 h-3" />
                      Chief
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold text-teal-600 mt-0.5">{doc.degree}</p>
                <p className="text-sm text-slate-500 mt-1 leading-snug">{doc.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
