import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-navy relative">
      <div className="absolute inset-0 bg-brand-yellow/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-yellow font-bold uppercase tracking-wider text-sm mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Journey Today
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-brand-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Contact Info */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-brand-black to-brand-navy border-r border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Location</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Main Road, Near RTC Bus Stand,<br />
                    Martur, Prakasam District,<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <Phone className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">
                    <a href="tel:+919876543210" className="hover:text-brand-yellow transition-colors">+91 98765 43210</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                  <p className="text-gray-400 text-sm">
                    <a href="https://wa.me/+919876543210" className="hover:text-green-400 transition-colors">+91 98765 43210</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0 border border-brand-yellow/20">
                  <Clock className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Sat: 6:00 AM - 8:00 PM<br/>Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a href="tel:+919876543210" className="flex-1 bg-brand-yellow text-brand-black flex items-center justify-center gap-2 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="https://wa.me/+919876543210" className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-3 rounded-full font-bold hover:bg-[#20b858] transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-8">Send an Enquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Timing</label>
                <select className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors appearance-none">
                  <option>Morning (6 AM - 10 AM)</option>
                  <option>Afternoon (10 AM - 4 PM)</option>
                  <option>Evening (4 PM - 8 PM)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message (Optional)</label>
                <textarea 
                  rows="3"
                  className="w-full bg-brand-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="w-full bg-brand-yellow text-brand-black flex items-center justify-center gap-2 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                Submit Enquiry <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
