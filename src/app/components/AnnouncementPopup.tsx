import React from 'react';
import { X, Instagram } from 'lucide-react';
import socialMediaImage from '../../imports/WhatsApp_Image_2026-06-01_at_13.41.00.jpeg';

interface AnnouncementPopupProps {
  onClose: () => void;
}

export const AnnouncementPopup: React.FC<AnnouncementPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-2xl md:rounded-3xl max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-500">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="p-5 md:p-6 pt-12">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold px-3 py-1.5 rounded-full text-xs uppercase tracking-widest mb-3 shadow-lg">
              Announcement
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
              Promed Path Website Launch
            </h2>
            <p className="text-slate-600 font-medium text-xs md:text-sm">
              The ultimate guide to Promed UI studios & career paths!
            </p>
          </div>

          {/* Social Media Preview */}
          <div className="bg-slate-100 rounded-xl p-4 mb-4 text-center border-2 border-slate-200">
            <div className="bg-white rounded-lg mx-auto flex items-center justify-center shadow-inner mb-3 overflow-hidden">
              <img
                src={socialMediaImage}
                alt="Promed Path Instagram"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/promedpath.ui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-all hover:scale-105 shadow-lg mb-3"
          >
            <Instagram className="w-5 h-5" />
            Kunjungi Instagram Kami
          </a>

          {/* CTA */}
          <div className="text-center">
            <p className="text-slate-500 text-xs font-medium">
              Kunjungi sosial media Promed Path untuk informasi lainnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
