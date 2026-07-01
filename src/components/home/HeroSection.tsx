import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=2400",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=100&w=2400",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=100&w=2400",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=100&w=2400"
];

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Carousel Background */}
      <div className="absolute inset-0 z-0 bg-slate-900 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 15, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${CAROUSEL_IMAGES[currentImageIndex]}')` }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 z-0 bg-slate-900/30"></div>
      {/* Soft luxury gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20 flex flex-col items-center text-center">
        <motion.div 
          className="max-w-5xl flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 }
            }
          }}
        >
          
          {/* Pre-Header Badge */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            {/* Small decorative circle */}
            <div className="w-1.5 h-1.5 rounded-full border border-luxury-gold animate-pulse"></div>
            <span className="text-xs uppercase tracking-[0.35em] text-luxury-gold font-medium">
              Frameless Glazing Redefined
            </span>
          </motion.div>

          {/* Primary Foundational Heading */}
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } }}
            className="text-5xl md:text-7xl font-serif text-white leading-tight mb-12 drop-shadow-2xl flex flex-col items-center"
          >
            <span className="uppercase tracking-widest mb-2 font-light">Breathtaking Views,</span>
            <span className="text-luxury-gold italic font-normal tracking-wide">Uncompromised Protection</span>
          </motion.h1>

          {/* Primary Call-to-Action Buttons */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 justify-center mt-4"
          >
            <Link
              to="#estimator"
              className="bg-luxury-gold hover:bg-white hover:text-slate-900 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] font-bold text-xs uppercase tracking-widest flex items-center gap-3"
            >
              <Calculator size={16} />
              Calculate Cost Instantly
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-luxury-gold transition-colors duration-300 font-bold text-xs uppercase tracking-widest border-b border-transparent hover:border-luxury-gold pb-1 flex items-center gap-2 group"
            >
              Explore Products
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Trust Indicators / Live Proof Statistics (Bottom Anchored Glass Cards) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        className="absolute bottom-12 left-0 w-full z-10 px-6 flex justify-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          
          {/* Stat 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-luxury-gold/50 transition-colors duration-500 rounded-2xl p-6 flex flex-col items-center text-center group">
            <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold group-hover:text-luxury-gold transition-colors">Starting Price / Sq.ft</p>
            <p className="text-3xl font-display font-light text-white tracking-wide">₹1,800</p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-luxury-gold/50 transition-colors duration-500 rounded-2xl p-6 flex flex-col items-center text-center group">
            <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold group-hover:text-luxury-gold transition-colors">Rain & Wind Tight</p>
            <p className="text-3xl font-display font-light text-white tracking-wide">100%</p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-luxury-gold/50 transition-colors duration-500 rounded-2xl p-6 flex flex-col items-center text-center group">
            <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-2 font-semibold group-hover:text-luxury-gold transition-colors">Warranty Covered</p>
            <p className="text-3xl font-display font-light text-white tracking-wide">10+ Yrs</p>
          </div>

        </div>
      </motion.div>

      {/* Marquee at the Bottom of Hero */}
      <div className="absolute bottom-0 left-0 bg-luxury-gold text-white text-xs py-2 w-full overflow-hidden flex z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex whitespace-nowrap shrink-0"
        >
          {[...Array(20)].map((_, i) => (
            <span key={i} className="mx-8">
              Transform your home with premium India-built glass systems starting from ₹1,800/sq.ft!
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
