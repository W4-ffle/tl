import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wifi, Monitor, Coffee, Bath, Thermometer, Star } from 'lucide-react'
import { BOOKING_URL } from '../lib/booking'
import {
  roomSignature,
  roomDeluxeDouble,
  roomDeluxeTwin,
  roomDeluxeTwinWide,
  roomBedDetail,
} from '../assets/images'

const rooms = [
  {
    title: 'Signature Room',
    subtitle: 'Our Finest',
    description:
      'Our premium offering, finished to exceptional standards. Enjoy Belfast city views, a Nespresso machine, mini-fridge, GHD straighteners, and a 32-inch Smart TV. Everything for a standout stay.',
    image: roomSignature,
    features: [
      { icon: <Monitor size={13} />, label: '32" Smart TV' },
      { icon: <Coffee size={13} />, label: 'Nespresso Machine' },
      { icon: <Thermometer size={13} />, label: 'Mini Fridge' },
      { icon: <Wifi size={13} />, label: 'High-Speed WiFi' },
    ],
    badge: 'Premium',
  },
  {
    title: 'Deluxe Double',
    subtitle: 'Classic Comfort',
    description:
      'Ultra-comfortable King Koil beds dressed in crisp white linen, complemented by rich chocolate and gold soft furnishings and pale oak furniture. Ideal for couples or solo travellers seeking space.',
    image: roomDeluxeDouble,
    features: [
      { icon: <Bath size={13} />, label: 'King Koil Bed' },
      { icon: <Wifi size={13} />, label: 'High-Speed WiFi' },
      { icon: <Coffee size={13} />, label: 'Tea & Coffee' },
      { icon: <Monitor size={13} />, label: 'Smart TV' },
    ],
    badge: null,
  },
  {
    title: 'Deluxe Twin',
    subtitle: 'South Belfast Views',
    description:
      'Two King Koil single beds with views over the leafy avenues of south Belfast. Chocolate and gold soft furnishings and pale oak furniture throughout. Perfect for friends or colleagues.',
    image: roomDeluxeTwin,
    features: [
      { icon: <Bath size={13} />, label: 'Two King Koil Beds' },
      { icon: <Wifi size={13} />, label: 'High-Speed WiFi' },
      { icon: <Coffee size={13} />, label: 'Tea & Coffee' },
      { icon: <Monitor size={13} />, label: 'Smart TV' },
    ],
    badge: null,
  },
  {
    title: 'Deluxe Single',
    subtitle: 'Solo Traveller',
    description:
      'A generous King Koil double bed for the solo traveller, finished with the same rich chocolate and gold furnishings and pale oak furniture, without compromise on quality or comfort.',
    image: roomDeluxeTwinWide,
    features: [
      { icon: <Bath size={13} />, label: 'King Koil Bed' },
      { icon: <Wifi size={13} />, label: 'High-Speed WiFi' },
      { icon: <Coffee size={13} />, label: 'Tea & Coffee' },
      { icon: <Monitor size={13} />, label: 'Smart TV' },
    ],
    badge: null,
  },
  {
    title: 'Annex Room',
    subtitle: 'Cosy & Stylish',
    description:
      'Slightly smaller than our Deluxe rooms but no less stylish, with earthy-toned soft furnishings and the same King Koil comfort and contemporary en-suite. No lift access to Annex rooms.',
    image: roomBedDetail,
    features: [
      { icon: <Bath size={13} />, label: 'En-Suite Bathroom' },
      { icon: <Wifi size={13} />, label: 'High-Speed WiFi' },
      { icon: <Coffee size={13} />, label: 'Tea & Coffee' },
      { icon: <Monitor size={13} />, label: 'Smart TV' },
    ],
    badge: 'Ground Level',
  },
]

const allRoomFeatures = [
  'King Koil beds with white linen',
  'Complimentary high-speed WiFi',
  'Smart TV',
  'Mineral water on arrival',
  'Tea & coffee facilities',
  'Security safe',
  'Contemporary en-suite',
  'Orla Kiely toiletries',
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

export default function Rooms() {
  return (
    <section id="rooms" className="bg-[#161616] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-5 font-light">Accommodation</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              34 rooms, five styles<br />
              <span className="italic" style={{ color: '#C09A30' }}>all finished to perfection</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/50 font-light mt-6 max-w-xl mx-auto text-lg">
              Every room features King Koil beds, contemporary charcoal and white en-suites, complimentary WiFi, and Orla Kiely toiletries.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center mb-16">
            {allRoomFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2 text-white/50 text-xs tracking-wide">
                <Star size={10} className="text-[#8B1A1A] fill-[#8B1A1A]" />
                {f}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Featured Signature room */}
        <FadeIn delay={0.1} className="mb-6">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden hover:ring-1 hover:ring-[#8B1A1A]/40 transition-all duration-300 bg-[#1e1e1e]">
            <div className="overflow-hidden aspect-[4/3] lg:aspect-auto relative">
              <img
                src={rooms[0].image}
                alt={rooms[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#8B1A1A] text-white text-xs tracking-[0.2em] uppercase px-3 py-1.5">
                  {rooms[0].badge}
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <p className="text-[#C09A30] text-xs tracking-[0.3em] uppercase mb-3">{rooms[0].subtitle}</p>
              <h3 className="text-3xl font-light text-white mb-5">{rooms[0].title}</h3>
              <p className="text-white/55 font-light text-sm leading-relaxed mb-8">{rooms[0].description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {rooms[0].features.map((f) => (
                  <span key={f.label} className="flex items-center gap-2 text-xs text-[#C09A30]/80 border border-[#C09A30]/20 px-3 py-1.5 tracking-wide">
                    {f.icon} {f.label}
                  </span>
                ))}
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center py-3 px-6 bg-[#8B1A1A] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#A52020] transition-colors duration-200 self-start"
              >
                Book Signature Room
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Remaining 4 rooms */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rooms.slice(1).map((room, i) => (
            <FadeIn key={room.title} delay={i * 0.1} className="group">
              <div className="bg-[#1e1e1e] overflow-hidden flex flex-col h-full hover:ring-1 hover:ring-[#8B1A1A]/30 transition-all duration-300">
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {room.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#111111]/80 text-[#C09A30] text-xs tracking-wide uppercase px-2 py-1">
                        {room.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[#C09A30] text-xs tracking-[0.2em] uppercase">{room.subtitle}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-light text-white mb-3">{room.title}</h3>
                  <p className="text-white/45 font-light text-xs leading-relaxed mb-5 flex-1">{room.description}</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-2.5 border border-[#8B1A1A] text-[#8B1A1A] text-xs tracking-[0.15em] uppercase hover:bg-[#8B1A1A] hover:text-white transition-all duration-200"
                  >
                    Book
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 border border-[#8B1A1A]/25 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[#C09A30] text-sm font-semibold tracking-wide">Best Rate Guarantee</span>
              <p className="text-white/40 text-sm font-light mt-1">Book direct with us for the lowest available price, always.</p>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#8B1A1A] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#A52020] transition-colors whitespace-nowrap"
            >
              Check Availability
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
