import { features } from "../../data/features";

export default function Features() {
  return (
    <section id="features" className="py-24 bg-neutral-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-14">

          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>

          <p className="text-neutral-500 mt-5 leading-relaxed">
            Simple tools designed to make online meetings
            feel effortless.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white border border-neutral-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >

                <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
                  <Icon size={23} />
                </div>

                <h3 className="font-semibold text-lg mt-7">
                  {feature.title}
                </h3>

                <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}