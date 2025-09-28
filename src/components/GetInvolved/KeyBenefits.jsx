// KeyBenefitsSection.jsx
import {
  FaHandsHelping,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  {
    Icon: FaHandsHelping,
    text: "Trusted programs impacting students across New Delhi and India",
    color: "cso-indigo",
  },
  {
    Icon: FaMoneyBillWave,
    text: "Transparent and accountable use of donations",
    color: "cso-orange",
  },
  {
    Icon: FaChartLine,
    text: "Opportunities to see tangible results in education and outreach",
    color: "cso-celtic-blue",
  },
  {
    Icon: FaLightbulb,
    text: "Strengthening the foundation of STEM learning and innovation",
    color: "cso-green",
  },
];

export default function KeyBenefits() {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold font-roboto text-cso-dark-grey mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Key Benefits of Supporting CSO
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {benefits.map(({ Icon, text, color }, idx) => (
            <motion.div
              key={idx}
              className={`group  flex flex-col items-center gap-4  rounded-xl p-4 md:p-6  bg-${color}/10 `}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <div className="flex  ">
                <span
                  className={` h-fit w-fit shrink-0 bg-${color}/20 p-4 rounded-full group-hover:scale-115 transition-all duration-300`}
                >
                  <Icon className={`text-${color} text-4xl md:text-5xl`} />
                </span>
              </div>
              <p className="font-roboto  text-lg md:text-xl text-cso-dark-grey ">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
