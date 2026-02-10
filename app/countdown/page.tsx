'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft } from 'lucide-react'

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownPage() {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('2026-02-20').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateCountdown()
    const timer = setInterval(calculateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200 px-4 py-8 overflow-hidden">
      {/* Falling hearts background - only render on client */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.3)">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Heading */}
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-rose-700 mb-4">
          Our Anniversary
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 font-poppins mb-12">
          February 20, 2026
        </p>

        {/* Countdown Box */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
          <p className="text-gray-600 text-lg font-poppins mb-8">
            Days until we celebrate another year of forever together
          </p>

          {/* Countdown Display */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {/* Days */}
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-rose-600 font-playfair">
                {String(countdown.days).padStart(2, '0')}
              </div>
              <p className="text-sm md:text-base text-gray-700 font-poppins mt-2">Days</p>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 font-playfair">
                {String(countdown.hours).padStart(2, '0')}
              </div>
              <p className="text-sm md:text-base text-gray-700 font-poppins mt-2">Hours</p>
            </div>

            {/* Minutes */}
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-pink-600 font-playfair">
                {String(countdown.minutes).padStart(2, '0')}
              </div>
              <p className="text-sm md:text-base text-gray-700 font-poppins mt-2">Minutes</p>
            </div>

            {/* Seconds */}
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl md:text-5xl font-bold text-rose-600 font-playfair">
                {String(countdown.seconds).padStart(2, '0')}
              </div>
              <p className="text-sm md:text-base text-gray-700 font-poppins mt-2">Seconds</p>
            </div>
          </div>

          {/* Inspirational message */}
          <div className="mt-12 pt-8 border-t border-rose-200">
            <p className="text-lg text-gray-700 leading-relaxed font-poppins italic">
              Every second that passes brings me closer to celebrating another beautiful year with you. Until then, I'll cherish every moment thinking about you.
            </p>
          </div>
        </div>

        {/* Back button */}
        <div className="flex justify-center">
          <a href="/special">
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
