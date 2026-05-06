import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BOOKING_URL } from '../lib/booking'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Attractions', href: '#attractions' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLink = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#111111]/96 backdrop-blur-md border-b border-[#8B1A1A]/30'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Brand-red top accent bar */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#8B1A1A] to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-3">
          {/* Logo — uses actual site logo image */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="block"
          >
            <img
              src="https://www.taralodge.com/images/TaraLodgeLogofooter.png"
              alt="Tara Lodge Belfast"
              className="h-10 object-contain brightness-200"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-xs text-[#d4cfc9] hover:text-[#C09A30] tracking-[0.15em] uppercase font-light transition-colors duration-200 cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+442890590900"
              className="flex items-center gap-2 text-xs text-[#C09A30] hover:text-white transition-colors"
            >
              <Phone size={13} />
              <span className="tracking-wide">+44 28 9059 0900</span>
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#8B1A1A] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#A52020] transition-colors duration-200"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#111111]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-7"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src="https://www.taralodge.com/images/TaraLodgeLogofooter.png"
              alt="Tara Lodge"
              className="h-12 object-contain brightness-200 mb-4"
            />
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-xl text-white hover:text-[#C09A30] tracking-[0.2em] uppercase font-light transition-colors cursor-pointer bg-transparent border-none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-[#8B1A1A] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#A52020]"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
