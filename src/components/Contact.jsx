import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const WA_LINK = 'https://wa.me/918593824501';
const CALL_LINK = 'tel:8593824501';

const MAP_SRC =
  'https://www.google.com/maps/embed/v1/search?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=Dr+Divya%27s+Multispeciality+Dental+Clinic+Kazhakuttam';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-teal-100">
            Visit Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Get In Touch</h2>
          <p className="mt-3 text-slate-500 text-base max-w-md mx-auto">
            We'd love to see you. Walk in or book ahead — we're here every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Info column */}
          <div className="flex flex-col gap-6">
            {/* Address */}
            <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Address</p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Krishnakripa Building, First Floor,<br />
                  above Shop and Save General Stores,<br />
                  near AJ Hospital, Kazhakuttam,<br />
                  Pallinada, Thiruvananthapuram,<br />
                  Kerala 695582
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-1">Phone / WhatsApp</p>
                <a
                  href={CALL_LINK}
                  className="text-teal-600 font-semibold text-base hover:text-teal-700 transition-colors"
                >
                  85938 24501
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800 mb-2">Timings</p>
                <div className="flex flex-col gap-1.5 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-slate-500">Mon, Tue, Thu – Sun</span>
                    <span className="font-semibold text-teal-600">9:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mt-0.5">
                    <span className="font-semibold text-amber-800">Wednesday</span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                      By Appointment Only
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-teal-100 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
              <a
                href={CALL_LINK}
                id="contact-call-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold px-5 py-3.5 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-80 lg:h-full min-h-72 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <iframe
              title="Dr. Divya's Multispeciality Dental Clinic — Map"
              src="https://maps.google.com/maps?q=Dr+Divya's+Multispeciality+Dental+Clinic,+Kazhakuttam,+Thiruvananthapuram&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
