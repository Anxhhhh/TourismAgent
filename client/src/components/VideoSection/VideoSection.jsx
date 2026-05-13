import React, { useRef, useState } from 'react'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <section id="video" className="py-[100px] lg:py-[140px] bg-black">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="section-label">Video Tour</span>
          <h2 className="text-[clamp(34px,4.5vw,58px)] font-bold leading-[1.15] text-white mb-6 mt-2">
            Find out more with our <span className="gradient-text">video tour</span>
          </h2>
          <p className="max-w-[700px] mx-auto text-[17px] font-light leading-[1.8] text-white/50">
            Discover the most beautiful and pleasant places for you and your family 
            through our immersive visual experience.
          </p>
        </div>

        <div className="relative max-w-[1000px] mx-auto group">
          <div className="glass-card overflow-hidden rounded-[24px] aspect-video relative">
            <video
              ref={videoRef}
              id="video-file"
              className="w-full h-full object-cover"
              poster="/assets/img/video-poster.png"
              onEnded={handleVideoEnd}
            >
              <source src="/assets/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Gradient */}
            <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className={`absolute bottom-8 right-8 w-[64px] h-[64px] rounded-full flex items-center justify-center transition-all duration-300 group/btn
                ${isPlaying 
                  ? 'bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100' 
                  : 'bg-teal-500 shadow-[0_0_30px_rgba(20,184,166,0.5)] scale-110'
                }`}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white translate-x-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Background decorative glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(23,100,117,0.15)_0%,transparent_70%)] pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
