import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  ShieldCheck, 
  CheckCircle2,
  Eye
} from "lucide-react";

export default function About() {
  const milestones = [
    { year: "2010", num: "10", title: "The Beginning", desc: "Founded with a vision to revolutionize the glass facade industry with premium solutions." },
    { year: "2015", num: "15", title: "Pioneering Tech", desc: "Introduced our signature slide & fold system that disrupted the domestic market." },
    { year: "2018", num: "18", title: "Commercial Expansion", desc: "Expanded our portfolio to serve large scale commercial projects and office spaces." },
    { year: "2023", num: "23", title: "Global Standards", desc: "Reached milestone of delivering projects across 15+ states with global quality standards." }
  ];

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col lg:flex-row pt-24 min-h-screen lg:min-h-0 lg:h-[700px]">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" 
            alt="About Infiwin" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-900 p-12 lg:p-24">
          <div className="text-left max-w-xl">
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Our Heritage</p>
            <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-6">ABOUT INFIWIN</h1>
            <p className="text-lg md:text-xl font-light text-slate-300 leading-relaxed">
              Crafting Premium Frameless Glass Solutions Aligned with Global Standards of Architectural Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Boundaries Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900 mb-8">Beyond Boundaries</h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>
                Infiwin System is a pioneer in developing India's Frameless Slide and Fold System Industry. We have introduced our Smart And Slim Glass System that transformed architectural designing worldwide one breathtaking view at a time.
              </p>
              <p>
                INFIWIN is a premium Frameless Glass Doors and Windows System for Exterior and Interior applications. Our innovative window, door and motorized glass wall systems are designed to maximize the efficiency of your existing space seamlessly and silently, carefully maintaining the traditional premium aesthetic without distracting without your outdoor view.
              </p>
              <p>
                Infiwin's glass enclosures blend with your internal dimensions, to open the space to bring the outside indoors without losing connection to nature while providing protection from the elements. Whether you need a warm retreat, a stylish entertainment area, or a barrier without a physical barrier, Infiwin gives house its true, timeless expression of luxury and functionality for outdoor living.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
              alt="Balcony View" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* A Decade of Excellence Section */}
      <section className="py-32 px-6 bg-slate-50 text-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 relative z-10">
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-6xl font-serif italic text-slate-900">A Decade of Excellence</h2>
          </div>
          
          <div ref={timelineRef} className="max-w-5xl mx-auto relative">
            {/* Vertical Line Inactive */}
            <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[1px] bg-luxury-gold/20 md:-translate-x-1/2"></div>
            {/* Vertical Line Active */}
            <motion.div 
              className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-luxury-gold md:-translate-x-1/2 origin-top shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"
              style={{ scaleY: scrollYProgress }}
            ></motion.div>
            
            <div className="space-y-32 md:space-y-0">
              {milestones.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div 
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row md:h-[400px]`}
                  >
                    {/* Timeline Dot */}
                    <motion.div 
                      variants={{
                        hidden: { backgroundColor: "#e2e8f0", boxShadow: "0px 0px 0px rgba(212,175,55,0)" },
                        visible: { backgroundColor: "#d4af37", boxShadow: "0px 0px 20px rgba(212,175,55,0.6)", transition: { duration: 0.4 } }
                      }}
                      className="absolute left-[2rem] md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-20 outline outline-4 outline-slate-50"
                    >
                    </motion.div>

                    {/* Content Half */}
                    <div className={`w-full md:w-1/2 flex flex-col justify-center pl-16 md:pl-0 ${isEven ? 'md:pr-24 md:items-end md:text-right' : 'md:pl-24 md:items-start md:text-left'} relative`}>

                      
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
                        }}
                        className="relative z-10"
                      >
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="text-luxury-gold text-lg font-bold tracking-widest">{m.year}</span>
                          <span className="hidden md:block w-12 h-[1px] bg-luxury-gold/50"></span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif italic text-slate-900 mb-6">{m.title}</h3>
                        <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base max-w-md">{m.desc}</p>
                      </motion.div>
                    </div>
                    
                    {/* Empty Half */}
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Infiwin Difference Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-4">Innovation & Design</p>
            <h2 className="text-4xl md:text-5xl font-serif italic text-slate-900">The Infiwin Difference</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-serif italic text-slate-900 mb-4">Easy Maintenance & Zero<br/>Cleaning Cost</h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                Designed by experts to minimize industry downtime and maximize efficiency. Smartly engineered for zero maintenance and cost-effective operations.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-serif italic text-slate-900 mb-4">Simple Operation</h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                Engineered with smooth sliding mechanics requiring no physical force to operate. Enjoy a breezy, hands-free sliding experience with just a gentle push.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 text-luxury-gold border border-luxury-gold/20 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-serif italic text-slate-900 mb-4">Unobstructed<br/>Panoramic Views</h3>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                Our frameless glass system completely eliminates visual barriers, providing a seamless transition between your indoor and outdoor spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering the Future Section */}
      <section className="py-32 px-6 bg-slate-900 text-white relative rounded-t-[3rem] overflow-hidden">
        {/* Background Overlay or Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" 
            alt="Office Glass" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[10px] text-luxury-gold uppercase tracking-[0.3em] mb-6">Our Vision</p>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">Engineering the Future of<br/>Living Spaces</h2>
          <p className="text-white/70 font-light text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            We are on a mission to redefine the boundary between our living spaces and outdoors. An open, airy transition into the surrounding environment protected entirely by a hybrid, intelligent glass engineering.
          </p>
          <button className="bg-luxury-gold text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-colors shadow-lg shadow-black/10">
            Explore Products
          </button>
        </div>
      </section>
    </div>
  );
}
