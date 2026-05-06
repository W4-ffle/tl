import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'
import { BOOKING_URL } from '../lib/booking'

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

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111111] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <p className="text-[#C09A30] text-xs tracking-[0.4em] uppercase mb-5 font-light">Get In Touch</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              We'd love to<br />
              <span className="italic" style={{ color: '#C09A30' }}>hear from you</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            {/* Map */}
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden border border-white/8 aspect-[16/9]">
                <iframe
                  title="Tara Lodge Belfast location"
                  src="https://maps.google.com/maps?q=Tara+Lodge,+36+Cromwell+Road,+Belfast,+BT7+1JW&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#8B1A1A]/40 flex items-center justify-center text-[#8B1A1A] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Address</p>
                  <p className="text-white font-light">36 Cromwell Road</p>
                  <p className="text-white font-light">Belfast, N. Ireland BT7 1JW</p>
                  <a
                    href="https://maps.google.com/?q=Tara+Lodge+36+Cromwell+Road+Belfast"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C09A30] text-xs tracking-wide mt-2 hover:text-white transition-colors"
                  >
                    View on Google Maps <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#8B1A1A]/40 flex items-center justify-center text-[#8B1A1A] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Phone</p>
                  <a href="tel:+442890590900" className="text-white font-light hover:text-[#C09A30] transition-colors">
                    +44 (0)28 9059 0900
                  </a>
                  <p className="text-white/30 text-xs mt-1">Available 24 hours</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex gap-5 items-start">
                <div className="w-10 h-10 border border-[#8B1A1A]/40 flex items-center justify-center text-[#8B1A1A] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Email</p>
                  <a href="mailto:info@taralodge.com" className="text-white font-light hover:text-[#C09A30] transition-colors">
                    info@taralodge.com
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Booking panel */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-5">
              {/* Direct booking CTA */}
              <div className="bg-[#8B1A1A] p-8 text-center flex flex-col gap-5">
                <p className="text-white/80 text-xs tracking-[0.3em] uppercase">Best Rate Guaranteed</p>
                <h3 className="text-white text-2xl font-light">Ready to book?</h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Book directly through our reservation system for the best available rate. No booking fees, instant confirmation.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 bg-white text-[#8B1A1A] text-sm font-semibold tracking-[0.15em] uppercase hover:bg-[#f5f0eb] transition-colors duration-200"
                >
                  Check Availability & Book
                </a>
              </div>

              {/* Or email enquiry */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.currentTarget
                  const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || ''
                  const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || ''
                  window.location.href = `mailto:info@taralodge.com?subject=Room Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`
                }}
                className="flex flex-col gap-4 pt-2"
              >
                <p className="text-white/40 text-xs tracking-widest uppercase text-center">Or send an enquiry</p>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="bg-[#1e1e1e] border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm font-light focus:outline-none focus:border-[#8B1A1A]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="bg-[#1e1e1e] border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm font-light focus:outline-none focus:border-[#8B1A1A]/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-xs tracking-widest uppercase">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Any questions or special requests?"
                    className="bg-[#1e1e1e] border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm font-light focus:outline-none focus:border-[#8B1A1A]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="py-3.5 border border-[#8B1A1A] text-[#8B1A1A] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#8B1A1A] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
