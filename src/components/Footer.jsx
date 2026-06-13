import { Car } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center shadow-md">
                <Car className="text-slate-900 w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-none">
                  Sai Sandya
                </h2>
                <span className="text-xs text-brand-blue tracking-widest uppercase font-semibold">
                  Motor Driving School
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Providing premium driving education with a focus on safety, defensive techniques, and license acquisition. Approved school serving Kandlakoya and nearby regions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-600">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-600">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-600">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-600">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-500 font-semibold">
              <li><a href="#home" className="hover:text-brand-blue transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-brand-blue transition-colors">Training Courses</a></li>
              <li><a href="#timeline" className="hover:text-brand-blue transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-brand-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Our Programs</h3>
            <ul className="space-y-3 text-sm text-slate-500 font-semibold">
              <li><a href="#courses" className="hover:text-brand-blue transition-colors">Beginner Package</a></li>
              <li><a href="#courses" className="hover:text-brand-blue transition-colors">Intermediate Course</a></li>
              <li><a href="#courses" className="hover:text-brand-blue transition-colors">Advanced Training</a></li>
              <li><a href="#courses" className="hover:text-brand-blue transition-colors">Two-Wheeler Class</a></li>
              <li><a href="#courses" className="hover:text-brand-blue transition-colors">Four-Wheeler Academy</a></li>
            </ul>
          </div>

          {/* Contact Details in Footer */}
          <div>
            <h3 className="text-slate-900 font-bold mb-6">Contact Info</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              <strong>Location:</strong> Main Road, Kandlakoya Junction, Rangareddy, Telangana.
            </p>
            <p className="text-slate-500 text-sm mb-2">
              <strong>Phone:</strong> <a href="tel:+919000111697" className="hover:text-brand-blue transition-colors">+91 90001 11697</a>
            </p>
            <p className="text-slate-500 text-sm">
              <strong>WhatsApp:</strong> <a href="https://wa.me/+919000111697" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">+91 90001 11697</a>
            </p>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Sai Sandya Motor Driving School. All rights reserved.</p>
          <div className="flex gap-4 font-semibold text-slate-500">
            <a href="#" className="hover:text-brand-blue transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-all">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
