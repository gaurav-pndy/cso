import AboutHero from "../components/About/AboutHero";
import WhatWeBelieve from "../components/About/WhatWeBelieve";
import FourPillars from "../components/About/FourPillars";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <AboutHero />
      <WhatWeBelieve />
      <FourPillars />
      <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-roboto font-extrabold text-3xl md:text-5xl text-cso-dark-grey text-center mb-6"
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-roboto text-lg md:text-xl text-cso-mid-grey text-center mb-10"
          >
            Whether you're an educator shaping young minds, a curious student
            exploring the world of science, a dedicated volunteer, or a
            passionate supporter, there’s a meaningful role for you in our
            mission to make science exciting and inclusive.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/get-involved"
              className="px-10 py-3 rounded-lg font-roboto text-lg font-semibold text-white bg-gradient-to-r from-cso-orange to-cso-yellow shadow hover:scale-105 transition-transform duration-200 text-center"
            >
              Explore Our Work
            </Link>
            <Link
              to="/get-involved"
              className="px-10 py-3 rounded-lg font-roboto text-lg font-semibold text-white bg-gradient-to-r from-cso-celtic-blue to-cso-crystal-blue shadow hover:scale-105 transition-transform duration-200 text-center"
            >
              Get Involved Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
