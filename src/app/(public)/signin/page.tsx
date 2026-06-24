import Link from "next/link";

export default function SigninPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* CARD */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white border border-gray-200 ">
        {/* TITLE */}
        <h1 className="text-2xl font-bold text-center">
          Selamat Datang Kembali
        </h1>

        <p className="text-sm text-gray-600 text-center mt-2">
          Lanjutkan perjalanan belajar kamu di Re:Stato
        </p>

        {/* GOOGLE BUTTON */}
        <button className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-gray-700 cursor-pointer">
            Masuk dengan Google
          </span>
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-xs text-gray-400">ATAU</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        {/* FORM */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20"
          />

          <input
            type="password"
            placeholder="Kata Sandi"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/20"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Masuk
          </button>
        </form>

        {/* SIGN UP LINK */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Belum punya akun?{" "}
          <Link href="/signup" className="text-black font-medium">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
}
