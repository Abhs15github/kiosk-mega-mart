'use client';

import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Check if splash has been shown in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setIsVisible(false);
      return;
    }

    // Start fade out animation after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 2500);

    // Remove splash screen after animation completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasSeenSplash', 'true');
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-600 via-green-600 to-emerald-600 transition-opacity duration-500 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 w-full max-w-2xl">
        {/* Icon with Modern Animation */}
        <div className="mb-8 sm:mb-10 flex justify-center">
          <div className="relative">
            {/* Animated Rings */}
            <div className="absolute inset-0 w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white/20 animate-ping"></div>
            <div
              className="absolute inset-0 w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white/30 animate-pulse"
            ></div>

            {/* Icon Container with Gradient */}
            <div className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform transition-transform duration-700 hover:scale-105">
              <ShoppingBag className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 text-primary-600" strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* Brand Name - Optimized for Mobile */}
        <div className="mb-6 space-y-2 sm:space-y-3">
          <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white drop-shadow-2xl leading-none tracking-tight animate-slide-up">
            KIOSK
          </h1>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl leading-none tracking-tight animate-slide-up-delay">
            Mega Mart
          </h2>

          {/* Decorative Underline */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="h-1.5 sm:h-2 w-32 xs:w-40 sm:w-56 md:w-64 bg-white rounded-full shadow-xl animate-scale-in"></div>
          </div>
        </div>

        {/* Tagline - Mobile Optimized */}
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold mt-6 sm:mt-8 drop-shadow-lg animate-fade-in-delay leading-relaxed px-4">
          Fresh Groceries & Daily Essentials
        </p>

        {/* Location Badge */}
        <div className="mt-4 sm:mt-6 animate-fade-in-delay-2">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-white/30">
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white font-bold">
              Sector 57, Gurugram
            </p>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="mt-8 sm:mt-10 flex justify-center gap-2 sm:gap-3 animate-fade-in-delay-3">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce shadow-lg"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out forwards;
          animation-delay: 0.7s;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out forwards;
          animation-delay: 0.9s;
          opacity: 0;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out forwards;
          animation-delay: 1.1s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
