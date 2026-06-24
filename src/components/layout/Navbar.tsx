"use client";

import Link from "next/link";
import { Moon, Sparkles } from "lucide-react";

const NAV_ITEMS = [
  { label: "Fitur", href: "#features" },
  { label: "Jalur Belajar", href: "#learning-path" },
  { label: "Tentang", href: "#about" },
];

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="my-6 mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/60 backdrop-blur-2xl px-6 py-3 ">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight text-black"
          >
            <Sparkles size={18} />
            Re:Stato
          </Link>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-black transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ACTION */}
          <div className="flex items-center gap-3">
            {/* THEME BUTTON */}
            <button className="flex items-center gap-2 p-3  rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm cursor-pointer">
              <Moon size={16} />
            </button>

            {/* SIGN IN */}
            <Link
              href="/signin"
              className="text-sm text-gray-600 hover:text-black transition px-2"
            >
              Masuk
            </Link>

            {/* GET STARTED */}
            <Link
              href="/signup"
              className="flex items-center gap-2 bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition shadow-md hover:shadow-lg"
            >
              Mulai Belajar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
