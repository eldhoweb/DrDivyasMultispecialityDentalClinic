import React from 'react';
import { Phone, MessageCircle, Star } from 'lucide-react';

const WA_LINK = 'https://wa.me/918593824501';
const CALL_LINK = 'tel:8593824501';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-5 pt-24 pb-16 bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100 rounded-full opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full opacity-30 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-teal-200 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>4.9 · 264 Google Reviews</span>
        </div>

        {/* Clinic name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
          Dr. Divya's{' '}
          <span className="text-teal-600">Multispeciality</span>{' '}
          Dental Clinic
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-600 font-medium mb-3">
          Advanced Dental Care with a Gentle Touch
        </p>

        {/* Doctor */}
        <p className="text-sm sm:text-base text-slate-500 mb-10">
          Dr. Divya A.S, <span className="font-semibold text-teal-600">BDS, MDS</span> — Chief Dental Surgeon
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="inline-flex items-center justify-center gap-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-4 rounded-2xl shadow-lg shadow-teal-200 transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Book on WhatsApp
          </a>
          <a
            href={CALL_LINK}
            id="hero-call-btn"
            className="inline-flex items-center justify-center gap-2.5 bg-white border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-7 py-4 rounded-2xl shadow-md transition-all duration-200 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
