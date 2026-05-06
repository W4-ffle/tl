import { BOOKING_URL } from '../lib/booking'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0d0d0d] border-t border-[#8B1A1A]/20 px-6 py-16">
      {/* Red top accent */}
      <div className="h-[3px] bg-[#8B1A1A] mb-16 -mx-6" />

      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://www.taralodge.com/images/TaraLodgeLogofooter.png"
              alt="Tara Lodge Belfast"
              className="h-12 object-contain brightness-200 mb-4"
            />
            <p className="text-white/30 font-light text-sm leading-relaxed">
              Boutique luxury hotel in south Belfast. Consistently rated #1 on TripAdvisor.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 px-5 py-2.5 bg-[#8B1A1A] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#A52020] transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Rooms', href: '#rooms' },
                { label: 'Amenities', href: '#amenities' },
                { label: 'Gallery', href: '#gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/45 hover:text-[#C09A30] text-sm font-light transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-5">Explore</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Attractions', href: '#attractions' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Special Offers', href: '#rooms' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/45 hover:text-[#C09A30] text-sm font-light transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase mb-5">Contact</p>
            <ul className="flex flex-col gap-3 text-sm font-light">
              <li>
                <span className="text-white/30 block text-xs mb-0.5">Address</span>
                <span className="text-white/55">36 Cromwell Road, Belfast BT7 1JW</span>
              </li>
              <li>
                <span className="text-white/30 block text-xs mb-0.5">Phone (24hrs)</span>
                <a href="tel:+442890590900" className="text-white/55 hover:text-[#C09A30] transition-colors">
                  +44 (0)28 9059 0900
                </a>
              </li>
              <li>
                <span className="text-white/30 block text-xs mb-0.5">Email</span>
                <a href="mailto:info@taralodge.com" className="text-white/55 hover:text-[#C09A30] transition-colors">
                  info@taralodge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#8B1A1A]/25 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-light">
            © {currentYear} Tara Lodge Belfast. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#8B1A1A]" />
            <span className="text-white/20 text-xs">Best Rate Guaranteed on Direct Bookings</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
