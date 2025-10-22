import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaSyncAlt, FaChild, FaFlask, FaToolbox } from "react-icons/fa";

const donationOptions = [
  {
    title: "Monthly Giving – Sustained Impact",
    description:
      "Become a monthly donor and provide consistent support to ensure our programs continue to grow and reach more students across India.",
    amount: "Starting from ₹500/month",
    buttonLabel: "Choose This Option",
    buttonLink: "/donate/monthly-giving",
    bgGradient: "from-cso-orange to-cso-yellow",
    color: "cso-orange",
    Icon: FaSyncAlt,
  },
  {
    title: "Sponsor a Child – Transform a Life",
    description:
      "Fully sponsor a child’s education at Kirby Place School and empower them with access to quality education, mentorship, and daily nourishment.",
    amount: "₹2,000/month per child",
    buttonLabel: "Choose This Option",
    buttonLink: "/donate/sponsor-child",
    bgGradient: "from-cso-crystal-blue to-cso-celtic-blue",
    color: "cso-crystal-blue",
    Icon: FaChild,
  },
  {
    title: "Fund a Workshop – Inspire Curiosity",
    description:
      "Sponsor a complete science workshop for a school and help students experience hands-on learning, interactive experiments, and STEM enrichment.",
    amount: "₹10,000 per workshop",
    buttonLabel: "Choose This Option",
    buttonLink: "/donate/fund-workshop",
    bgGradient: "from-cso-green to-cso-indigo",
    color: "cso-green",
    Icon: FaFlask,
  },
  {
    title: "Support Equipment – Enable Learning",
    description:
      "Help us equip classrooms and labs with essential laboratory tools, learning materials, and STEM resources, creating a better environment for scientific exploration.",
    amount: "₹5,000 – ₹50,000",
    buttonLabel: "Choose This Option",
    buttonLink: "/donate/support-equipment",
    bgGradient: "from-cso-red to-cso-orange",
    color: "cso-red",
    Icon: FaToolbox,
  },
];

export default function WaysToSupport() {
  const [showDonate, setShowDonate] = useState(false);

  return (
    <section className="w-full bg-white py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-roboto text-cso-dark-grey mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Ways to Support Our Mission
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-center text-lg md:text-xl font-roboto text-cso-mid-grey mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Join us in shaping the future of science education in India. Your
          contribution helps us reach underserved communities, inspire young
          minds, and create lasting impact. Choose the donation option that best
          aligns with your values and capacity.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {donationOptions.map((option, idx) => {
            const IconComponent = option.Icon;
            return (
              <motion.div
                key={option.title}
                className="border border-cso-light-grey rounded-xl p-4  md:p-6  flex flex-col justify-between group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-4 ">
                  <span
                    className={` h-fit w-fit shrink-0 bg-${option.color}/20 p-4 rounded-xl group-hover:scale-115 transition-all duration-300`}
                  >
                    <IconComponent
                      className={`text-4xl text-${option.color}`}
                    />
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-roboto text-cso-dark-grey mt-2 mb-3">
                  {option.title}
                </h3>
                <p className="font-roboto text-lg text-cso-mid-grey mb-4 leading-relaxed">
                  {option.description}
                </p>
                <p className="font-roboto text-xl font-semibold text-cso-indigo mb-6">
                  {option.amount}
                </p>
                <button
                  onClick={() => setShowDonate(true)}
                  className={`inline-block w-full text-center py-3 rounded-lg cursor-pointer font-roboto font-bold text-white bg-gradient-to-r ${option.bgGradient} hover:scale-105 transition-transform duration-200`}
                >
                  {option.buttonLabel}
                </button>
              </motion.div>
            );
          })}
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
  );
}
