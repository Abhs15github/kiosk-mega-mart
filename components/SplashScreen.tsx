'use client';

import { useEffect, useState } from 'react';
import { Store } from 'lucide-react';

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-600 via-green-600 to-emerald-700 transition-opacity duration-500 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Store Icon with Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Pulsing Rings */}
            <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
            <div
              className="absolute inset-0 rounded-full bg-white/20 animate-ping"
              style={{ animationDelay: '0.3s' }}
            ></div>

            {/* Icon Container */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <Store className="w-12 h-12 sm:w-16 sm:h-16 text-primary-600" />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-4 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-2 drop-shadow-lg animate-slide-up">
            KIOSK
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Mega Mart
          </h1>
          <div className="h-2 w-48 sm:w-64 bg-white rounded-full mx-auto mt-4 shadow-lg animate-scale-in"></div>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-semibold mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Fresh Groceries & Daily Essentials
        </p>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
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

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
