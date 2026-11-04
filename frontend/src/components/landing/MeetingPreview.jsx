import {
  Mic,
  Video,
  MonitorUp,
  PhoneOff,
  MoreHorizontal,
  Users,
} from "lucide-react";

const participants = [
  { name: "Alex Morgan", color: "bg-blue-200", initials: "AM" },
  { name: "Sarah Wilson", color: "bg-purple-200", initials: "SW" },
  { name: "John Smith", color: "bg-orange-200", initials: "JS" },
  { name: "Emily Rose", color: "bg-green-200", initials: "ER" },
];

export default function MeetingPreview() {
  return (
    <div className="relative max-w-2xl mx-auto">

      {/* Background decoration */}
      <div className="absolute inset-0 bg-blue-100/50 blur-3xl rounded-full scale-90" />

      {/* Meeting Window */}
      <div className="relative bg-white border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden">

        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">

          <div>
            <p className="font-semibold text-sm">
              Weekly Team Meeting
            </p>

            <p className="text-xs text-neutral-400 mt-1">
              meetly.app / room-82x91
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Live
          </div>

        </div>

        {/* Participants */}
        <div className="p-4 grid grid-cols-2 gap-3">

          {participants.map((person, index) => (
            <div
              key={person.initials}
              className={`aspect-4/3 ${person.color} rounded-xl flex items-center justify-center relative overflow-hidden`}
            >
              <div className="w-16 h-16 bg-white/70 rounded-full flex items-center justify-center text-xl font-semibold text-neutral-700">
                {person.initials}
              </div>

              <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-md">
                {person.name}
              </div>

              {index === 0 && (
                <div className="absolute top-3 right-3 bg-green-500 w-2 h-2 rounded-full" />
              )}
            </div>
          ))}

        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between px-5 py-4 bg-neutral-50 border-t border-neutral-100">

          <div className="flex items-center gap-2 text-neutral-500 text-xs">
            <Users size={15} />
            4 participants
          </div>

          <div className="flex items-center gap-3">

            <div className="bg-white border border-neutral-200 p-2 rounded-lg">
              <Mic size={17} />
            </div>

            <div className="bg-white border border-neutral-200 p-2 rounded-lg">
              <Video size={17} />
            </div>

            <div className="bg-white border border-neutral-200 p-2 rounded-lg">
              <MonitorUp size={17} />
            </div>

            <div className="bg-red-500 text-white p-2 rounded-lg">
              <PhoneOff size={17} />
            </div>

          </div>

          <MoreHorizontal size={20} className="text-neutral-400" />

        </div>

      </div>

    </div>
  );
}