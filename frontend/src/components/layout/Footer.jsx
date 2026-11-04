import { Link } from "react-router-dom";
import { Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-8">

          <div>

            <Link to="/" className="flex items-center gap-2">
              <Video size={22} />

              <span className="font-bold text-lg">
                Meetly
              </span>
            </Link>

            <p className="text-sm text-neutral-500 mt-3 max-w-xs">
              Making online conversations simpler,
              one meeting at a time.
            </p>

          </div>

          <div className="flex gap-12 text-sm">

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Product</span>

              <a href="#features" className="text-neutral-500 hover:text-black">
                Features
              </a>

              <a href="#how-it-works" className="text-neutral-500 hover:text-black">
                How it works
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-semibold">Meetings</span>

              <Link to="/create-meeting" className="text-neutral-500 hover:text-black">
                Create meeting
              </Link>

              <Link to="/join" className="text-neutral-500 hover:text-black">
                Join meeting
              </Link>
            </div>

          </div>

        </div>

        <div className="border-t border-neutral-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-neutral-400">

          <p>© {new Date().getFullYear()} Meetly. All rights reserved.</p>

          <p>Built for better conversations.</p>

        </div>

      </div>

    </footer>
  );
}