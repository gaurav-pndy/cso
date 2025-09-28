import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="w-full bg-white py-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl max-w-6xl mx-auto md:text-[3.5rem] font-extrabold font-roboto text-cso-dark-grey mb-10"
        >
          About the{" "}
          <span className="text-cso-orange">
            Centre for Scientific Outreach (CSO)
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl md:text-3xl italic font-roboto text-cso-indigo font-semibold mb-2"
        >
          Science is for everyone.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl font-roboto text-cso-mid-grey mb-6 max-w-4xl mx-auto leading-relaxed"
        >
          At CSO, we believe that knowledge is not just information — it is a
          force that liberates minds, transforms communities, and creates
          opportunities where none existed before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto bg-cso-celtic-blue/6 rounded-lg p-6"
        >
          <h2 className="font-bold font-roboto text-cso-dark-grey text-2xl md:text-3xl mb-2">
            Our Mission
          </h2>
          <p className="font-roboto text-cso-mid-grey text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            To democratize access to scientific knowledge and translate it into
            real-world opportunities that change lives. We bridge the gap
            between complex ideas and practical understanding, making science
            accessible, engaging, and meaningful for all.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 italic font-roboto text-cso-indigo text-2xl md:text-3xl"
        >
          “सा विद्या या विमुक्तये” —{" "}
          <span className="font-semibold">
            {" "}
            That is knowledge which liberates.
          </span>
        </motion.blockquote>
      </div>
    </section>
  );
}
