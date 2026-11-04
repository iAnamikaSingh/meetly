import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Video } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full text-center"
      >
        {/* Logo */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xl font-bold text-neutral-900 mb-16"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-black text-white">
            <Video size={19} />
          </span>
          Meetly
        </Link>

        {/* Error illustration */}
        <div className="relative mb-8">
          <h1 className="text-[130px] sm:text-[180px] font-bold leading-none tracking-tighter text-neutral-200">
            404
          </h1>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-black flex items-center justify-center shadow-xl shadow-black/10 rotate-[-8deg]">
              <Video className="text-white" size={38} strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 mb-3">
          Looks like you've lost connection.
        </h2>

        <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-9">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition-colors w-full sm:w-auto"
          >
            <Home size={18} />
            Back to home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-700 font-medium hover:bg-neutral-100 transition-colors w-full sm:w-auto"
          >
            <ArrowLeft size={18} />
            Go back
          </button>
        </div>

        {/* Footer */}
        <p className="mt-16 text-sm text-neutral-400">
          © {new Date().getFullYear()} Meetly. All rights reserved.
        </p>
      </motion.div>
    </main>
  );
}