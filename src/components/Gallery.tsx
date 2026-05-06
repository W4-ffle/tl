import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  exteriorNight,
  exteriorModern,
  exteriorDusk,
  receptionCheckin,
  lobbySeating,
  lobbyWide,
  roomSignature,
  roomSignatureDesk,
  roomSignatureView,
  roomDeluxeDouble,
  roomDeluxeDoubleDesk,
  roomDeluxeTwin,
  roomDeluxeTwinWide,
  roomBedDetail,
  roomInRoomTray,
  diningRoom,
  breakfastUlster,
  breakfastUlster2,
  champagneRomantic,
  toiletries,
  bathroom,
} from '../assets/images'

const images = [
  { src: roomSignature,        caption: 'Signature Room',               span: 'col-span-2 row-span-2' },
  { src: receptionCheckin,     caption: 'Reception',                    span: '' },
  { src: exteriorModern,       caption: 'Tara Lodge Belfast',           span: '' },
  { src: roomDeluxeDouble,     caption: 'Deluxe Double Room',           span: '' },
  { src: roomDeluxeTwin,       caption: 'Deluxe Twin Room',             span: '' },
  { src: diningRoom,           caption: 'Breakfast Dining Room',        span: 'col-span-2' },
  { src: breakfastUlster,      caption: 'Ulster Fry',                   span: '' },
  { src: champagneRomantic,    caption: 'Special Occasion Package',     span: '' },
  { src: roomSignatureView,    caption: 'Belfast City View',            span: '' },
  { src: roomDeluxeTwinWide,   caption: 'Deluxe Single Room',           span: '' },
  { src: lobbySeating,         caption: 'Lobby',                        span: '' },
  { src: roomSignatureDesk,    caption: 'Room Desk & Amenities',        span: '' },
  { src: roomInRoomTray,       caption: 'In-Room Coffee Service',       span: '' },
  { src: bathroom,             caption: 'Contemporary En-Suite',        span: '' },
  { src: toiletries,           caption: 'Orla Kiely Toiletries',        span: '' },
  { src: roomDeluxeDoubleDesk, caption: 'Room & Workspace',             span: '' },
  { src: roomBedDetail,        caption: 'Room Detail',                  span: '' },
  { src: exteriorDusk,         caption: 'Tara Lodge Exterior',          span: '' },
  { src: exteriorNight,        caption: 'Tara Lodge at Night',          span: 'col-span-2' },
  { src: breakfastUlster2,     caption: 'Full Ulster Breakfast',        span: '' },
  { src: lobbyWide,            caption: 'Hotel Lobby',                  span: '' },
]

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const prev = () => setLightboxIdx((i) => (i != null ? (i - 1 + images.length) % images.length : null))
  const next = () => setLightboxIdx((i) => (i != null ? (i + 1) % images.length : null))

  return (
    <section id="gallery" className="bg-[#111111] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-5 font-light">Gallery</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              See Tara Lodge<br />
              <span className="italic" style={{ color: '#C09A30' }}>come to life</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/40 font-light mt-5 text-sm">Click any image to enlarge</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <FadeIn key={i} delay={Math.min(i * 0.04, 0.4)} className={img.span || ''}>
              <div
                className="overflow-hidden cursor-zoom-in group relative w-full h-full"
                onClick={() => setLightboxIdx(i)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-[2px] bg-[#8B1A1A] mb-1.5" />
                  <span className="text-white text-xs tracking-widest uppercase">{img.caption}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx != null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white z-10 p-2"
              onClick={() => setLightboxIdx(null)}
            >
              <X size={26} />
            </button>
            <button
              className="absolute left-4 sm:left-8 text-white/50 hover:text-white z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIdx].src}
                alt={images[lightboxIdx].caption}
                className="max-h-[82vh] max-w-[80vw] object-contain"
              />
              <div className="flex items-center gap-3">
                <div className="w-6 h-[2px] bg-[#8B1A1A]" />
                <span className="text-white/60 text-xs tracking-widest uppercase">{images[lightboxIdx].caption}</span>
                <div className="w-6 h-[2px] bg-[#8B1A1A]" />
              </div>
              <p className="text-white/30 text-xs">{lightboxIdx + 1} / {images.length}</p>
            </motion.div>

            <button
              className="absolute right-4 sm:right-8 text-white/50 hover:text-white z-10 p-2"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
