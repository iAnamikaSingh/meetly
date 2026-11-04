import { motion } from "motion/react";

import { fadeUp } from "../../animations/variants";
import { smoothTransition } from "../../animations/transitions";

import Button from "../common/Button";
import MeetingPreview from "./MeetingPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >

            <motion.span
              variants={fadeUp}
              transition={smoothTransition}
              className="inline-block px-4 py-2 bg-neutral-100 rounded-full text-sm"
            >
              A simpler way to connect
            </motion.span>

            <motion.h1
              variants={fadeUp}
              transition={smoothTransition}
              className="text-5xl md:text-7xl font-bold mt-8 tracking-tight"
            >
              Meet better.
              <br />

              <span className="text-neutral-400">
                Work closer.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={smoothTransition}
              className="mt-6 text-lg text-neutral-500 max-w-lg"
            >
              Create a meeting, share your link,
              and start meaningful conversations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={smoothTransition}
              className="flex gap-4 mt-8"
            >
              <Button to="/create-meeting">
                Create meeting
              </Button>

              <Button to="/join" variant="secondary">
                Join meeting
              </Button>
            </motion.div>

          </motion.div>

          {/* Meeting Preview */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}

            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <MeetingPreview />
          </motion.div>

        </div>

      </div>

    </section>
  );
}