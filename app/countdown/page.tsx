'use client'

import { useState, useEffect } from 'react'

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownPage() {
  const [time, setTime] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  // Target date: February 20th, 2026
  const targetDate = new Date(2026, 1, 20, 0, 0, 0).getTime()

  useEffect(() => {
    setMounted(true)

    const calculateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateCountdown()

    // Then update every second
    const interval = setInterval(calculateCountdown, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const CountdownCard = ({
    value,
    label,
    gradient,
  }: {
    value: number
    label: string
    gradient: string
  }) => (
    <div className="flex flex-col items-center">
      <div
        className={`${gradient} rounded-2xl p-6 md:p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 min-w-24 md:min-w-32`}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <p className="text-gray-700 font-semibold mt-3 text-sm md:text-base tracking-wide uppercase">
        {label}
      </p>
    </div>
  )

  if (!mounted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200 px-4 py-8 overflow-hidden">
      {/* Falling hearts background */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.25)">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 font-playfair">
            Our Anniversary Awaits
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            February 20th, 2026
          </p>
        </div>

        {/* Countdown Cards */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap mb-12">
          <CountdownCard
            value={time.days}
            label="Days"
            gradient="bg-gradient-to-br from-rose-400 to-rose-600"
          />
          <CountdownCard
            value={time.hours}
            label="Hours"
            gradient="bg-gradient-to-br from-pink-400 to-pink-600"
          />
          <CountdownCard
            value={time.minutes}
            label="Minutes"
            gradient="bg-gradient-to-br from-purple-400 to-purple-600"
          />
          <CountdownCard
            value={time.seconds}
            label="Seconds"
            gradient="bg-gradient-to-br from-amber-400 to-orange-600"
          />
        </div>

        {/* Heartfelt Message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto mb-12">
          <div className="text-center space-y-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="mx-auto text-rose-500 animate-pulse-heart"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>

            <h2 className="text-2xl md:text-3xl font-playfair text-gray-800">
              A Love That Grows
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              With each passing day, each moment we share, our love writes itself into something beautiful and everlasting.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Every sunrise with you, every conversation, every laugh, every quiet moment—they are all treasures I'll cherish forever.
            </p>

            <p className="text-gray-600 italic text-base">
              As we count down to our special day, I'm counting my blessings—and you're at the top of the list. 💕
            </p>

            <div className="text-5xl">💑</div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <a href="/special">
            <button className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Back to memories
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
