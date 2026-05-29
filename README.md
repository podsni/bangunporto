# Bangundwir Portfolio

> Portofolio personal minimalis milik **Bangundwir** — seorang Fullstack Developer yang fokus membangun produk digital yang berdampak nyata.

[![Live Preview](https://img.shields.io/badge/Live%20Preview-Visit%20Site-8A63D2?style=flat-square&logo=vercel)](https://id-preview--841ba7fb-8c52-44af-813a-1d3d7d5851ef.lovable.app)
![Tech Stack](https://img.shields.io/badge/Tech-TanStack%20Start%20%7C%20React%2019%20%7C%20Tailwind%20CSS%20v4%20%7C%20Framer%20Motion-2D3748?style=flat-square)

---

## ✨ Demo

🔗 **Live:** [https://id-preview--841ba7fb-8c52-44af-813a-1d3d7d5851ef.lovable.app](https://id-preview--841ba7fb-8c52-44af-813a-1d3d7d5851ef.lovable.app)

---

## 🖼 Preview

Halaman portfolio ini menampilkan:

- **Hero Section** dengan project unggulan dan animasi fade-in
- **Selected Works** — 7 project dalam grid card dengan hover lift effect
- **About Me** — deskripsi singkat + skill tags + statistik
- **Contact** — tombol email langsung + icon sosial media
- Animasi smooth scroll menggunakan Framer Motion

---

## 🚀 Project Showcase

| # | Project | Kategori | Link |
|---|---------|----------|------|
| 1 | **Apamurahbanget** | Persewaan Villa | [apa.podsni.xyz](https://apa.podsni.xyz/) |
| 2 | **RK Explore** | Open Trip & Wisata | [rk-trip.vercel.app](https://rk-trip.vercel.app/) |
| 3 | **GAMEZONE** | Billing PlayStation | [game.podsni.xyz](https://game.podsni.xyz/login) |
| 4 | **BidanKita** | Kesehatan Ibu & Bayi | [bidanktitik.my.id](https://bidanktitik.my.id/) |
| 5 | **LayerFarm OS** | Manajemen Peternakan | [hartanafarm.my.id](https://hartanafarm.my.id/) |
| 6 | **PayTrack** | Dashboard Pembayaran | [bayar.sinilah.my.id](https://bayar.sinilah.my.id/) |
| 7 | **Al-Quran Digital** | Islamic AI Assistant | [alquranapp-omega.vercel.app](https://alquranapp-omega.vercel.app/chat) |

---

## 🛠 Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | [TanStack Start v1](https://tanstack.com/start) (Fullstack React 19) |
| Language | TypeScript (Strict) |
| Styling | Tailwind CSS v4 + Custom Design Tokens (`oklch`) |
| Animasi | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |
| Build Tool | Vite 7 |
| Package Manager | Bun |

---

## ⚡ Fitur

- ⚡ **SSR/SSG** — Rendering sisi server untuk SEO & performa
- 🎨 **Design Token** — Warna semantic via CSS variables (`oklch`)
- 🌙 **Dark Theme** — Tampilan gelap minimalis bawaan
- ✨ **Framer Motion** — Animasi entrance, hover lift, stagger effect
- 📱 **Responsive** — Mobile-first, grid adaptif
- 🔗 **Social Links** — GitHub, LinkedIn, Instagram, Email
- 💬 **Mailto CTA** — Tombol kontak dengan email pre-filled

---

## 📁 Struktur Folder

```
src/
├── assets/
│   └── projects/              # Screenshot project (7 gambar)
│       ├── apamurahbanget.png
│       ├── rk-explore.png
│       ├── gamezone.png
│       ├── bidankita.png
│       ├── layerfarm.png
│       ├── paytrack.png
│       └── alquran.png
├── components/
│   ├── Portfolio.tsx          # Komponen utama portfolio
│   └── ui/                    # Shadcn UI components (button, card, dll)
├── lib/
│   ├── api/                   # Server functions
│   ├── config.server.ts       # Konfigurasi server
│   └── utils.ts               # Utility helpers (cn, dll)
├── routes/
│   ├── __root.tsx             # Root layout (head meta, provider)
│   ├── index.tsx              # Home route (/) → Portfolio
│   └── api/                   # API routes
├── router.tsx                 # Router setup
├── server.ts                  # Server entry
├── start.ts                   # Start instance
└── styles.css                 # Tailwind v4 + custom design tokens
```

---

## 🚀 Getting Started

### Prasyarat

- [Bun](https://bun.sh/) (disarankan) atau Node.js 20+

### Install & Jalankan

```bash
# Clone repo
git clone <repo-url>
cd <project-folder>

# Install dependencies
bun install

# Jalankan dev server
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
bun run build
```

---

## 🎨 Design System

Warna menggunakan **oklch** untuk konsistensi di light/dark mode:

| Token | Warna |
|-------|-------|
| `--background` | `oklch(0.16 0.01 270)` — dark navy |
| `--foreground` | `oklch(0.97 0.005 270)` — off-white |
| `--primary` | `oklch(0.72 0.18 290)` — soft violet |
| `--secondary` | `oklch(0.24 0.015 270)` — dark surface |
| `--muted` | `oklch(0.65 0.015 270)` — muted text |
| `--border` | `oklch(0.28 0.015 270)` — border line |

Font: **Inter** — clean, modern, Google Fonts.

---

## 📧 Kontak

- 📩 **Email:** [bangundwir@gmail.com](mailto:bangundwir@gmail.com)
- 🐙 **GitHub:** [github.com/bangundwir](https://github.com/bangundwir)
- 📷 **Instagram:** [@bangundwir](https://www.instagram.com/bangundwir)

---

## 📄 License

© 2025 **Bangundwir**. All rights reserved.

---

> Dibangun dengan ❤️ menggunakan TanStack Start + Tailwind CSS v4 + Framer Motion
