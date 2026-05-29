import { ArrowUpRight, Mail } from "lucide-react";
import apamurah from "@/assets/projects/apamurahbanget.png";
import rkExplore from "@/assets/projects/rk-explore.png";
import gamezone from "@/assets/projects/gamezone.png";
import bidankita from "@/assets/projects/bidankita.png";
import layerfarm from "@/assets/projects/layerfarm.png";
import paytrack from "@/assets/projects/paytrack.png";
import alquran from "@/assets/projects/alquran.png";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
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
      </header>

      {/* HERO */}
      <section className="container-px max-w-7xl mx-auto pt-36 pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-muted-foreground mb-8">
              FULLSTACK DEVELOPER
              <span className="size-1.5 rounded-full bg-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Saya membangun produk digital yang{" "}
              <span className="text-gradient italic">berdampak.</span>
            </h1>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              Fokus merancang dan membangun aplikasi web modern yang
              menyelesaikan masalah nyata — dari villa booking hingga
              manajemen peternakan.
            </p>
            <a
              href="#work"
              className="mt-10 inline-flex items-center gap-3 bg-secondary hover:bg-secondary/70 transition px-5 py-3 rounded-full border border-border text-sm"
            >
              Lihat karya saya
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          {/* Hero showcase image — featured project */}
          <a
            href={projects[0].url}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-card"
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="absolute inset-0 size-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
                <div className="text-lg font-medium">{projects[0].title}</div>
              </div>
              <span className="size-10 rounded-full bg-primary text-primary-foreground grid place-items-center group-hover:rotate-45 transition">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container-px max-w-7xl mx-auto py-24 border-t border-border/50">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> SELECTED WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Project yang pernah <br /> saya kerjakan.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Setiap project adalah perpaduan strategi, ketelitian, dan empati pengguna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border bg-card relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 size-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-background/40 transition flex items-center justify-center">
                  <span className="size-12 rounded-full bg-primary text-primary-foreground grid place-items-center">
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
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container-px max-w-7xl mx-auto py-24 border-t border-border/50">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="text-xs tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" /> ABOUT ME
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Saya Bangundwir — developer yang senang mengubah ide menjadi
              produk yang dipakai orang.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
              Berlatar belakang pengembangan web dan passion di bidang produk,
              saya membangun aplikasi yang tidak hanya berfungsi, tapi juga
              mudah digunakan dan menyenangkan.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 content-start">
            {[
              { v: "7+", l: "Project diluncurkan" },
              { v: "3+", l: "Tahun pengalaman" },
              { v: "100%", l: "Komitmen kualitas" },
            ].map((s) => (
              <div key={s.l} className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-3xl font-semibold">{s.v}</span>
                <span className="text-sm text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-px max-w-7xl mx-auto py-24 border-t border-border/50">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            Punya project di pikiran? <br />
            <span className="text-muted-foreground">Mari kita bangun bersama.</span>
          </h2>
          <a
            href="mailto:rasabuahmalang@gmail.com?subject=Project%20Inquiry%20-%20Portfolio%20Bangundwir&body=Halo%20Bangundwir%2C%0A%0ASaya%20tertarik%20dengan%20portofolio%20Anda%3A%20https%3A%2F%2Fid-preview--841ba7fb-8c52-44af-813a-1d3d7d5851ef.lovable.app%0A%0ASaya%20ingin%20membahas..."
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:opacity-90 transition px-6 py-4 rounded-full text-sm font-medium"
          >
            <Mail className="size-4" />
            Get in touch
            <span className="size-1.5 rounded-full bg-primary-foreground/60" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container-px max-w-7xl mx-auto py-10 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="text-foreground font-semibold">Bangundwir<span className="text-primary">.</span></div>
        <div>© 2025 Bangundwir. All rights reserved.</div>
        <a href="mailto:rasabuahmalang@gmail.com" className="hover:text-foreground transition">
          rasabuahmalang@gmail.com
        </a>
      </footer>
    </div>
  );
}
