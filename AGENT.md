# AGENT.md

Panduan untuk AI agent yang bekerja di repo ini.

## Stack

- **Framework**: TanStack Start v1 (fullstack React 19, SSR)
- **Build**: Vite 7 + `@lovable.dev/vite-tanstack-config`
- **Styling**: Tailwind CSS v4 + custom design tokens (`oklch`)
- **Animasi**: Framer Motion
- **Package manager**: Bun
- **Deploy**: Vercel (nitro preset `vercel`, output ke `.vercel/output/`)

## Perintah

```bash
bun dev          # dev server di localhost:3000
bun run build    # production build → .vercel/output/
bun run lint     # eslint
bun run format   # prettier
```

## Struktur penting

```
src/
├── components/Portfolio.tsx   # komponen utama — semua section ada di sini
├── assets/projects/           # screenshot project (PNG)
├── routes/index.tsx           # home route → render Portfolio
├── styles.css                 # Tailwind v4 + design tokens
└── server.ts                  # SSR error wrapper
vite.config.ts                 # nitro preset vercel + output dir
vercel.json                    # buildCommand + framework: null
```

## Menambah project baru ke showcase

1. Simpan screenshot ke `src/assets/projects/<nama>.png`
2. Import di `Portfolio.tsx`:
   ```ts
   import namaVar from "@/assets/projects/<nama>.png";
   ```
3. Tambah entry ke array `projects`:
   ```ts
   {
     title: "Nama Project",
     category: "Kategori",
     year: "2025",
     image: namaVar,
     url: "https://...",
     description: "Deskripsi singkat.",
   }
   ```

## Deploy

Push ke `main` → Vercel auto-deploy. Vercel menjalankan `bun run build` yang menghasilkan `.vercel/output/` (Vercel Build Output API v3).

> **Jangan** ubah `nitro.output.dir` di `vite.config.ts` — `@lovable.dev/vite-tanstack-config` override output ke `dist/` secara default, sehingga harus di-set eksplisit ke `.vercel/output` agar Vercel bisa menemukan server function-nya.

## Design tokens

| Token | Nilai |
|-------|-------|
| `--background` | `oklch(0.16 0.01 270)` — dark navy |
| `--foreground` | `oklch(0.97 0.005 270)` — off-white |
| `--primary` | `oklch(0.72 0.18 290)` — soft violet |
| `--secondary` | `oklch(0.24 0.015 270)` — dark surface |
| `--muted` | `oklch(0.65 0.015 270)` — muted text |
| `--border` | `oklch(0.28 0.015 270)` — border line |
