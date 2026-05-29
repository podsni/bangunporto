import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Instagram } from "lucide-react";
import apamurah from "@/assets/projects/apamurahbanget.png";
import rkExplore from "@/assets/projects/rk-explore.png";
import gamezone from "@/assets/projects/gamezone.png";
import bidankita from "@/assets/projects/bidankita.png";
import layerfarm from "@/assets/projects/layerfarm.png";
import paytrack from "@/assets/projects/paytrack.png";
import alquran from "@/assets/projects/alquran.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function useAnimateOnView() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return { ref, inView };
}

type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  url: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Apamurahbanget",
    category: "Persewaan Villa",
    year: "2025",
    image: apamurah,
    url: "https://apa.podsni.xyz/",
    description: "Platform pencarian dan booking villa di Batu dengan harga transparan.",
  },
  {
    title: "RK Explore",
    category: "Open Trip & Wisata",
    year: "2025",
    image: rkExplore,
    url: "https://rk-trip.vercel.app/",
    description: "Jasa open trip ke destinasi terbaik Indonesia dengan checkout via WhatsApp.",
  },
  {
    title: "GAMEZONE",
    category: "Billing PlayStation",
    year: "2025",
    image: gamezone,
    url: "https://game.podsni.xyz/login",
    description: "Sistem billing dan manajemen rental PlayStation real-time.",
  },
  {
    title: "BidanKita",
    category: "Kesehatan Ibu & Bayi",
    year: "2025",
    image: bidankita,
    url: "https://bidanktitik.my.id/",
    description: "Pendamping kehamilan: chat bidan, jadwal kunjungan, kelas ibu hamil.",
  },
  {
    title: "LayerFarm OS",
    category: "Manajemen Peternakan",
    year: "2025",
    image: layerfarm,
    url: "https://hartanafarm.my.id/",
    description: "Operating system untuk peternakan ayam petelur skala produksi.",
  },
  {
    title: "PayTrack",
    category: "Dashboard Pembayaran",
    year: "2025",
    image: paytrack,
    url: "https://bayar.sinilah.my.id/",
    description: "Dashboard tagihan WiFi & utilitas dengan rekap otomatis.",
  },
  {
    title: "Al-Quran Digital",
    category: "Islamic AI Assistant",
    year: "2025",
    image: alquran,
    url: "https://alquranapp-omega.vercel.app/chat",
    description: "Al-Quran digital dengan AI Ustadz untuk tanya jawab seputar Islam.",
  },
];

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  const workAnim = useAnimateOnView();
  const aboutAnim = useAnimateOnView();
  const contactAnim = useAnimateOnView();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50"
      >
        <nav className="container-px max-w-7xl mx-auto flex items-center justify-between h-16">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Bangundwir<span className="text-primary">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#work" className="hover:text-foreground transition">Work</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm bg-secondary hover:bg-secondary/70 transition px-4 py-2 rounded-full border border-border"
          >
            Contact
            <span className="size-1.5 rounded-full bg-primary" />
          </a>
        </nav>
      </motion.header>

      {/* HERO */}
      <section ref={heroRef} className="container-px max-w-7xl mx-auto pt-36 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground mb-8">
              FULLSTACK DEVELOPER
              <span className="size-1.5 rounded-full bg-primary" />
            </motion.div>
            <motion.h1 variants={staggerItem} className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Saya membangun produk digital yang{" "}
              <span className="text-gradient italic">berdampak.</span>
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              Fokus merancang dan membangun aplikasi web modern yang
              menyelesaikan masalah nyata — dari villa booking hingga
              manajemen peternakan.
            </motion.p>
            <motion.div variants={staggerItem}>
              <a
                href="#work"
                className="mt-10 inline-flex items-center gap-3 bg-secondary hover:bg-secondary/70 transition px-5 py-3 rounded-full border border-border text-sm group"
              >
                Lihat karya saya
                <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero showcase image */}
          <motion.a
            href={projects[0].url}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={heroInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="absolute inset-0 size-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
                <div className="text-lg font-medium">{projects[0].title}</div>
              </div>
              <span className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container-px max-w-7xl mx-auto py-24 border-t border-border/50">
        <motion.div
          ref={workAnim.ref}
          initial="hidden"
          animate={workAnim.inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <motion.div variants={staggerItem} className="text-xs tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" /> SELECTED WORK
              </motion.div>
              <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-semibold tracking-tight">
                Project yang pernah <br /> saya kerjakan.
              </motion.h2>
            </div>
            <motion.p variants={staggerItem} className="text-muted-foreground max-w-sm">
              Setiap project adalah perpaduan strategi, ketelitian, dan empati pengguna.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col"
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 size-full object-cover object-top group-hover:scale-[1.05] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-background/50 transition-opacity duration-300 flex items-center justify-center">
                    <span className="size-12 rounded-full bg-primary text-primary-foreground grid place-items-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.description}</div>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container-px max-w-7xl mx-auto py-24 border-t border-border/50">
        <motion.div
          ref={aboutAnim.ref}
          initial="hidden"
          animate={aboutAnim.inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-2">
            <motion.div variants={staggerItem} className="text-xs tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> ABOUT ME
            </motion.div>
            <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Saya Bangundwir — developer yang senang mengubah ide menjadi
              produk yang dipakai orang.
            </motion.h2>
            <motion.p variants={staggerItem} className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
              Berlatar belakang pengembangan web dan passion di bidang produk,
              saya membangun aplikasi yang tidak hanya berfungsi, tapi juga
              mudah digunakan dan menyenangkan.
            </motion.p>

            {/* Skills pills */}
            <motion.div variants={staggerItem} className="mt-6 flex flex-wrap gap-2">
              {["React", "Vue", "Node.js", "TypeScript", "Supabase", "Tailwind", "Flutter", "Python"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-xs rounded-full border border-border bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 content-start">
            {[
              { v: "7+", l: "Project diluncurkan" },
              { v: "3+", l: "Tahun pengalaman" },
              { v: "100%", l: "Komitmen kualitas" },
            ].map((s) => (
              <motion.div
                key={s.l}
                variants={staggerItem}
                className="flex items-center justify-between border-b border-border pb-4"
              >
                <span className="text-3xl font-semibold">{s.v}</span>
                <span className="text-sm text-muted-foreground">{s.l}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-px max-w-7xl mx-auto py-24 border-t border-border/50">
        <motion.div
          ref={contactAnim.ref}
          initial="hidden"
          animate={contactAnim.inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
        >
          <motion.h2 variants={staggerItem} className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Punya project di pikiran? <br />
            <span className="text-muted-foreground">Mari kita bangun bersama.</span>
          </motion.h2>
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:bangundwir@gmail.com?subject=Project%20Inquiry%20-%20Portfolio%20Bangundwir&body=Halo%20Bangundwir%2C%0A%0ASaya%20tertarik%20dengan%20portofolio%20Anda%3A%20https%3A%2F%2Fid-preview--841ba7fb-8c52-44af-813a-1d3d7d5851ef.lovable.app%0A%0ASaya%20ingin%20membahas..."
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:opacity-90 transition px-6 py-4 rounded-full text-sm font-medium group"
            >
              <Mail className="size-4" />
              Get in touch
              <span className="size-1.5 rounded-full bg-primary-foreground/60" />
            </a>
            <div className="flex items-center gap-3">
              <a href="mailto:bangundwir@gmail.com" className="size-10 rounded-full border border-border bg-secondary flex items-center justify-center hover:bg-secondary/70 transition">
                <Mail className="size-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border bg-secondary flex items-center justify-center hover:bg-secondary/70 transition">
                <Github className="size-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border bg-secondary flex items-center justify-center hover:bg-secondary/70 transition">
                <Linkedin className="size-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border bg-secondary flex items-center justify-center hover:bg-secondary/70 transition">
                <Instagram className="size-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="container-px max-w-7xl mx-auto py-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="text-foreground font-semibold">Bangundwir<span className="text-primary">.</span></div>
        <div>© 2025 Bangundwir. All rights reserved.</div>
        <a href="mailto:bangundwir@gmail.com" className="hover:text-foreground transition">
          bangundwir@gmail.com
        </a>
      </footer>
    </div>
  );
}
