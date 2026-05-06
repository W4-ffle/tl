import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  receptionCheckin,
  exteriorModern,
  lobbySeating,
} from '../assets/images'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-[#111111] py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <p className="text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-5 font-light">Welcome to Tara Lodge</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight mb-8">
              36 Cromwell Road,<br />
              <span className="italic" style={{ color: '#C09A30' }}>Belfast BT7 1JW</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 font-light leading-relaxed mb-6 text-lg">
              Tara Lodge sits in the heart of south Belfast, just minutes from Queen's University, the Botanic Gardens, and the vibrant Cathedral Quarter. With 34 luxuriously finished rooms, King Koil beds, and an award-winning breakfast, we're consistently rated Belfast's number one hotel.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-white/60 font-light leading-relaxed mb-10 text-lg">
              Whether you're here on business, a romantic city break, or exploring with friends, Tara Lodge is the perfect base. Free secure parking, complimentary high-speed WiFi, and 24-hour professional staff included in every stay.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-6">
              {[
                { num: '9.3', label: 'Booking.com · Superb' },
                { num: '2,415+', label: 'Guest Reviews' },
                { num: '#1', label: 'Belfast TripAdvisor' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#8B1A1A] pl-4">
                  <div className="text-white text-2xl font-semibold">{item.num}</div>
                  <div className="text-white/40 text-xs tracking-widest uppercase mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Image grid — real property photos */}
        <div className="grid grid-cols-2 gap-4">
          <FadeIn delay={0.15} className="col-span-2">
            <div className="overflow-hidden aspect-[16/9]">
              <img
                src={receptionCheckin}
                alt="Tara Lodge reception"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="overflow-hidden aspect-square">
              <img
                src={exteriorModern}
                alt="Tara Lodge exterior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="overflow-hidden aspect-square">
              <img
                src={lobbySeating}
                alt="Tara Lodge lobby"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
