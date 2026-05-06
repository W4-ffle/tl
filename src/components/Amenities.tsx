import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Car, Clock, ShieldCheck, Star, MapPin } from 'lucide-react'
import {
  diningRoom,
  breakfastUlster,
  breakfastUlster2,
  breakfastPancakes,
  toiletries,
  bathroom,
} from '../assets/images'

const amenities = [
  {
    icon: <Wifi size={26} />,
    title: 'Complimentary WiFi',
    description: 'High-speed wireless throughout the property — included in every stay, no limits.',
  },
  {
    icon: <Car size={26} />,
    title: 'Free Secure Parking',
    description: "On-site secure car park at no extra charge. A rare luxury in Belfast's south side.",
  },
  {
    icon: <Clock size={26} />,
    title: '24-Hour Reception',
    description: 'Our professional team is at the desk around the clock for check-in, local tips, or anything you need.',
  },
  {
    icon: <ShieldCheck size={26} />,
    title: 'Award-Winning Staff',
    description: 'Nationally recognised for excellence in housekeeping and reception hospitality.',
  },
  {
    icon: <Star size={26} />,
    title: 'Best Rate Direct',
    description: 'Book directly and we guarantee the best available rate — no booking fees, no markups.',
  },
  {
    icon: <MapPin size={26} />,
    title: 'Unbeatable Location',
    description: "Steps from Queen's University, the Botanic Gardens, and minutes from Belfast city centre.",
  },
]

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
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

export default function Amenities() {
  return (
    <section id="amenities" className="bg-[#111111] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-5 font-light">Every stay includes</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              What's waiting<br />
              <span className="italic" style={{ color: '#C09A30' }}>for you</span>
            </h2>
          </FadeIn>
        </div>

        {/* Amenities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#8B1A1A]/10 mb-24">
          {amenities.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="bg-[#111111] p-10 flex flex-col gap-5 hover:bg-[#181010] transition-colors duration-200 h-full">
                <div style={{ color: '#8B1A1A' }}>{item.icon}</div>
                <h3 className="text-white text-lg font-light">{item.title}</h3>
                <p className="text-white/40 font-light text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Breakfast section */}
        <FadeIn delay={0.1}>
          <div className="mb-6">
            <p className="text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-5 font-light text-center">Award-Winning Breakfast</p>
            <h3 className="text-3xl sm:text-4xl font-light text-white text-center mb-4">
              Start your day right
            </h3>
            <p className="text-white/50 font-light text-center max-w-2xl mx-auto mb-12 text-lg">
              Our breakfast is consistently praised by guests as a highlight of their stay. From a classic Ulster Fry to lighter options — served in our elegant dining room each morning.
            </p>
          </div>
        </FadeIn>

        {/* Breakfast image grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {[
            { img: diningRoom, caption: 'Elegant dining room' },
            { img: breakfastUlster, caption: 'Ulster Fry' },
            { img: breakfastPancakes, caption: 'Pancakes & bacon' },
            { img: breakfastUlster2, caption: 'Full Ulster Breakfast' },
          ].map(({ img, caption }, i) => (
            <FadeIn key={caption} delay={i * 0.1}>
              <div className="overflow-hidden aspect-square group">
                <img
                  src={img}
                  alt={caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-white/30 text-xs tracking-wide text-center mt-2">{caption}</p>
            </FadeIn>
          ))}
        </div>

        {/* Premium touches */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <FadeIn delay={0.1}>
            <div className="overflow-hidden aspect-[16/9]">
              <img src={toiletries} alt="Orla Kiely toiletries" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-white/30 text-xs tracking-wide text-center mt-3">Orla Kiely toiletries in every room</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="overflow-hidden aspect-[16/9]">
              <img src={bathroom} alt="Contemporary en-suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <p className="text-white/30 text-xs tracking-wide text-center mt-3">Contemporary charcoal & white en-suites</p>
          </FadeIn>
        </div>

        {/* Quote strip */}
        <FadeIn delay={0.2}>
          <div className="border-t border-b border-[#8B1A1A]/20 py-10 text-center">
            <blockquote className="text-2xl sm:text-3xl font-light text-white/80 italic max-w-3xl mx-auto">
              "Rooms are fantastic. Very clean and well presented. Staff were lovely and attentive. Breakfast is superb."
            </blockquote>
            <p className="text-[#C09A30] text-xs tracking-widest uppercase mt-5">Christopher, United Kingdom · Booking.com</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
