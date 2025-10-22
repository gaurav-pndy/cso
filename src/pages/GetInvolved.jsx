import { useState } from "react";
import GetStarted from "../components/GetInvolved/GetStarted";
import KeyBenefits from "../components/GetInvolved/KeyBenefits";
import Section1 from "../components/GetInvolved/Section1";
import WaysToSupport from "../components/GetInvolved/WaysToSupport";
import { motion, AnimatePresence } from "framer-motion";

const GetInvolved = () => {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <div>
      <Section1 />
      <WaysToSupport />
      <KeyBenefits />
      <GetStarted />
      <section className="w-full bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-roboto font-extrabold text-3xl md:text-5xl text-cso-dark-grey text-center mb-6"
          >
            Join the Movement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-roboto text-lg md:text-xl text-cso-mid-grey text-center mb-10"
          >
            Every step in science is a step toward knowledge, opportunity, and
            empowerment. Take that step with us and help shape the next
            generation of innovators.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="/get-involved"
              className="px-10 py-3 rounded-lg font-roboto text-lg font-semibold text-white bg-gradient-to-r from-cso-orange to-cso-yellow shadow hover:scale-105 transition-transform duration-200 text-center"
            >
              Volunteer With Us
            </a>
            <button
              onClick={() => setShowDonate(true)}
              className="px-10 py-3 rounded-lg font-roboto text-lg font-semibold text-white bg-gradient-to-r from-cso-celtic-blue to-cso-crystal-blue shadow hover:scale-105 transition-transform duration-200 text-center"
            >
              Donate Now
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showDonate && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex justify-center items-center z-[9999] px-4 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white overflow-hidden rounded-2xl shadow-2xl max-w-3xl w-full relative"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <button
                  onClick={() => setShowDonate(false)}
                  className="absolute top-3 right-7 text-gray-600 hover:text-black text-3xl font-bold"
                >
                  ×
                </button>
                <iframe
                  width="100%"
                  height="700"
                  src="https://zohosecurepay.in/checkout/fq35wqxe-8t0it3x73g4s1/Donate-Now"
                  style={{ border: "none" }}
                  title="Donate Now"
                ></iframe>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default GetInvolved;
