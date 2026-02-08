'use client'

import { useState, useEffect } from 'react'

export default function SpecialPage() {
  const [imageIndex, setImageIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(true)

  const images = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9255.PNG-yKvodEXiVCkUOs53DtKvATxzmUdly5.png',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9242.PNG-YynbSmauM9rMQlZlyFVJZeZUoSGjS5.png',
  ]

  // Cycle through images every 5 seconds
  useEffect(() => {
    if (!isAnimating) return

    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAnimating, images.length])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200 px-4 py-8 overflow-hidden">
      {/* Falling hearts background */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
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

      <div className="relative z-10 max-w-2xl w-full">
        {/* Animated image container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
          <div className="aspect-square relative bg-white">
            {images.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`Intimate moment ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === imageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text below images */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-poppins font-medium">
            Every moment with you has been a blessing... Our story doesn't end here I promise
          </p>
        </div>

        {/* Image indicator dots */}
        <div className="flex justify-center gap-3 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setImageIndex(index)
                setIsAnimating(false)
              }}
              className={`transition-all duration-300 rounded-full ${
                index === imageIndex ? 'w-3 h-3 bg-rose-600' : 'w-3 h-3 bg-rose-300 hover:bg-rose-400'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play toggle info */}
        <p className="text-center text-gray-500 text-sm font-poppins mt-6">
          Images change every 5 seconds. Click dots to control.
        </p>

        {/* Back button */}
        <div className="flex justify-center mt-12">
          <a href="/">
            <button className="px-8 py-3 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl">
              Back to memories
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
