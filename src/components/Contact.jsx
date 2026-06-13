import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-50 relative">
      <div className="absolute inset-0 bg-brand-blue/[0.01]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-slate-500 text-lg">
            Ready to get behind the wheel? Reach out to us or drop an enquiry and our team will get back to you immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xl">
          {/* Contact Info */}
          <div className="p-5 xs:p-8 md:p-12 bg-gradient-to-br from-white to-slate-50 border-r border-slate-100 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 border border-brand-blue/20">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Our Location</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Main Road, Near Kandlakoya Junction,<br />
                      Kandlakoya, Medchal-Malkajgiri District,<br />
                      Telangana, India - 501401
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 border border-brand-blue/20">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Call Us</h4>
                    <p className="text-slate-500 text-sm">
                      <a href="tel:+919000111697" className="hover:text-brand-blue font-semibold transition-colors">+91 90001 11697</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-200">
                    <MessageCircle className="w-5 h-5 text-green-600 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">WhatsApp</h4>
                    <p className="text-slate-500 text-sm">
                      <a href="https://wa.me/+919000111697" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 font-semibold transition-colors">+91 90001 11697</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0 border border-brand-blue/20">
                    <Clock className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">Working Hours</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Mon - Sat: 6:00 AM - 8:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 shadow-inner mb-6 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.095034608381!2d78.48421867516858!3d17.598216396798083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f5223e75e11%3A0xe54d334585f1c990!2sKandlakoya%2C%20Telangana%20501401!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Sandhya Driving School Location Map"
              ></iframe>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a href="tel:+919000111697" className="flex-1 bg-brand-blue text-white flex items-center justify-center gap-2 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-sm">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="https://wa.me/+919000111697" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white flex items-center justify-center gap-2 py-3 rounded-full font-bold hover:bg-[#20b858] transition-colors shadow-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-5 xs:p-8 md:p-12 bg-white">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send an Enquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  placeholder="+91"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Preferred Timing</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none">
                    <option>Morning Batch (6:00 AM - 10:00 AM)</option>
                    <option>Noon Batch (10:00 AM - 4:00 PM)</option>
                    <option>Evening Batch (4:00 PM - 8:00 PM)</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    ▼
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2">Message (Optional)</label>
                <textarea 
                  rows="3"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
                  placeholder="Any questions about licensing or package rates?"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-blue text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
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
