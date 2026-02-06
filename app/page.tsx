'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ValentinesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hearts, setHearts] = useState<Array<{ id: number; left: number }>>([])

  const slides = [
    {
      image: '/images/media-201-20image.jpg',
      video: '/images/media-201-20video.mp4',
      text: "It started with a simple 'do you also want a nose mask' at that noisy convocation of your mom's 😂",
    },
    {
      image: '/images/media-202-20image.jpg',
      video: '/images/media-202-20video.mov',
      text: 'Cherished that day I surprised you at your school with myself as the present 🥹☺️. One of my favorite moments and your expression still lives rent free in my head 😂😂. We then went out to spend quality time at metro foods...',
    },
    {
      image: '/images/media-203-20image.jpg',
      text: 'Picture this: me, lost in thought until your smile lit up the room. Now every page of my life has your name written in it. Can\'t wait to keep writing our story together Ife mi ❤️🙈',
    },
    {
      image: '/images/media-204.jpeg',
      text: 'We met by chance, but chose each other every single day after. Through distance, outages, network jams and quiet mornings our love grew roots. Here\'s to forever being tangled up in you. 🌿💞',
    },
    {
      image: '/images/media-205.jpeg',
      text: 'From awkward first dates nerves to every silly moment, we built this unbreakable us. Thank you for turning \'what if\' into \'always\' my darling 💃❤️',
    },
  ]

  // Generate falling hearts
  useEffect(() => {
    const newHearts = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
    }))
    setHearts(newHearts)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200">
      {/* Falling hearts background animation */}
      <div className="fixed inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-fall"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.id * 0.7}s`,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(255, 255, 255, 0.4)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Heading with floating animation */}
        <div className="text-center mb-8 animate-float max-w-2xl">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-rose-700 mb-2">
            Happy Valentine's Day, Mem!
          </h1>
          <div className="text-4xl">❤️</div>
        </div>

        {/* Heartfelt paragraphs */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-poppins">
            You are my greatest blessing and my favorite adventure. Every moment with you feels like home. Your smile brightens my darkest days, and your love makes me believe in forever.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-poppins">
            Thank you for being patient with me, for understanding my dreams, and for loving me completely. You've shown me what true love means, and I fall deeper in love with you every single day.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-poppins">
            Here's to us, to our journey, and to all the beautiful moments yet to come. I promise to love you with all my heart, forever and always. You are my always. 💕
          </p>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-2xl mb-8">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden aspect-square sm:aspect-video">
            {/* Image/Video display */}
            <div className="relative w-full h-full">
              {slides[currentSlide].video && (
                <video
                  key={`video-${currentSlide}`}
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%201%20video-RLHUSaHSFPJaoq48GcfQIbxD3et3p0.mp4" type="video/mp4" />
                </video>
              )}
              {slides[currentSlide].image && !slides[currentSlide].video && (
                <img
                  src={slides[currentSlide].image}
                  alt={`Memory ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white text-sm sm:text-base p-4 sm:p-6 font-poppins font-medium text-balance">
                  {slides[currentSlide].text}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-rose-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-rose-600" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-rose-600'
                    : 'w-3 h-3 bg-rose-300 hover:bg-rose-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Beating heart */}
        <div className="animate-pulse-heart mb-8">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-rose-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        {/* Final message */}
        <p className="text-center text-rose-700 font-playfair text-xl sm:text-2xl font-semibold">
          Forever yours 💕
        </p>
      </div>
    </div>
  )
}
