import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Layout,
  Briefcase,
  ShoppingBag,
  Home,
  Trees,
  Map
} from "lucide-react";

export default function Applications() {
  const featuredApps = [
    { title: "Balcony", desc: "Enjoy panoramic views and protect your balcony from dust, wind, and rain with our premium frameless glass enclosures.", img: "https://i.postimg.cc/1tm1yGXW/Chat-GPT-Image-Jun-29-2026-12-04-16-PM.png" },
    { title: "Int. Partition", desc: "Create flexible living spaces with sleek interior glass partitions without compromising natural light.", img: "https://i.postimg.cc/QxWwG4S3/Chat-GPT-Image-Jun-29-2026-12-06-24-PM.png" },
    { title: "Commercial", desc: "Enhance your business environment with elegant, sound-dampening commercial glass structural solutions.", img: "https://i.postimg.cc/YS8yfJ2Q/Chat-GPT-Image-Jun-29-2026-12-07-47-PM.png" },
    { title: "Exterior", desc: "Upgrade your facade with robust exterior glass that effortlessly withstands harsh weather conditions.", img: "https://i.postimg.cc/59Hbympn/Chat-GPT-Image-Jun-29-2026-12-11-13-PM.png" },
    { title: "Terrace", desc: "Transform your open terrace into a year-round usable space with seamless, fully retractable glass systems.", img: "https://i.postimg.cc/DwhTC3Fn/Chat-GPT-Image-Jun-29-2026-12-12-32-PM.png" },
    { title: "Farm House", desc: "Blend the indoors with the outdoors perfectly for your rustic farmhouse setting with wide panoramic panels.", img: "https://i.postimg.cc/4ycD5BSR/Chat-GPT-Image-Jun-29-2026-12-17-17-PM.png" },
    { title: "Office Space", desc: "Modernize office interiors with frameless glass that promotes a collaborative, well-lit working environment.", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80" },
    { title: "Garden", desc: "Enclose your garden spaces beautifully, keeping the natural feel intact while staying protected from elements.", img: "https://i.postimg.cc/g2sfNwN0/Chat-GPT-Image-Jun-29-2026-12-23-17-PM.png" }
  ];

  const usageAreas = [
    { name: "Balcony", icon: <Layout />, desc: "Transform your balcony into a year-round living space." },
    { name: "Interior Partition", icon: <Map />, desc: "Elegant space division without losing light." },
    { name: "Office Space", icon: <Briefcase />, desc: "Sophisticated transparency for workspaces." },
    { name: "Commercial", icon: <ShoppingBag />, desc: "Performance solutions for retail property." },
    { name: "Exterior", icon: <Building2 />, desc: "Durable glass systems for grand facades." },
    { name: "Terrace Garden", icon: <Trees />, desc: "Lush greenery meets architectural glass." },
    { name: "Farm House", icon: <Home />, desc: "Rural luxury glass for expansive estates." }
  ];

  const suggestedSystems = [
    { title: "Infi SET Slide & Turn", type: "Premium Series", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
    { title: "Telescopic Slider", type: "Architectural Series", img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=600" },
    { title: "Bi-fold System", type: "Panoramic Series", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-sm font-medium text-white/40 uppercase tracking-[0.3em] mb-4">Architectural Harmony</h1>
              <h2 className="text-6xl md:text-8xl font-serif leading-tight italic mb-8">Spatial <br /> <span className="not-italic">Fluidity</span></h2>
              <p className="max-w-lg text-white/60 font-light text-lg leading-relaxed mb-10">
                Explore how INFIWIN systems integrate into diverse environments, creating seamless transitions between nature and architecture.
              </p>
            </motion.div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square rounded-full border border-white/10 p-12">
              <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800" alt="Harmony" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            {/* Floating label */}
            <div className="absolute top-1/2 -right-10 glass-morphism p-6 text-black transform -rotate-12">
              <p className="text-[10px] uppercase font-bold tracking-widest">Global Portfolio</p>
              <p className="text-2xl font-serif italic">EST. 2008</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Applications */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredApps.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 relative">
                  <img
                    src={app.img}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                    <p className="text-xs uppercase tracking-widest font-bold mb-2">Application</p>
                    <h3 className="text-3xl font-serif italic">{app.title}</h3>
                  </div>
                </div>
                <h4 className="text-2xl font-serif italic mb-3">{app.title}</h4>
                <p className="text-slate-500 font-light text-sm italic">{app.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Areas Grid */}
      <section className="px-6 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Usage Areas & Solutions</h3>
            <h4 className="text-4xl font-serif italic text-slate-900 leading-tight">Recommended Glass <br /> Systems for Every Space</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {usageAreas.map((area, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-10 bg-white border border-slate-100 flex flex-col items-start gap-6 hover:shadow-xl transition-all h-full"
              >
                <div className="w-12 h-12 text-luxury-gold flex items-center justify-center border border-luxury-gold/20 rounded-full">
                  {area.icon}
                </div>
                <h5 className="text-xl font-medium">{area.name}</h5>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{area.desc}</p>
                <div className="mt-auto">
                  <button className="text-[10px] uppercase font-bold tracking-widest text-slate-900 border-b border-black/10 hover:border-black transition-all">
                    Explore Systems
                  </button>
                </div>
              </motion.div>
            ))}
            {/* CTA Box */}
            <div className="p-10 bg-luxury-gold text-white flex flex-col justify-center gap-6">
              <h5 className="text-2xl font-serif italic">Need a custom solution?</h5>
              <p className="text-white/80 text-sm font-light">Our engineering team can design bespoke systems for unique architectural challenges.</p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest self-start transition-colors hover:bg-slate-800">
                Consult Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Systems */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h3 className="text-sm font-medium text-slate-400 uppercase tracking-[0.3em] mb-4">Suggested for You</h3>
              <h4 className="text-4xl font-serif italic text-slate-900">Popular Systems</h4>
            </div>
            <Link to="/products" className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 flex items-center gap-2 hover:text-luxury-gold hover:border-luxury-gold transition-colors">
              View All Systems <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestedSystems.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-sm mb-6 border border-slate-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <p className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold mb-2">{item.type}</p>
                <h5 className="text-2xl font-serif italic mb-1">{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
