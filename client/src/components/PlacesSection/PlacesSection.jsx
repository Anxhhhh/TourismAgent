import React from 'react'
import discover1 from '../../assets/images/discover1.jpg'
import discover2 from '../../assets/images/discover2.jpg'
import discover3 from '../../assets/images/discover3.jpg'
import exp1 from '../../assets/images/experience1.jpg'
import exp2 from '../../assets/images/experience2.jpg'

const places = [
  {
    title: 'Whitehaven',
    tours: '32 tours available',
    img: discover1,
    isCenter: false,
  },
  {
    title: 'Bali',
    tours: '24 tours available',
    img: discover2,
    isCenter: true,
  },
  {
    title: 'Hawaii',
    tours: '15 tours available',
    img: discover3,
    isCenter: false,
  },
]

const stats = [
  { value: '20', label: 'Year\nExperience' },
  { value: '75', label: 'Complete\ntours' },
  { value: '650+', label: 'Tourist\nDestination' },
]

const PlacesSection = () => {
  return (
    <section id="discover" className="w-full bg-[#121E1F] py-[100px] lg:py-[140px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6">
        
        {/* SECTION 1: PLACES */}
        <div className="flex flex-col items-center mb-24 lg:mb-32">
          <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-medium leading-tight text-white mb-16 text-center max-w-[500px]">
            Discover The Most
            <br />
            Attractive Places
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 w-full max-w-[1000px]">
            {places.map((place) => (
              <div 
                key={place.title} 
                className={`group relative overflow-hidden w-[260px] md:w-[280px] lg:w-[300px] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${
                  place.isCenter ? 'h-[380px] lg:h-[460px]' : 'h-[320px] lg:h-[380px]'
                }`}
              >
                {/* Background Image */}
                <img 
                  src={place.img} 
                  alt={place.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Text Content */}
                <div className="absolute bottom-[1.5rem] left-[1rem] z-10 w-full pr-4">
                  <h3 className="text-white text-[22px] font-semibold mb-1 tracking-wide">{place.title}</h3>
                  <p className="text-white/70 text-[13px] font-light">{place.tours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: STATS */}
        <div className="flex flex-col items-center">
          <h2 className="text-[26px] md:text-[32px] font-medium leading-tight text-white text-center mb-16 max-w-[400px]">
            With Our Experience
            <br />
            We Will Serve You
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24 lg:gap-32 w-full">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-[40px] md:text-[48px] font-bold text-white leading-none mb-3">
                  {stat.value}
                </span>
                <span className="text-white/60 text-[14px] md:text-[15px] font-light leading-snug whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: EXPERIENCE IMAGES */}
        <div className="mt-20 lg:mt-32 w-full flex justify-center pb-12 lg:pb-24 pr-8 lg:pr-24">
          <div className="relative">
            {/* Left Large Image */}
            <img 
              src={exp1}
              alt="Experience 1"
              className="w-[320px] md:w-[500px] lg:w-[650px] h-[220px] md:h-[350px] lg:h-[450px] object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
            />
            {/* Right overlapping small image */}
            <img 
              src={exp2}
              alt="Experience 2"
              className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-20 lg:-bottom-24 lg:-right-32 w-[160px] md:w-[250px] lg:w-[320px] h-[240px] md:h-[380px] lg:h-[480px] object-cover shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default PlacesSection
