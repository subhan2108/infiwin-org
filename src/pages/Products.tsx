import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Settings,
  ShieldCheck,
  Activity,
  Maximize2
} from "lucide-react";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    { title: "Guillotine Glass System", category: "Balcony System", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_50_39%20PM.png" },
    { title: "Telescopic Sliders", category: "Internal Partition", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_15_29%20PM.png" },
    { title: "Synchronized Systems", category: "Internal Partition", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_29_01%20PM.png" },
    { title: "Top Hang Bi Fold", category: "Internal Partition", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2012_27_22%20PM.png" },
    { title: "Sliding Windows & Doors", category: "Doors & Windows", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2003_25_52%20PM.png" },
    { title: "Openable Windows & Doors", category: "Doors & Windows", img: "https://infiwin-new.vercel.app/infiwin%20images%20new/ChatGPT%20Image%20May%2023,%202026,%2002_30_38%20PM.png" },
    { title: "Foldable Doors (Bi Fold)", category: "Doors & Windows", img: "/foldable_doors.png" },
    { title: "90 Degree Encloser", category: "Bathroom", img: "/ninety_degree.png" },
    { title: "Sliding Enclouser", category: "Bathroom", img: "/sliding_enclosure.png" },
    { title: "Openable Door", category: "Bathroom", img: "/openable_door.png" },
    { title: "Fixed Partition", category: "Bathroom", img: "/fixed_partition.png" },
    { title: "Slide & Turn", category: "Balcony System", img: "/slide_turn.png" }
  ];

  const categories = ["All", "Balcony System", "Internal Partition", "Doors & Windows", "Bathroom"];
  const filteredProducts = activeFilter === "All" ? products : products.filter(p => p.category === activeFilter);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Structural Excellence</h1>
            <h2 className="text-6xl md:text-8xl font-serif text-slate-900 leading-tight italic mb-8">Precision <br /> <span className="not-italic">Engineered</span></h2>
            <p className="max-w-2xl text-slate-500 font-light text-lg leading-relaxed mb-10">
              Experience the pinnacle of precision-engineered glass systems. Our collection defines the boundaries of transparency and structural innovation.
            </p>
          </motion.div>
        </div>
        {/* Background decorative element */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-slate-200 rounded-full opacity-50 pointer-events-none"></div>
      </section>

      {/* Signature Range */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Signature Range</h3>
              <h4 className="text-4xl font-serif italic text-slate-900">Highly Engineered Systems</h4>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-sm text-sm tracking-wide transition-all duration-300 ${activeFilter === cat
                      ? "bg-luxury-gold text-white font-medium shadow-md"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProducts.map((p, idx) => (
              <motion.div
                key={`${p.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6 shadow-md transition-shadow hover:shadow-xl relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-sm">
                    {p.category}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <h5 className="text-2xl font-serif italic group-hover:text-luxury-gold transition-colors">{p.title}</h5>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-luxury-gold transform translate-x-0 group-hover:translate-x-2 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="px-6 py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-sm font-medium text-white/40 uppercase tracking-[0.3em] mb-4">Configurations & Variants</h3>
              <h4 className="text-5xl font-serif mb-12 italic">Structural <span className="not-italic">Integration</span></h4>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="mt-1 text-luxury-gold"><Maximize2 size={24} /></div>
                  <div>
                    <h5 className="text-xl font-medium mb-3">Full Length</h5>
                    <p className="text-white/50 font-light leading-relaxed">
                      Complete floor-to-ceiling integration designed for grand entrances and seamless facade transitions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="mt-1 text-luxury-gold"><Layers size={24} /></div>
                  <div>
                    <h5 className="text-xl font-medium mb-3">Half Length Systems</h5>
                    <p className="text-white/50 font-light leading-relaxed text-sm mb-6">
                      Specialized solutions for windows and balcony partitions where structural height is divided.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                        <p className="text-[10px] uppercase font-bold text-luxury-gold mb-2">Windows</p>
                        <p className="text-sm font-light text-white/70 italic">Railing to Ceiling</p>
                      </div>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                        <p className="text-[10px] uppercase font-bold text-luxury-gold mb-2">Popular</p>
                        <p className="text-sm font-light text-white/70 italic">Glass Railing + Self Top Rail</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800"
                  alt="Configuration Example"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-10 -left-10 glass-morphism p-8 rounded-sm text-black">
                <p className="text-4xl font-serif italic mb-1">3200mm</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Single Pane Reach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Technical Data</h3>
            <h4 className="text-5xl font-serif text-slate-900">Engineering Specifications</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Glass Thickness", value: "6mm - 12mm", desc: "Tempered or Laminated" },
              { label: "Ultra Slim Profile", value: "72mm", desc: "Minimal dual track" },
              { label: "Load Capacity", value: "350kg", desc: "Per sliding panel" },
              { label: "Wind Load", value: "Class 4", desc: "Certified Performance" }
            ].map((stat, i) => (
              <div key={i} className="p-8 border border-slate-100 rounded-sm hover:border-luxury-gold transition-colors">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-4">{stat.label}</p>
                <p className="text-3xl font-serif italic mb-2">{stat.value}</p>
                <p className="text-sm text-slate-500 font-light">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2"><ShieldCheck size={24} /> <span className="text-xs font-bold uppercase tracking-widest">RC2 Security Certified</span></div>
            <div className="flex items-center gap-2"><Activity size={24} /> <span className="text-xs font-bold uppercase tracking-widest">600 Pa Watertight Rated</span></div>
            <div className="flex items-center gap-2"><Settings size={24} /> <span className="text-xs font-bold uppercase tracking-widest">Architectural Grade</span></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-luxury-gold/5 border-y border-luxury-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-3xl font-serif italic mb-8">Ready to upgrade your space?</h4>
          <p className="text-slate-600 font-light mb-10 leading-relaxed">
            Our consultants are ready to provide a detailed technical assessment and quote for your project.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors">
            Request a Technical Quote
          </button>
        </div>
      </section>
    </div>
  );
}
