import { Plus, Link2, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plus,
    title: "Create a room",
    description:
      "Start a new meeting with a single click.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Share the invitation",
    description:
      "Copy your meeting link and share it with participants.",
  },
  {
    number: "03",
    icon: Users,
    title: "Start connecting",
    description:
      "Everyone joins the room and the conversation begins.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">

          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">
            Getting started
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
            Three steps.
            <br />
            That's all it takes.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number}>

                <div className="flex items-center justify-between border-b border-neutral-200 pb-5">

                  <span className="text-sm text-neutral-400 font-medium">
                    STEP {step.number}
                  </span>

                  <Icon size={22} />

                </div>

                <h3 className="text-2xl font-semibold mt-7">
                  {step.title}
                </h3>

                <p className="text-neutral-500 mt-3 leading-relaxed">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}