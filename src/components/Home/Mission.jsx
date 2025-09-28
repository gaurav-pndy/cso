import { FaBullseye, FaLightbulb, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  {
    title: "Our Mission",
    icon: <FaBullseye className="text-cso-indigo text-4xl " />,
    text: "Making science accessible to all, creating life-changing opportunities.",
    color: "cso-indigo",
  },
  {
    title: "Our Vision",
    icon: <FaLightbulb className="text-cso-orange text-4xl " />,
    text: "A world where science drives innovation, equality, and growth.",
    color: "cso-orange",
  },
  {
    title: "Our Impact",
    icon: <FaUsers className="text-cso-celtic-blue text-4xl " />,
    text: "Bridging education gaps to empower future innovators and leaders.",
    color: "cso-celtic-blue",
  },
];

export default function Mission() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold  text-cso-dark-grey text-center mb-4"
        >
          Science is for Everyone
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-cso-mid-grey  text-lg md:text-xl text-center mb-8"
        >
          We believe that access to science and knowledge is a basic right, not
          a privilege. Our mission is to democratize access to scientific
          knowledge, make learning accessible to all, and create opportunities
          that transform lives and communities. Every step in science is a step
          toward freedom, progress, and a brighter future.
        </motion.p>
        <div className="grid grid-cols-1 max-w-5xl mx-auto md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 + idx * 0.09 }}
              className="rounded-xl   p-6 flex flex-col items-center text-center"
            >
              <div
                className={`mb-4 shrink-0 bg-${item.color}/20 p-5 rounded-full group-hover:scale-110 transition-all duration-300`}
              >
                {item.icon}
              </div>{" "}
              <div className={`text-2xl font-bold  text-${item.color} mb-2`}>
                {item.title}
              </div>
              <div className="text-cso-mid-grey  text-base">{item.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
