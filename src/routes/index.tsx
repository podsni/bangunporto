import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bangundwir — Fullstack Developer Portfolio" },
      { name: "description", content: "Portofolio Bangundwir — fullstack developer yang membangun produk digital berdampak: villa booking, open trip, billing PlayStation, manajemen peternakan, dan lainnya." },
      { property: "og:title", content: "Bangundwir — Fullstack Developer Portfolio" },
      { property: "og:description", content: "Portofolio Bangundwir — fullstack developer yang membangun produk digital berdampak." },
    ],
  }),
  component: Portfolio,
});
