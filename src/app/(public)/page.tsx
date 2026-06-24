import Link from "next/link";
import {
  BookOpen,
  Gamepad2,
  ChartNoAxesColumn,
  ArrowRight,
} from "lucide-react";

const FEATURES = [
  {
    title: "Jalur Belajar",
    description:
      "Belajar secara bertahap mulai dari Hiragana, Katakana hingga Kanji.",
    icon: BookOpen,
  },
  {
    title: "Gamifikasi",
    description:
      "Naik level, kumpulkan XP, dan selesaikan tantangan agar belajar lebih menyenangkan.",
    icon: Gamepad2,
  },
  {
    title: "Progress Belajar",
    description:
      "Pantau perkembangan belajar kamu secara real-time dan tetap konsisten setiap hari.",
    icon: ChartNoAxesColumn,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="container mx-auto max-w-6xl px-6 pt-24 text-center">
        <span className="inline-flex rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm backdrop-blur">
          🇯🇵 Platform Belajar Bahasa Jepang
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
          Mulai Perjalanan Belajar
          <br />
          Bahasa Jepang Layaknya
          <span className="text-red-600"> Seorang Protagonis</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Belajar Hiragana, Katakana, Kanji, kosakata, dan tata bahasa melalui
          roadmap interaktif, gamifikasi, serta latihan yang menyenangkan.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Mulai Belajar Gratis
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/signin"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Saya sudah punya akun
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto mt-32 max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Semua yang Kamu Butuhkan</h2>

          <p className="mt-3 text-gray-600">
            Belajar bahasa Jepang dengan sistem yang terstruktur dan interaktif.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/40 bg-white/70 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto my-28 max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">Siap Memulai Perjalananmu?</h2>

        <p className="mt-4 text-gray-600">
          Daftar gratis dan mulai belajar bahasa Jepang dengan sistem gamifikasi
          yang membuat belajar menjadi lebih menyenangkan.
        </p>

        <Link
          href="/signup"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 font-medium text-white transition hover:bg-neutral-800"
        >
          Mulai Sekarang
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
