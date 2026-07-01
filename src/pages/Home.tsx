import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Wind,
  Maximize2,
  Zap,
  Home as HomeIcon,
  Layers,
  Building2,
  Coffee,
  Sparkles,
  Monitor,
  Leaf
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
          alt="Frameless Panoramic Living"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2
              }
            }
          }}
          className="max-w-3xl flex flex-col items-center"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 md:w-16 h-[1px] bg-luxury-gold"></div>
            <span className="text-luxury-gold font-bold uppercase tracking-[0.4em] text-[10px]">
              Frameless Glazing Redefined
            </span>
            <div className="w-8 md:w-16 h-[1px] bg-luxury-gold"></div>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[1.1] mb-8 font-light drop-shadow-lg"
          >
            Breathtaking <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-white to-white">Views</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl leading-loose"
          >
            Infiwin manufactures premier Slide & Turn frameless glass balcony enclosures. Extend your home space with architectural glass walls.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-luxury-gold text-black px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105">
              Calculate Cost Instantly <ArrowRight size={14} />
            </button>
            <button className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105">
              Explore Products
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4">
        <span className="[writing-mode:vertical-rl] text-white/40 uppercase tracking-[0.5em] text-[10px]">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
      </div>
    </section>
  );
};

export const DesignGrid = () => {
  const usages = [
    { title: "BALCONY", category: "RESIDENTIAL", icon: <HomeIcon size={18} className="text-white" />, img: "https://i.postimg.cc/1tm1yGXW/Chat-GPT-Image-Jun-29-2026-12-04-16-PM.png", desc: "Enjoy panoramic views and protect your balcony from dust, wind, and rain with our premium frameless glass enclosures." },
    { title: "INT. PARTITION", category: "RESIDENTIAL", icon: <Layers size={18} className="text-white" />, img: "https://i.postimg.cc/QxWwG4S3/Chat-GPT-Image-Jun-29-2026-12-06-24-PM.png", desc: "Create flexible living spaces with sleek interior glass partitions without compromising natural light." },
    { title: "COMMERCIAL", category: "COMMERCIAL", icon: <Building2 size={18} className="text-white" />, img: "https://i.postimg.cc/YS8yfJ2Q/Chat-GPT-Image-Jun-29-2026-12-07-47-PM.png", desc: "Enhance your business environment with elegant, sound-dampening commercial glass structural solutions." },
    { title: "EXTERIOR", category: "RESIDENTIAL", icon: <Wind size={18} className="text-white" />, img: "https://i.postimg.cc/59Hbympn/Chat-GPT-Image-Jun-29-2026-12-11-13-PM.png", desc: "Upgrade your facade with robust exterior glass that effortlessly withstands harsh weather conditions." },
    { title: "TERRACE", category: "RESIDENTIAL", icon: <Coffee size={18} className="text-white" />, img: "https://i.postimg.cc/DwhTC3Fn/Chat-GPT-Image-Jun-29-2026-12-12-32-PM.png", desc: "Transform your open terrace into a year-round usable space with seamless, fully retractable glass systems." },
    { title: "FARM HOUSE", category: "RESIDENTIAL", icon: <Sparkles size={18} className="text-white" />, img: "https://i.postimg.cc/4ycD5BSR/Chat-GPT-Image-Jun-29-2026-12-17-17-PM.png", desc: "Blend the indoors with the outdoors perfectly for your rustic farmhouse setting with wide panoramic panels." },
    { title: "OFFICE SPACE", category: "COMMERCIAL", icon: <Monitor size={18} className="text-white" />, img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80", desc: "Modernize office interiors with frameless glass that promotes a collaborative, well-lit working environment." },
    { title: "GARDEN", category: "RESIDENTIAL", icon: <Leaf size={18} className="text-white" />, img: "https://i.postimg.cc/g2sfNwN0/Chat-GPT-Image-Jun-29-2026-12-23-17-PM.png", desc: "Enclose your garden spaces beautifully, keeping the natural feel intact while staying protected from elements." }
  ];

  return (
    <section className="py-32 bg-[#fafafa] px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className="text-center md:text-left w-full mb-16">
          <h2 className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">Interactive Recommendation</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 font-light">Explore Recommended Usages</h3>
          <p className="text-slate-500 font-light text-[15px] max-w-2xl leading-loose">
            Tap on an application below to immediately highlight the exact glass system variant recommended for that architectural space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 w-full">
          {usages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative h-[350px] md:h-[450px] rounded-sm overflow-hidden cursor-pointer border border-black/5 hover:border-black/10 transition-all hover:shadow-xl hover:shadow-black/5 bg-white flex flex-col"
            >
              <div className="w-full h-full group-hover:h-[60%] transition-all duration-500 relative overflow-hidden shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-60"></div>

                {/* Top Right Icon */}
                <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-90 group-hover:opacity-0">
                  {item.icon}
                </div>

                <div className="absolute bottom-6 left-6 right-6 transition-opacity duration-300 group-hover:opacity-0">
                  <p className="text-luxury-gold text-[10px] font-bold uppercase tracking-widest mb-1.5">{item.category}</p>
                  <h4 className="text-white text-3xl font-serif font-light tracking-wide leading-tight">{item.title}</h4>
                </div>
              </div>

              {/* Reveal Content on Hover */}
              <div className="w-full h-0 group-hover:h-[40%] transition-all duration-500 bg-white px-8 flex flex-col justify-center shrink-0">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-luxury-gold text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</p>
                  <h4 className="text-slate-900 text-2xl font-serif font-light tracking-wide leading-tight mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="bg-transparent text-slate-900 border border-slate-900 px-10 py-5 rounded-sm uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 hover:text-white transition-all flex items-center gap-3 mt-8">
          Get Custom Enclosure Quote For Your Space <ArrowRight size={14} />
        </button>

      </div>
    </section>
  );
};

const Features = () => {
  const specs = [
    {
      title: "Unobstructed Views",
      desc: "No vertical frames between glass panels ensures completely transparent viewports and expanded natural light.",
      features: ["100% Opening Potential", "Toughened Safety Glass", "No Vertical Frames"],
      img: "/unobstructed_views.png",
      icon: <Maximize2 className="text-luxury-gold" />
    },
    {
      title: "100% Weather Shield",
      desc: "Blocks dust, wind, debris and monsoon rains. Custom rubber profiles keep balconies pristine through extreme climates.",
      features: ["Monsoon Proof", "Dust Protection", "Wind Resistant"],
      img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800",
      icon: <Wind className="text-luxury-gold" />
    },
    {
      title: "Noise Dampening",
      desc: "Attenuate high-decibel street noise. Convert chaotic urban balconies into tranquil spaces for focus and relaxation.",
      features: ["Acoustic Isolation", "Tranquil Interiors", "Urban Shield"],
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="text-luxury-gold" />
    }
  ];

  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[10px] text-slate-400 uppercase tracking-[0.3em] mb-6">Our Approach</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-slate-900 font-light">Design. Craft. Deliver. Perfect.</h3>
        </div>

        <div className="space-y-24">
          {specs.map((spec, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 rounded-sm overflow-hidden border border-black/5"
              >
                <img
                  src={spec.img}
                  alt={spec.title}
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="mb-6">{spec.icon}</div>
                <h4 className="text-3xl font-serif mb-4 italic">{spec.title}</h4>
                <p className="text-slate-500 mb-8 text-lg font-light leading-relaxed">{spec.desc}</p>
                <ul className="space-y-4">
                  {spec.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  const products = [
    {
      title: "Slide & Turn System",
      category: "Balcony Enclosure",
      badge: "BEST SELLER",
      img: "/slide_turn.png"
    },
    {
      title: "Telescopic Slider System",
      category: "Super Smooth Gliding",
      img: "/telescopic_slider.png"
    },
    {
      title: "Centre Open System",
      category: "Split-Fold Symmetrical",
      img: "/centre_open.png"
    },
    {
      title: "Bi-fold Glass System",
      category: "Premium Partition",
      img: "/bifold_glass.png"
    },
    {
      title: "2 Track Slider",
      category: "Doors & Windows",
      img: "/two_track_slider.png"
    },
    {
      title: "3 Track Slider",
      category: "Doors & Windows",
      img: "/three_track_slider.png"
    }
  ];

  return (
    <section id="products" className="py-32 bg-[#fafafa] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">Our Product Portfolio</h2>
            <h3 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 font-light">Explore All Architectural Glass Offerings</h3>
            <p className="text-slate-500 font-light text-[15px] leading-loose">
              Select from our 6 major structural builds for standard window heights, door frames, or interior partition boundaries.
            </p>
          </div>
          <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-luxury-gold border-b border-luxury-gold pb-1 hover:text-slate-900 hover:border-slate-900 transition-colors whitespace-nowrap">
            Explore Technical Specs <ArrowRight size={14} className="-rotate-45" />
          </button>
        </div>

        <div className="flex overflow-hidden w-full pb-10 relative">
          {/* We render two identical blocks to create the seamless infinite scroll effect */}
          {[...Array(2)].map((_, groupIndex) => (
            <motion.div
              key={groupIndex}
              animate={{ x: ["0%", "-100%"] }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              className="flex shrink-0 gap-6 pr-6"
            >
              {products.map((p, idx) => (
                <div
                  key={`${groupIndex}-${idx}`}
                  className="relative aspect-[3/4] rounded-sm overflow-hidden group cursor-pointer border border-black/5 w-[85vw] sm:w-[350px] lg:w-[400px] shrink-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  </motion.div>

                  {/* Badge */}
                  {p.badge && (
                    <div className="absolute top-4 left-4 bg-luxury-gold text-white text-[9px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-md z-10">
                      {p.badge}
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                    <p className="text-luxury-gold text-[9px] font-bold uppercase tracking-widest mb-1">{p.category}</p>
                    <h4 className="text-white text-2xl font-serif font-light tracking-wide">{p.title}</h4>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ProductFeatureSection } from "../components/home/ProductFeatureSection";
import { FrameColorSection } from "../components/home/FrameColorSection";
import { CostEstimatorSection } from "../components/home/CostEstimatorSection";
import { ReviewsSection } from "../components/home/ReviewsSection";
import { CTASection } from "../components/home/CTASection";

export default function Home() {
  return (
    <div className="pt-0"> {/* pt-0 because hero handles its own overflow and transparency at top */}
      <Hero />
      <DesignGrid />
      <ProductFeatureSection />
      <FrameColorSection />
      <Features />
      <ProductShowcase />
      <CostEstimatorSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
}
