import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { BOOKING_URL } from '../lib/booking'
import { exteriorNight } from '../assets/images'

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${exteriorNight})` }}
      />
      {/* Layered overlays for maximum legibility without losing the photo */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#111111]" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#8B1A1A]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8"
        >
          <img
            src="https://www.taralodge.com/images/TaraLodgeLogofooter.png"
            alt="Tara Lodge Belfast"
            className="h-16 sm:h-20 object-contain mx-auto brightness-200"
          />
        </motion.div>

        <motion.p
          className="text-[#C09A30] text-xs tracking-[0.5em] uppercase mb-6 font-light drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Belfast's #1 Rated Hotel · TripAdvisor
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6 drop-shadow-2xl"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.9)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Boutique luxury<br />
          <span className="italic" style={{ color: '#C09A30' }}>in the heart of Belfast</span>
        </motion.h1>

        <motion.p
          className="text-lg text-white font-light leading-relaxed max-w-xl mx-auto mb-10 drop-shadow-lg"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.8)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          34 luxuriously finished rooms, award-winning breakfast, complimentary parking and WiFi. Steps from Queen's University and Belfast city centre.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68 }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#8B1A1A] text-white text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#A52020] transition-colors duration-200"
          >
            Check Availability
          </a>
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white/30 text-white text-sm font-light tracking-[0.15em] uppercase hover:border-[#C09A30] hover:text-[#C09A30] transition-colors duration-200 cursor-pointer bg-transparent"
          >
            Explore
          </button>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-12 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { value: '9.3', label: 'Booking.com Score' },
            { value: '#1', label: 'Belfast TripAdvisor' },
            { value: 'Free', label: 'Parking & WiFi' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-semibold" style={{ color: '#C09A30' }}>{stat.value}</div>
              <div className="text-white/50 text-xs tracking-[0.2em] uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
