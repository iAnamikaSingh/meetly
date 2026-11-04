import { Link } from "react-router-dom";
import { Video, ArrowUpRight } from "lucide-react";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-black text-white p-2 rounded-lg">
            <Video size={20} />
          </div>

          <span className="text-xl font-bold tracking-tight">
            Meetly
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-9 text-sm text-neutral-600">
          <a href="#features" className="hover:text-black transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-black transition">
            How it works
          </a>

          <a href="#about" className="hover:text-black transition">
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/join"
            className="hidden sm:block text-sm font-medium hover:text-neutral-500"
          >
            Join meeting
          </Link>

          <Button to="/create-meeting" className="!px-4 !py-2.5">
            Get started
            <ArrowUpRight size={16} />
          </Button>
        </div>

      </nav>
    </header>
  );
}