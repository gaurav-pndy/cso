import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-roboto font-extrabold text-3xl md:text-5xl text-cso-dark-grey text-center mb-6"
        >
          Join Us in Making Science Accessible
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-roboto text-lg md:text-xl text-cso-mid-grey text-center mb-10"
        >
          Whether you're a school, volunteer, donor, or just passionate about
          education, there's a place for you in our mission.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-5">
          <a
            href="/get-involved"
            className="px-10 py-3 rounded-lg font-roboto text-lg font-semibold text-white bg-gradient-to-r from-cso-orange to-cso-yellow shadow hover:scale-105 transition-transform duration-200 text-center"
          >
            Get Involved
          </a>
          <a
            href="/support"
            className="px-10 py-3 rounded-lg font-roboto text-lg font-semibold text-white bg-gradient-to-r from-cso-celtic-blue to-cso-crystal-blue shadow hover:scale-105 transition-transform duration-200 text-center"
          >
            Support Our Cause
          </a>
        </div>
      </div>
    </section>
  );
}
