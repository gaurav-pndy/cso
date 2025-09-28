import { FaBookOpen, FaMicroscope, FaRocket, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";
import { ImAirplane } from "react-icons/im";

const pillars = [
  {
    title: "Education for All",
    description: (
      <>
        Through <em>Kirby Place School</em>, we provide{" "}
        <span className="font-semibold">free, quality education</span> to
        underprivileged children, opening doors to brighter futures.
      </>
    ),
    icon: <FaBookOpen className="text-cso-indigo text-3xl" />,
    bg: "bg-cso-indigo/20",
  },
  {
    title: "Scientific Outreach",
    description: (
      <>
        We make science{" "}
        <span className="font-semibold">engaging and accessible</span> with
        workshops, talks, and community programs that spark curiosity and
        learning.
      </>
    ),
    icon: <FaMicroscope className="text-cso-orange text-3xl" />,
    bg: "bg-cso-orange/20",
  },
  {
    title: "Aviation & Technology",
    description: (
      <>
        Through the{" "}
        <span className="font-semibold">National Aviation Olympiad 2026</span>{" "}
        and awareness initiatives, we prepare youth to explore careers in
        aviation and aerospace.
      </>
    ),
    icon: <ImAirplane className="text-cso-celtic-blue  text-3xl" />,
    bg: "bg-cso-celtic-blue/20",
  },
  {
    title: "Sustainability & Innovation",
    description: (
      <>
        We promote <span className="font-semibold">eco-friendly solutions</span>{" "}
        with recycling, green technology, and community projects driving
        sustainable growth.
      </>
    ),
    icon: <FaLeaf className="text-cso-green text-3xl" />,
    bg: "bg-cso-green/20",
  },
];

export default function Pillars() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold  text-cso-dark-grey text-center mb-4"
        >
          Our Four Pillars of Impact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-cso-mid-grey  text-lg md:text-xl text-center italic mb-8"
        >
          Building a foundation of knowledge, opportunity, and empowerment
          through four transformative initiatives.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 + idx * 0.1 }}
              className={`rounded-xl  p-4 flex flex-col items-center text-center border border-cso-light-grey group`}
            >
              <div
                className={`mb-4 shrink-0 ${pillar.bg} p-5 rounded-full group-hover:scale-110 transition-all duration-300`}
              >
                {pillar.icon}
              </div>
              <div className="text-xl font-semibold text-cso-dark-grey mb-3">
                {pillar.title}
              </div>
              <div className="text-cso-mid-grey text-base ">
                {pillar.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
