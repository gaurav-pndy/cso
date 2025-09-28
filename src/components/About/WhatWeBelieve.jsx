import {
  FaFlask,
  FaLightbulb,
  FaHandHoldingHeart,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";

const beliefs = [
  {
    title: "Science is for Everyone",
    icon: <FaFlask className="text-cso-celtic-blue text-2xl" />,
    text: "Scientific discovery isn’t just for labs or elite institutions—it belongs to every curious mind. We believe everyone deserves the chance to learn, explore, and engage with science regardless of background.",
    color: "cso-celtic-blue",
  },
  {
    title: "Real-World Impact",
    icon: <FaLightbulb className="text-cso-golden-blue text-2xl" />,
    text: "We aim for more than theory. Our programmes are designed to translate scientific knowledge into practical action that improves lives. From hands-on workshops to community science fairs, we create opportunities that foster growth, understanding, and empowerment.",
    color: "cso-golden-blue",
  },
  {
    title: "Inclusive Education",
    icon: <FaHandHoldingHeart className="text-cso-orange text-2xl" />,
    text: "Quality science education is a fundamental right—not a privilege. We work to break down socioeconomic, geographic, and resource-based barriers so that students everywhere in India can access meaningful learning.",
    color: "cso-orange",
  },
  {
    title: "Sustainable Future",
    icon: <FaLeaf className="text-cso-green text-2xl" />,
    text: "We are committed to environmental consciousness and green innovation. Every project at CSO is designed with sustainability in mind—because we believe science should serve humanity and protect our planet for future generations.",
    color: "cso-green",
  },
];

export default function WhatWeBelieve() {
  return (
    <section className="w-full bg-white py-14 ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-extrabold font-roboto text-cso-dark-grey text-center mb-4"
        >
          What We Believe In
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-cso-mid-grey text-lg md:text-xl font-roboto text-center mb-10 max-w-3xl mx-auto"
        >
          At the Centre for Scientific Outreach (CSO), our values guide every
          classroom session, every community programme, and every initiative we
          launch across Delhi & India. They reflect what we stand for—and what
          we work tirelessly to achieve.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {beliefs.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 + idx * 0.09 }}
              className="rounded-xl border border-cso-light-grey p-4 md:p-6 flex flex-col group text-center md:text-left items-center md:items-start  "
            >
              <div
                className={`mb-2 h-fit w-fit shrink-0 bg-${b.color}/20 p-4 rounded-xl group-hover:scale-115 transition-all duration-300`}
              >
                {b.icon}
              </div>{" "}
              <div className="text-lg md:text-xl font-bold font-roboto text-cso-dark-grey mb-1">
                {b.title}
              </div>
              <div className="text-cso-mid-grey font-roboto text-base">
                {b.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
