import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { diningRoom, champagneRomantic, roomSignatureView, exteriorDusk } from '../assets/images'

const tabs = ['Eat & Drink', 'Bars', 'Sights', 'Leisure & Tours'] as const
type Tab = typeof tabs[number]

const venues: Record<Tab, { name: string; detail: string; dist: string }[]> = {
  'Eat & Drink': [
    { name: 'Shu Restaurant', detail: 'Award-winning fine dining, a south Belfast institution', dist: '4 min taxi' },
    { name: 'Deanes at Queens', detail: "Michael Deane's stylish neighbourhood restaurant with locally sourced ingredients", dist: '2 min walk' },
    { name: 'Ginger Bistro', detail: 'Quirky, chef-led cooking where the food is always the star', dist: '15 min walk' },
    { name: 'Nu Delhi Lounge', detail: 'High-end 100-seat Indian restaurant with cocktails and live music', dist: '15 min walk' },
    { name: 'Scalinis', detail: 'Great-value Italian on Botanic Avenue, reliable and close', dist: '4 min walk' },
    { name: "Deanes Deli", detail: "Relaxed, fun and fabulous casual dining in the city centre", dist: '15 min walk' },
  ],
  'Bars': [
    { name: 'The Empire', detail: "Lively music venue with live bands Thu-Sun, comedy on Tuesdays", dist: '3 min walk' },
    { name: 'The Crown Bar', detail: "Victorian gin palace, National Trust-owned. Unmissable Belfast landmark", dist: '15 min walk' },
    { name: 'The Points', detail: 'Live music seven nights a week. Irish folk and contemporary bands', dist: '5 to 7 min walk' },
    { name: 'The Dirty Onion', detail: 'Authentic traditional Irish music every evening, open fireplace', dist: '10 min taxi' },
    { name: 'The Duke of York', detail: "Popular with locals, traditional music Sundays. Cathedral Quarter icon", dist: '10 min taxi' },
    { name: 'The John Hewitt', detail: "Cultural institution with live music most nights. No TVs, great craic", dist: '15 min walk' },
  ],
  'Sights': [
    { name: "Queen's University", detail: "Charles Lanyon's stunning Victorian Gothic campus, a Belfast icon", dist: '5 min walk' },
    { name: 'Botanic Gardens & Ulster Museum', detail: 'Victorian glasshouse, world-class museum, free entry', dist: '5 min walk' },
    { name: 'Belfast City Hall', detail: 'Grand Edwardian baroque civic building at the heart of the city', dist: '15 min walk' },
    { name: 'Titanic Belfast', detail: "World's leading Titanic visitor experience, 6 floors of history", dist: '2 train stops' },
    { name: 'The Crown Bar', detail: "National Trust Victorian gin palace, one of the finest pub interiors in Ireland", dist: '15 min walk' },
    { name: 'St George\'s Market', detail: 'Award-winning Victorian covered market. Open Fri, Sat & Sun', dist: '15 min walk' },
  ],
  'Leisure & Tours': [
    { name: "Giant's Causeway", detail: "UNESCO World Heritage Site on the 60-mile Causeway Coastal Route", dist: '1.5 hr drive' },
    { name: 'Game of Thrones Locations', detail: 'Northern Ireland has more filming locations than anywhere outside Westeros', dist: 'Day trip' },
    { name: 'Belfast Black Taxi Tour', detail: "Experience Belfast's murals and political history with a knowledgeable local guide", dist: '10 min taxi' },
    { name: "Victoria Square", detail: 'Premier shopping centre with rooftop dome views over the city', dist: '15 min walk' },
    { name: 'W5 Science Centre', detail: 'Interactive science and technology museum, great for all ages', dist: '15 min drive' },
    { name: "Crumlin Road Gaol", detail: 'Victorian prison tours exploring the history of 19th-century Belfast', dist: '10 min taxi' },
  ],
}

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

const catImages: Record<Tab, string> = {
  'Eat & Drink': diningRoom,
  'Bars': champagneRomantic,
  'Sights': roomSignatureView,
  'Leisure & Tours': exteriorDusk,
}

export default function Attractions() {
  const [activeTab, setActiveTab] = useState<Tab>('Eat & Drink')

  return (
    <section id="attractions" className="bg-[#161616] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <FadeIn>
            <p className="text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-5 font-light">Explore Belfast</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
                The city on<br />
                <span className="italic" style={{ color: '#C09A30' }}>your doorstep</span>
              </h2>
              <p className="text-white/40 font-light max-w-sm sm:text-right hidden sm:block text-sm">
                Tara Lodge's south Belfast address puts the best of the city within walking distance.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Image + list layout */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Category image */}
          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={catImages[activeTab]}
                alt={activeTab}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#C09A30] text-xs tracking-[0.3em] uppercase mb-1">{activeTab}</p>
                <p className="text-white text-sm font-light">{venues[activeTab].length} handpicked venues</p>
              </div>
            </div>
          </FadeIn>

          {/* Tab + list */}
          <FadeIn delay={0.15} className="lg:col-span-3 flex flex-col">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer border ${
                    activeTab === tab
                      ? 'bg-[#8B1A1A] border-[#8B1A1A] text-white'
                      : 'border-white/15 text-white/50 hover:border-[#8B1A1A]/50 hover:text-white bg-transparent'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Venue list */}
            <div className="flex flex-col divide-y divide-white/8">
              {venues[activeTab].map((venue, i) => (
                <motion.div
                  key={venue.name}
                  className="py-4 flex items-start justify-between gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <div>
                    <p className="text-white text-sm font-light">{venue.name}</p>
                    <p className="text-white/40 text-xs font-light mt-1 leading-relaxed">{venue.detail}</p>
                  </div>
                  <span className="text-[#C09A30] text-xs tracking-wide whitespace-nowrap border border-[#C09A30]/20 px-2.5 py-1 shrink-0">
                    {venue.dist}
                  </span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Distance callouts */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { place: 'City Centre', dist: '15 min walk' },
              { place: 'Titanic Museum', dist: '2 train stops' },
              { place: "Giant's Causeway", dist: '1.5 hr drive' },
              { place: 'Belfast Airport', dist: '30 min drive' },
            ].map((item) => (
              <div key={item.place} className="text-center border border-white/8 py-6 px-4">
                <div className="text-xl font-light" style={{ color: '#C09A30' }}>{item.dist}</div>
                <div className="text-white/35 text-xs tracking-widest uppercase mt-2">{item.place}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
