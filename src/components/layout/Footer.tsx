import Link from "next/link";

const NAVIGATION = [
  { label: "Beranda", href: "/" },
  { label: "Fitur", href: "/features" },
  { label: "Jalur Belajar", href: "/learning-path" },
  { label: "Tentang", href: "/about" },
  { label: "Masuk", href: "/signin" },
  { label: "Daftar", href: "/signup" },
];

const DEVELOPER = [{ label: "Tentang Pengembang", href: "/developer" }];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/20 bg-white/40 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="font-bold text-lg">Re:Stato</h2>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Platform belajar Bahasa Jepang dengan sistem gamifikasi, pelacakan
              progres, dan pembelajaran interaktif.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="font-semibold mb-3">Navigasi</h3>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-black transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* DEVELOPER */}
          <div>
            <h3 className="font-semibold mb-3">Pengembang</h3>

            <div className="flex flex-col gap-2 text-sm text-gray-600">
              {DEVELOPER.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-black transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Re:Stato. All rights reserved.</p>

          <p className="mt-2 md:mt-0">Made with ❤️ by developer for learners</p>
        </div>
      </div>
    </footer>
  );
}
