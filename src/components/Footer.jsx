import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 px-5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p className="text-center sm:text-left">
          © 2025 Dr. Divya's Multispeciality Dental Clinic. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-center sm:text-right">
          Designed by{' '}
          <a
            href="https://eldhoweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1 transition-colors duration-150"
          >
            EldhoWeb
            <ExternalLink className="w-3 h-3" />
          </a>
        </p>
      </div>
    </footer>
  );
}
