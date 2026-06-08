import { Car } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center">
                <Car className="text-brand-black w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight leading-none">
                  Manohar
                </h2>
                <span className="text-xs text-brand-yellow tracking-widest uppercase font-semibold">
                  Driving School
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional driving education with a focus on safety, confidence, and road responsibility. Government approved driving school in Martur.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors text-white">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors text-white">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors text-white">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-colors text-white">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-brand-yellow transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-yellow transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-brand-yellow transition-colors">Training Courses</a></li>
              <li><a href="#timeline" className="hover:text-brand-yellow transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-brand-yellow transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Beginner Training</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Advanced Driving</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">License Assistance</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Refresher Courses</a></li>
              <li><a href="#" className="hover:text-brand-yellow transition-colors">Defensive Driving</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for driving tips and offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-brand-navy border-y border-l border-white/10 rounded-l-lg px-4 py-2 w-full text-white focus:outline-none text-sm"
              />
              <button className="bg-brand-yellow text-brand-black px-4 py-2 rounded-r-lg font-bold hover:bg-yellow-400 transition-colors text-sm">
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Manohar Driving School. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
