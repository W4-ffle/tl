import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { champagneRomantic, roomSignatureView } from '../assets/images'

const reviews = [
  {
    name: 'Christopher',
    location: 'United Kingdom',
    text: "Rooms are fantastic. Very clean and well presented. Staff were lovely and attentive. Breakfast is superb.",
    stars: 5,
    source: 'Booking.com',
  },
  {
    name: 'Imogen',
    location: 'United Kingdom',
    text: "I love how close the location was to everything — the train station, bus stops, the city centre. Staff were friendly and kind, and the breakfast was lovely. Overall a wonderful stay.",
    stars: 5,
    source: 'Booking.com',
  },
  {
    name: 'Emer',
    location: 'Ireland',
    text: "Very central to city. Staff were so helpful and friendly. The accommodation was perfect for our 2 night break. A lovely welcome gesture when we arrived of macaroons and bubbly.",
    stars: 5,
    source: 'Booking.com',
  },
  {
    name: 'Rasa',
    location: 'Lithuania',
    text: "Quiet, clean, exceptional hospitality and breakfast. Everything you could ask for.",
    stars: 5,
    source: 'Booking.com',
  },
  {
    name: 'Verified Guest',
    location: 'United Kingdom',
    text: "Second time staying here. Rooms are lovely and comfortable and spotless. Good bathroom facilities and breakfast was lovely. Staff friendly and welcoming.",
    stars: 5,
    source: 'Booking.com',
  },
  {
    name: 'Verified Guest',
    location: 'United Kingdom',
    text: "Best hotel I've stayed in Belfast — and I visit regularly for work. Free parking alone is worth it in the city. Spotless rooms every time.",
    stars: 5,
    source: 'TripAdvisor',
  },
]

const awards = [
  { src: 'https://www.taralodge.com/images/tripadvisor-belfast-no1.png', alt: 'TripAdvisor #1 Belfast' },
  { src: 'https://www.taralodge.com/images/guest-accom-of-year.png', alt: 'Guest Accommodation of the Year' },
  { src: 'https://www.taralodge.com/images/housekeeping.jpg', alt: 'Housekeeping Award' },
  { src: 'https://www.taralodge.com/images/receptionist.png', alt: 'Receptionist Award' },
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

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#161616] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-5 font-light">Guest Reviews</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              Loved by guests,<br />
              <span className="italic" style={{ color: '#C09A30' }}>recognised by all</span>
            </h2>
          </FadeIn>
        </div>

        {/* Score badges */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mb-20">
            <div className="text-center">
              <div className="text-[#C09A30] text-6xl font-light">9.3</div>
              <div className="text-white/50 text-sm font-light tracking-widest uppercase mt-1">Superb</div>
              <div className="text-white/30 text-xs mt-1">2,415 reviews · Booking.com</div>
            </div>
            <div className="w-px h-16 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-[#C09A30] text-6xl font-light">#1</div>
              <div className="text-white/50 text-sm font-light tracking-widest uppercase mt-1">Belfast</div>
              <div className="text-white/30 text-xs mt-1">TripAdvisor Travellers' Choice</div>
            </div>
            <div className="w-px h-16 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-[#8B1A1A] text-[#8B1A1A]" />
                ))}
              </div>
              <div className="text-white/50 text-sm font-light tracking-widest uppercase">5 Star</div>
              <div className="text-white/30 text-xs mt-1">Average guest rating</div>
            </div>
          </div>
        </FadeIn>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-[#1a1a1a] p-7 flex flex-col gap-4 h-full border-t-2 border-[#8B1A1A]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <Star key={j} size={12} className="fill-[#8B1A1A] text-[#8B1A1A]" />
                    ))}
                  </div>
                  <span className="text-white/20 text-xs tracking-wide">{review.source}</span>
                </div>
                <p className="text-white/70 font-light text-sm leading-relaxed flex-1 italic">"{review.text}"</p>
                <div className="border-t border-white/8 pt-4">
                  <div className="text-white text-sm font-medium">{review.name}</div>
                  <div className="text-white/30 text-xs tracking-wide mt-0.5">{review.location}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Special occasion image strip */}
        <FadeIn delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            <div className="overflow-hidden aspect-[16/9]">
              <img src={champagneRomantic} alt="Special occasion at Tara Lodge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden aspect-[16/9]">
              <img src={roomSignatureView} alt="Belfast city view from Signature room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </FadeIn>

        {/* Awards */}
        <FadeIn delay={0.3}>
          <p className="text-center text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-10 font-light">Our Awards</p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {awards.map((award) => (
              <div key={award.alt} className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 overflow-hidden bg-[#1e1e1e] flex items-center justify-center p-2">
                  <img src={award.src} alt={award.alt} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-white/30 text-xs tracking-wide text-center max-w-[100px]">{award.alt}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
