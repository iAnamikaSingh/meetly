import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  LockKeyhole,
  Link2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Users,
  KeyRound,
} from "lucide-react";

export default function JoinMeeting() {
  const navigate = useNavigate();

  const [meetingLink, setMeetingLink] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [passcode, setPasscode] = useState("");

  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const [error, setError] = useState("");

  // Extract room ID from either a meeting URL or a room ID.
  const extractRoomId = (value) => {
    const input = value.trim();

    if (!input) return null;

    // If the user pasted a complete URL.
    if (/^https?:\/\//i.test(input)) {
      try {
        const url = new URL(input);

        const match = url.pathname.match(/^\/meeting\/([^/]+)\/?$/);

        return match ? decodeURIComponent(match[1]) : null;
      } catch {
        return null;
      }
    }

    // If the user entered a path such as /meeting/room123.
    const pathMatch = input.match(/^\/?meeting\/([^/]+)\/?$/);

    if (pathMatch) {
      return decodeURIComponent(pathMatch[1]);
    }

    // Otherwise, treat the input as a room ID.
    return input;
  };

  const handleJoinMeeting = (e) => {
    e.preventDefault();
    setError("");

    const roomId = extractRoomId(meetingLink);

    if (!roomId) {
      setError("Please enter a valid meeting link or room ID.");
      return;
    }

    if (!participantName.trim()) {
      setError("Please enter your name.");
      return;
    }

    // Temporary frontend navigation.
    // The backend will validate the room and passcode later.
    navigate(`/meeting/${encodeURIComponent(roomId)}`, {
      state: {
        participantName: participantName.trim(),
        passcode: passcode.trim(),
        isMicOn,
        isCameraOn,
        role: "participant",
      },
    });
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">

      {/* Navbar */}
      <nav className="h-20 border-b border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center">
              <Video size={19} className="text-white" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Meetly
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

        </div>
      </nav>


      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Join Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >

            {/* Heading */}
            <div className="mb-10">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-5">
                <Users size={14} />
                Join a meeting
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
                Your next conversation starts here.
              </h1>

              <p className="text-neutral-500 text-base leading-relaxed">
                Enter your meeting details, check your preferences,
                and connect with everyone.
              </p>

            </div>


            <form onSubmit={handleJoinMeeting} className="space-y-6">

              {/* Meeting Link */}
              <div>

                <label className="block text-sm font-medium mb-2">
                  Meeting link or ID
                </label>

                <div className="relative">

                  <Link2
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    type="text"
                    value={meetingLink}
                    onChange={(e) => {
                      setMeetingLink(e.target.value);
                      setError("");
                    }}
                    placeholder="Paste meeting link or enter room ID"
                    className="w-full h-13 pl-11 pr-4 rounded-xl border border-neutral-200 bg-white outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                  />

                </div>

                <p className="text-xs text-neutral-400 mt-2">
                  Example: meetly.com/meeting/room123
                </p>

              </div>


              {/* Participant Name */}
              <div>

                <label className="block text-sm font-medium mb-2">
                  Your name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  value={participantName}
                  onChange={(e) => setParticipantName(e.target.value)}
                  placeholder="Enter your display name"
                  maxLength={40}
                  required
                  className="w-full h-13 px-4 rounded-xl border border-neutral-200 bg-white outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                />

              </div>


              {/* Passcode */}
              <div>

                <label className="block text-sm font-medium mb-2">
                  Meeting passcode
                  <span className="text-neutral-400 font-normal ml-2">
                    (If required)
                  </span>
                </label>

                <div className="relative">

                  <KeyRound
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                  />

                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter meeting passcode"
                    className="w-full h-13 pl-11 pr-4 rounded-xl border border-neutral-200 bg-white outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                  />

                </div>

                <p className="text-xs text-neutral-400 mt-2">
                  Private meetings require a valid passcode.
                </p>

              </div>


              {/* Device Preferences */}
              <div>

                <h2 className="text-sm font-semibold mb-3">
                  Join preferences
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">

                  {/* Microphone */}
                  <button
                    type="button"
                    onClick={() => setIsMicOn(!isMicOn)}
                    aria-pressed={isMicOn}
                    className={`flex items-center justify-between p-4 rounded-xl border transition ${
                      isMicOn
                        ? "border-neutral-200 bg-white"
                        : "border-neutral-300 bg-neutral-100"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      {isMicOn ? (
                        <Mic size={19} />
                      ) : (
                        <MicOff size={19} />
                      )}

                      <span className="text-sm font-medium">
                        Microphone
                      </span>

                    </div>

                    <span
                      className={`text-xs font-medium ${
                        isMicOn ? "text-green-600" : "text-neutral-400"
                      }`}
                    >
                      {isMicOn ? "On" : "Off"}
                    </span>

                  </button>


                  {/* Camera */}
                  <button
                    type="button"
                    onClick={() => setIsCameraOn(!isCameraOn)}
                    aria-pressed={isCameraOn}
                    className={`flex items-center justify-between p-4 rounded-xl border transition ${
                      isCameraOn
                        ? "border-neutral-200 bg-white"
                        : "border-neutral-300 bg-neutral-100"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      {isCameraOn ? (
                        <Video size={19} />
                      ) : (
                        <VideoOff size={19} />
                      )}

                      <span className="text-sm font-medium">
                        Camera
                      </span>

                    </div>

                    <span
                      className={`text-xs font-medium ${
                        isCameraOn ? "text-green-600" : "text-neutral-400"
                      }`}
                    >
                      {isCameraOn ? "On" : "Off"}
                    </span>

                  </button>

                </div>

              </div>


              {/* Error Message */}
              {error && (
                <p
                  role="alert"
                  className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
                >
                  {error}
                </p>
              )}


              {/* Join Button */}
              <button
                type="submit"
                className="w-full h-13 flex items-center justify-center gap-2 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition group"
              >
                Join meeting

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-center text-xs text-neutral-400">
                By joining, you agree to use the platform responsibly.
              </p>

            </form>

          </motion.div>


          {/* Right: Information Card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >

            <div className="relative bg-neutral-950 rounded-3xl p-8 overflow-hidden min-h-[440px] flex flex-col justify-between">

              {/* Decorative background */}
              <div className="absolute w-72 h-72 bg-blue-500/20 blur-[100px] rounded-full -top-20 -right-20" />

              <div className="relative z-10">

                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  <Video className="text-white" size={24} />
                </div>

                <h2 className="text-3xl font-semibold text-white leading-tight max-w-sm">
                  Good conversations bring people closer.
                </h2>

                <p className="text-neutral-400 mt-4 leading-relaxed max-w-sm">
                  Join your team, collaborate on ideas, and make
                  every conversation count.
                </p>

              </div>


              {/* Feature list */}
              <div className="relative z-10 space-y-5 mt-12">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-sm text-white font-medium">
                      Controlled meeting access
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Join using your meeting credentials.
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                    <Users size={18} className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-sm text-white font-medium">
                      Connect with your people
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Collaborate from anywhere.
                    </p>
                  </div>

                </div>


                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                    <LockKeyhole size={18} className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-sm text-white font-medium">
                      Privacy matters
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Access is checked before joining.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}