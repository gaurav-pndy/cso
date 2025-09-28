import { FaGraduationCap, FaBriefcase, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const transformations = [
  {
    title: "Academic Excellence",
    icon: <FaGraduationCap className="text-cso-indigo text-3xl" />,
    desc: "Students consistently achieve significant improvements in science and STEM learning, with an average 40% increase in science scores.",
    points: [
      "Stronger understanding of scientific concepts",
      "Enhanced problem-solving and analytical skills",
      "Increased confidence in STEM subjects",
    ],
    color: "cso-indigo",
  },
  {
    title: "Career Aspirations",
    icon: <FaBriefcase className="text-cso-orange text-3xl" />,
    desc: "Our initiatives inspire students to explore STEM careers and envision new possibilities for their future.",
    points: [
      "Greater interest in science-related careers",
      "Awareness of academic and professional opportunities",
      "Clearer guidance on educational pathways",
    ],
    color: "cso-orange",
  },
  {
    title: "Community Impact",
    icon: <FaUsers className="text-cso-celtic-blue text-3xl" />,
    desc: "Students become ambassadors of science in their communities, sharing knowledge and inspiring others.",
    points: [
      "Teaching and mentoring younger siblings",
      "Starting or leading science clubs in schools",
      "Participating in local and national competitions",
    ],
    color: "cso-celtic-blue",
  },
];

export default function TransformationTypes() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-extrabold font-roboto text-cso-dark-grey text-center mb-4"
        >
          Types of Transformation We See
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-cso-mid-grey text-lg md:text-xl font-roboto text-center mb-10 max-w-3xl mx-auto"
        >
          Our programs create multiple layers of positive change, empowering
          students academically, socially, and personally.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
              className="rounded-xl border border-cso-light-grey p-4 md:p-8 flex flex-col group  items-start"
            >
              <div
                className={`mb-2 h-fit w-fit shrink-0 bg-${t.color}/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
              >
                {t.icon}
              </div>
              <h3 className="text-lg md:text-2xl font-bold font-roboto text-cso-dark-grey mb-4">
                {t.title}
              </h3>
              <p className="text-cso-mid-grey mb-2">{t.desc}</p>
              <ul className="text-cso-mid-grey font-roboto text-base list-disc list-outside ml-4 space-y-2">
                {t.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
