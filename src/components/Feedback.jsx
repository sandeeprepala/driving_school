import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Send, ThumbsUp } from 'lucide-react';

const testimonials = [
  {
    name: "Kiran Kumar",
    course: "Beginner Driving Course",
    rating: 5,
    date: "2 weeks ago",
    text: "Excellent training! The instructors are extremely patient and guided me step-by-step. I was afraid of highways, but now I drive with complete confidence. Highly recommended!"
  },
  {
    name: "Shruti Naidu",
    course: "Two Wheeler Training",
    rating: 5,
    date: "1 month ago",
    text: "I learned scooty balancing in just 10 days! The figure-8 track practice was super helpful. The training ground is safe and spacious. Big thanks to Anil and the team."
  },
  {
    name: "Prakash Raj",
    course: "Advanced Driving Course",
    rating: 5,
    date: "3 weeks ago",
    text: "The dual-control vehicle system makes you feel very safe while learning reverse parking and steep slopes. Professional service and very clean training fleet."
  }
];

const Feedback = () => {
  const [selectedRating, setSelectedRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold uppercase tracking-wider text-sm mb-2 block">
            Student Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-slate-500 text-lg">
            Hear from our successfully licensed students who gained confidence and road mastery through our classes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Testimonial Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brand-blue" />
              Recent Feedbacks
            </h3>
            
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-6 pb-6 lg:pb-0 lg:space-y-6 scrollbar-none -mx-4 px-4 lg:mx-0 lg:px-0">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between w-[280px] xs:w-[320px] lg:w-auto shrink-0 snap-align-center"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                        <span className="text-[10px] text-brand-blue font-bold uppercase tracking-wider bg-brand-blue/10 px-2.5 py-0.5 rounded-full mt-1 inline-block">
                          {t.course}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold">{t.date}</span>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-amber-400 fill-current' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Feedback Form UI Mockup (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200/60 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Share Your Feedback</h3>
            <p className="text-xs text-slate-400 font-semibold uppercase mb-6">Let us know how your training went</p>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 p-6 rounded-2xl text-center"
              >
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                  <ThumbsUp className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-green-800 mb-1">Feedback Submitted!</h4>
                <p className="text-xs text-green-600 leading-relaxed">
                  Thank you for your valuable feedback. It helps us improve our training quality.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="E.g., Anil Kumar"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/15 focus:border-brand-blue transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Course Enrolled</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/15 focus:border-brand-blue transition-all appearance-none">
                      <option>Beginner Driving Course</option>
                      <option>Intermediate Course</option>
                      <option>Advanced Driving Course</option>
                      <option>Refresher Training</option>
                      <option>Two Wheeler Training</option>
                      <option>Four Wheeler Training</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Rating Score</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setSelectedRating(star)}
                        className="transition-transform active:scale-90"
                      >
                        <Star className={`w-8 h-8 ${star <= selectedRating ? 'text-amber-400 fill-current' : 'text-slate-300'}`} />
                      </button>
                    ))}
                    <span className="text-xs text-slate-400 font-bold ml-2">({selectedRating} / 5 Stars)</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Feedback Comments</label>
                  <textarea 
                    rows="4"
                    placeholder="Tell us about the instructor behavior, vehicle conditions, safety controls, etc."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/15 focus:border-brand-blue transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md">
                  Send Feedback <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Feedback;
