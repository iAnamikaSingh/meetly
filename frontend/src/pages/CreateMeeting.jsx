import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";

import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  Lock,
  Users,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Copy,
  Check,
} from "lucide-react";

export default function CreateMeeting() {
  const navigate = useNavigate();

  const [meetingTitle, setMeetingTitle] = useState("");
  const [hostName, setHostName] = useState("");
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isPrivate, setIsPrivate] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCreateMeeting = (e) => {
    e.preventDefault();

    if (!hostName.trim()) {
      alert("Please enter your name.");
      return;
    }

    // Temporary client-side room ID.
    // A backend API will generate and save real rooms later.
    const roomId = crypto.randomUUID();

    navigate(`/meeting/${roomId}`, {
      state: {
        meetingTitle: meetingTitle.trim() || "Untitled Meeting",
        hostName: hostName.trim(),
        isMicOn,
        isCameraOn,
        isPrivate,
      },
    });
  };

  const copyMeetingId = async () => {
    const demoId = "Your meeting ID will appear after creation.";

    try {
      await navigator.clipboard.writeText(demoId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
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


      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-14 items-start">

          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="mb-10">

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-5">
                <Video size={14} />
                Meeting setup
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
                Create a meeting
              </h1>

              <p className="text-neutral-500 text-base leading-relaxed max-w-lg">
                Set up your meeting, adjust your preferences, and invite
                people to join the conversation.
              </p>

            </div>


            <form onSubmit={handleCreateMeeting} className="space-y-8">

              {/* Meeting Details */}
              <div className="space-y-5">

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Meeting name
                  </label>

                  <input
                    type="text"
                    value={meetingTitle}
                    onChange={(e) => setMeetingTitle(e.target.value)}
                    placeholder="e.g. Product brainstorming"
                    className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                  />

                  <p className="text-xs text-neutral-400 mt-2">
                    Give your meeting a name so participants know what it's about.
                  </p>
                </div>


                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={hostName}
                    onChange={(e) => setHostName(e.target.value)}
                    placeholder="Enter your display name"
                    required
                    maxLength={40}
                    className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-white outline-none focus:border-black focus:ring-2 focus:ring-black/5 transition"
                  />
                </div>

              </div>


              {/* Device Preferences */}
              <div>

                <h2 className="text-base font-semibold mb-4">
                  Before you join
                </h2>

                <div className="space-y-3">

                  {/* Microphone */}
                  <div className="flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-2xl">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                        {isMicOn ? (
                          <Mic size={19} />
                        ) : (
                          <MicOff size={19} />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-medium">Microphone</p>
                        <p className="text-xs text-neutral-400">
                          {isMicOn ? "On when joining" : "Off when joining"}
                        </p>
                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() => setIsMicOn(!isMicOn)}
                      aria-pressed={isMicOn}
                      className={`w-12 h-7 rounded-full p-1 transition-colors ${
                        isMicOn ? "bg-black" : "bg-neutral-300"
                      }`}
                    >
                      <span
                        className={`block w-5 h-5 rounded-full bg-white transition-transform ${
                          isMicOn ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>

                  </div>


                  {/* Camera */}
                  <div className="flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-2xl">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center">
                        {isCameraOn ? (
                          <Video size={19} />
                        ) : (
                          <VideoOff size={19} />
                        )}
                      </div>

                      <div>
                        <p className="text-sm font-medium">Camera</p>
                        <p className="text-xs text-neutral-400">
                          {isCameraOn ? "On when joining" : "Off when joining"}
                        </p>
                      </div>

                    </div>

                    <button
                      type="button"
                      onClick={() => setIsCameraOn(!isCameraOn)}
                      aria-pressed={isCameraOn}
                      className={`w-12 h-7 rounded-full p-1 transition-colors ${
                        isCameraOn ? "bg-black" : "bg-neutral-300"
                      }`}
                    >
                      <span
                        className={`block w-5 h-5 rounded-full bg-white transition-transform ${
                          isCameraOn ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>

                  </div>

                </div>

              </div>


              {/* Privacy */}
              <div>

                <h2 className="text-base font-semibold mb-4">
                  Meeting access
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">

                  <button
                    type="button"
                    onClick={() => setIsPrivate(true)}
                    className={`p-4 rounded-2xl border text-left transition ${
                      isPrivate
                        ? "border-black bg-neutral-50 ring-1 ring-black"
                        : "border-neutral-200 bg-white"
                    }`}
                  >
                    <Lock size={19} className="mb-3" />

                    <p className="text-sm font-semibold mb-1">
                      Private meeting
                    </p>

                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Only people with your meeting link can join.
                    </p>

                  </button>


                  <button
                    type="button"
                    onClick={() => setIsPrivate(false)}
                    className={`p-4 rounded-2xl border text-left transition ${
                      !isPrivate
                        ? "border-black bg-neutral-50 ring-1 ring-black"
                        : "border-neutral-200 bg-white"
                    }`}
                  >
                    <Users size={19} className="mb-3" />

                    <p className="text-sm font-semibold mb-1">
                      Open meeting
                    </p>

                    <p className="text-xs text-neutral-500 leading-relaxed">
                      Anyone with the meeting link can join.
                    </p>

                  </button>

                </div>

              </div>


              {/* Create Button */}
              <button
                type="submit"
                className="w-full h-13 flex items-center justify-center gap-2 rounded-xl bg-black text-white font-medium hover:bg-neutral-800 transition group"
              >
                Create meeting
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-center text-xs text-neutral-400">
                By creating a meeting, you agree to use the platform responsibly.
              </p>

            </form>

          </motion.div>


          {/* Right: Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:sticky lg:top-10"
          >

            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-sm">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="text-sm font-semibold">Meeting preview</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Your meeting settings
                  </p>
                </div>

                <span className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Ready
                </span>

              </div>


              {/* Preview Screen */}
              <div className="relative aspect-video bg-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center mb-6">

                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black" />

                <div className="relative text-center">

                  <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-3">
                    {hostName.trim()
                      ? hostName.trim().charAt(0).toUpperCase()
                      : "?"}
                  </div>

                  <p className="text-white text-sm font-medium">
                    {hostName.trim() || "Your name"}
                  </p>

                  <p className="text-neutral-400 text-xs mt-1">
                    Camera preview
                  </p>

                </div>


                <div className="absolute bottom-4 left-4 flex items-center gap-2">

                  <span className="px-3 py-1.5 rounded-lg bg-black/50 text-white text-xs">
                    {hostName.trim() || "You"}
                  </span>

                </div>

              </div>


              {/* Preview Information */}
              <div className="space-y-4">

                <div>
                  <p className="text-xs text-neutral-400 mb-1">
                    Meeting title
                  </p>

                  <p className="font-semibold text-neutral-900">
                    {meetingTitle.trim() || "Untitled Meeting"}
                  </p>
                </div>


                <div className="flex items-center justify-between py-3 border-y border-neutral-100">

                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Mic size={16} />
                    Microphone
                  </div>

                  <span className="text-sm font-medium">
                    {isMicOn ? "Enabled" : "Disabled"}
                  </span>

                </div>


                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Video size={16} />
                    Camera
                  </div>

                  <span className="text-sm font-medium">
                    {isCameraOn ? "Enabled" : "Disabled"}
                  </span>

                </div>


                <div className="flex items-center justify-between py-3 border-y border-neutral-100">

                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    {isPrivate ? <Lock size={16} /> : <Users size={16} />}
                    Access
                  </div>

                  <span className="text-sm font-medium">
                    {isPrivate ? "Private" : "Open"}
                  </span>

                </div>

              </div>


              {/* Security Information */}
              <div className="mt-6 p-4 rounded-xl bg-blue-50 flex gap-3">

                <ShieldCheck
                  size={20}
                  className="text-blue-600 shrink-0"
                />

                <p className="text-xs text-blue-800 leading-relaxed">
                  Your meeting preferences will be applied when you enter the meeting.
                </p>

              </div>


              {/* Copy Information */}
              <button
                type="button"
                onClick={copyMeetingId}
                className="mt-5 w-full flex items-center justify-center gap-2 text-xs text-neutral-400 hover:text-neutral-700 transition"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? "Copied" : "Meeting ID will be generated after creation"}
              </button>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}