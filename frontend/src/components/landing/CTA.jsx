import { ArrowRight } from "lucide-react";
import Button from "../common/Button";

export default function CTA() {
  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-black text-white rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Your next meeting
            <br />
            starts here.
          </h2>

          <p className="text-neutral-400 mt-5 max-w-lg mx-auto">
            Bring your team together. No complicated setup.
            Just create, share, and connect.
          </p>

          <Button
            to="/create-meeting"
            variant="dark"
            className="mt-9 px-7 py-4"
          >
            Start a meeting
            <ArrowRight size={17} />
          </Button>

        </div>

      </div>

    </section>
  );
}