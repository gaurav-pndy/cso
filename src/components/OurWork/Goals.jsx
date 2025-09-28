import {
  FaBookOpen,
  FaMicroscope,
  FaRocket,
  FaLeaf,
  FaBrain,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ImAirplane } from "react-icons/im";

const goals = [
  {
    title: "Democratize Science",
    description: (
      <>
        Making science accessible to all by breaking barriers and nurturing
        curiosity
      </>
    ),
    icon: <FaMicroscope className="text-cso-indigo text-3xl" />,
    bg: "bg-cso-indigo/20",
  },
  {
    title: "Create Opportunities",
    description: (
      <>
        Providing underserved communities with education, mentorship, and
        hands-on learning for success.
      </>
    ),
    icon: <FaBookOpen className="text-cso-orange text-3xl" />,
    bg: "bg-cso-orange/20",
  },
  {
    title: "Inspire Innovation",
    description: (
      <>
        Encouraging scientific thinking and innovation among students from
        classrooms to national competitions.
      </>
    ),
    icon: <FaBrain className="text-cso-celtic-blue  text-3xl" />,
    bg: "bg-cso-celtic-blue/20",
  },
  {
    title: "Build Sustainability",
    description: (
      <>
        Promoting environmental awareness and sustainable practices through
        science and technology.
      </>
    ),
    icon: <FaLeaf className="text-cso-green text-3xl" />,
    bg: "bg-cso-green/20",
  },
];

export default function Goals() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold  text-cso-dark-grey text-center mb-4"
        >
          Our Goals & Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-cso-mid-grey max-w-5xl mx-auto text-lg md:text-xl text-center italic mb-8"
        >
          Every initiative we undertake is driven by a commitment to make
          science accessible, meaningful, and transformative for communities
          across India.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {goals.map((goal, idx) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 + idx * 0.1 }}
              className={`rounded-xl  p-4 flex flex-col items-center text-center border border-cso-light-grey group`}
            >
              <div
                className={`mb-4 shrink-0 ${goal.bg} p-5 rounded-full group-hover:scale-110 transition-all duration-300`}
              >
                {goal.icon}
              </div>
              <div className="text-xl font-semibold text-cso-dark-grey mb-3">
                {goal.title}
              </div>
              <div className="text-cso-mid-grey text-base ">
                {goal.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
