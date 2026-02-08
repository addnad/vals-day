'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

export default function ValentinesPage() {
  const [stage, setStage] = useState<'prompt' | 'message' | 'carousel'>('prompt')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [videoEnded, setVideoEnded] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const slides = [
    {
      type: 'video',
      video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%201%20video-UCqJPo9z31rq1uwKCjSDzJWD5w80e7.mp4',
      text: "It started with a simple 'do you also want a nose mask' at that noisy convocation of your mom's 😂",
    },
    {
      type: 'image',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%201%20image-W22gaJKQ0fBdzzx7fCObkWF2fKkR1d.jpg',
      text: "It started with a simple 'do you also want a nose mask' at that noisy convocation of your mom's 😂",
    },
    {
      type: 'image',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%202%20image-ZnjiccFfG4wkqzYOCbOJHd7tME97yB.jpg',
      text: "Cherished that day I surprised you at your school with myself as the present 🥹☺️. One of my favorite moment and your expression still lives rent free in my head 😂😂. We then went out to spend quality time at metro foods...",
    },
    {
      type: 'video',
      video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%202%20video-D5i8mByQsUuPbZzJRj0D8FSWipySOz.mov',
      text: "Cherished that day I surprised you at your school with myself as the present 🥹☺️. One of my favorite moment and your expression still lives rent free in my head 😂😂. We then went out to spend quality time at metro foods...",
    },
    {
      type: 'video',
      video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%202.1-t8bM5Avyx35OZeiCT028jKtmvTGKRQ.mov',
      text: "Cherished that day I surprised you at your school with myself as the present 🥹☺️. One of my favorite moment and your expression still lives rent free in my head 😂😂. We then went out to spend quality time at metro foods...",
    },
    {
      type: 'image',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%203%20image-caizc6cdEuBmGvZ8OV1nRZLznJcUk5.jpg',
      text: "now picture this: me, lost in thought until your smile lit up the room. Now every page of my life has your name written in it. Can't wait to keep writing our story together Ife mi ❤️🙈",
    },
    {
      type: 'image',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%204.JPG-70jeoOZlKkCKtLMj4J3toXTEWfwFpE.jpeg',
      text: "We met by chance, but chose each other every single day after. Through distance outages, network jams and quiet mornings our love grew roots. Here's to forever being tangled up in you. 🌿💞",
    },
    {
      type: 'image',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Media%204.1.JPG-oNVm2HF8YR78rXcf296jzlzO2oAVyS.jpeg',
      text: "We met by chance, but chose each other every single day after. Through distance outages, network jams and quiet mornings our love grew roots. Here's to forever being tangled up in you. 🌿💞",
    },
  ]

  const hearts = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
  }))

  // Handle NO button movement
  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200
    const randomY = (Math.random() - 0.5) * 200
    setNoPosition({ x: randomX, y: randomY })
  }

  // Auto-advance after video ends + 5 seconds
  useEffect(() => {
    if (stage === 'carousel' && videoEnded && currentSlide === 0) {
      const timer = setTimeout(() => {
        setCurrentSlide(1)
        setVideoEnded(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [videoEnded, stage, currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Render prompt stage
  if (stage === 'prompt') {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200 overflow-hidden">
        {/* Floating hearts */}
        <div className="fixed inset-0 pointer-events-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.4)">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-rose-700 mb-8">
            Will you be my Valentine?
          </h1>

          <div className="flex gap-8 justify-center items-center relative">
            {/* YES Button */}
            <button
              onClick={() => setStage('message')}
              className="px-8 py-3 bg-rose-500 text-white text-xl font-semibold rounded-full hover:bg-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Yes ❤️
            </button>

            {/* NO Button - Moves away */}
            <button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onClick={handleNoHover}
              style={{
                transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
              }}
              className="px-8 py-3 bg-gray-400 text-white text-xl font-semibold rounded-full transition-transform duration-200 shadow-lg cursor-not-allowed opacity-70"
            >
              No
            </button>
          </div>

          <p className="mt-12 text-gray-600 text-lg font-poppins">
            (The "No" option isn't really an option, darling 😉)
          </p>
        </div>
      </div>
    )
  }

  // Render message stage
  if (stage === 'message') {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200 px-4 py-8 overflow-hidden">
        {/* Falling hearts */}
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.3)">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-2xl">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-rose-700 mb-4">
              Happy Valentine's Day, Mem!
            </h1>
            <div className="text-5xl animate-pulse-heart">❤️</div>
          </div>

          {/* Message paragraphs */}
          <div className="space-y-6 mb-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed font-poppins">
              You are my greatest blessing and my favorite adventure. Every moment with you feels like home. Your smile brightens my darkest days, and your love makes me believe in forever.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-poppins">
              Thank you for being patient with me, for understanding my dreams, and for loving me completely. You've shown me what true love means, and I fall deeper in love with you every single day.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-poppins">
              Here's to us, to our journey, and to all the beautiful moments yet to come. I promise to love you with all my heart, forever and always. You are my always.
            </p>
          </div>

          {/* Arrow pointing to next section */}
          <div className="flex flex-col items-center gap-4 mt-16">
            <p className="text-gray-600 font-poppins text-sm">Scroll to see our memories</p>
            <button
              onClick={() => setStage('carousel')}
              className="animate-bounce"
            >
              <ChevronDown className="w-8 h-8 text-rose-600" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Render carousel stage
  if (stage === 'carousel') {
    const currentMedia = slides[currentSlide]

    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200 px-4 py-8">
        {/* Falling hearts */}
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255, 255, 255, 0.3)">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-3xl">
          {/* Media display */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden aspect-video mb-8">
            <div className="relative w-full h-full">
            {currentMedia.type === 'video' && (
                <video
                  key={`video-${currentSlide}`}
                  className="w-full h-full object-cover bg-black"
                  controls
                  onEnded={() => setVideoEnded(true)}
                  crossOrigin="anonymous"
                >
                  <source src={currentMedia.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {currentMedia.type === 'image' && (
                <img
                  src={currentMedia.image || "/placeholder.svg"}
                  alt={`Memory ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Text overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white text-lg p-6 font-poppins font-medium text-balance">
                  {currentMedia.text}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-rose-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-rose-600" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mb-8">
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
      </div>
    )
  }
}
