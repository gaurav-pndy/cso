import { motion } from "framer-motion";
import { FaHeart, FaSchool, FaStar, FaUsers } from "react-icons/fa";

export default function ImpactHero() {
  const stats = [
    {
      label: "Lives Transformed",
      value: "500+",
      desc: "Students empowered through our education and outreach programs",
      icon: <FaHeart className="text-cso-indigo text-4xl " />,
      color: "cso-indigo",
    },
    {
      label: "Workshop Participants",
      value: "2000+",
      desc: "Students actively engaged in hands-on science learning",
      icon: <FaUsers className="text-cso-orange text-4xl " />,
      color: "cso-orange",
    },
    {
      label: "Partner Schools & Universities",
      value: "25+",
      desc: "Educational institutions collaborating with us to enhance STEM education",
      icon: <FaSchool className="text-cso-celtic-blue text-4xl " />,
      color: "cso-celtic-blue",
    },
    {
      label: "Satisfaction Rate",
      value: "95%",
      desc: "Students reporting that science has become their favourite subject",
      icon: <FaStar className="text-cso-green text-4xl " />,
      color: "cso-green",
    },
  ];

  return (
    <section className="w-full bg-white py-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl max-w-6xl mx-auto md:text-[3.5rem] font-extrabold font-roboto text-cso-dark-grey mb-4"
        >
          Stories of Impact & Transformation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl font-roboto text-cso-mid-grey mb-12 max-w-4xl mx-auto leading-relaxed text-center"
        >
          Every student we reach, every workshop we conduct, and every program
          we run creates ripples of positive change. These stories reflect the
          real difference we make in the lives of young learners and communities
          across India. Our Impact at a Glance:
        </motion.p>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 + idx * 0.09 }}
              className="rounded-xl   flex flex-col items-center text-center"
            >
              <div
                className={`mb-4 shrink-0 bg-${stat.color}/20 p-5 rounded-full group-hover:scale-110 transition-all duration-300`}
              >
                {stat.icon}
              </div>{" "}
              <div
                className={`text-2xl md:text-3xl font-bold  text-${stat.color} `}
              >
                {stat.value}
              </div>
              <div className="text-cso-mid-grey font-medium mb-2  text-lg md:text-xl">
                {stat.label}
              </div>
              <p className="text-cso-mid-grey ">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="/impact-stories/stories"
          className="inline-block mt-14  px-6 py-3 rounded-lg bg-cso-celtic-blue hover:bg-cso-indigo text-white text-lg   shadow-md transition-all duration-300 font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.3 }}
        >
          Read Their Stories &rarr;
        </motion.a>
      </div>
    </section>
  );
}
