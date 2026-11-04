import { Video, ShieldCheck, Zap } from "lucide-react";

const highlights = [
  {
    icon: Video,
    title: "Simple by design",
    description:
      "No complicated setup or unnecessary steps. Just create a room and start talking.",
  },
  {
    icon: ShieldCheck,
    title: "Private conversations",
    description:
      "Meeting links and passcodes help you control who gets access to your rooms.",
  },
  {
    icon: Zap,
    title: "Ready in seconds",
    description:
      "Bring people together quickly without lengthy registration or configuration.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">
              About us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-5 leading-tight">
              Better conversations
              <span className="text-neutral-400">
                {" "}start with simplicity.
              </span>
            </h2>

            <p className="text-neutral-500 text-lg leading-relaxed mt-7">
              We believe connecting with people should be effortless.
              That's why we're building a meeting experience focused
              on simplicity, accessibility, and meaningful conversations.
            </p>

            <p className="text-neutral-500 leading-relaxed mt-5">
              Whether it's a quick discussion, a team collaboration,
              or a conversation with friends, getting together
              should never feel complicated.
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-8">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-5">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-neutral-100 flex items-center justify-center">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-neutral-500 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}