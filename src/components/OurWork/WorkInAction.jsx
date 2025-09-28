import { motion } from "framer-motion";
import { FaMicroscope, FaSchool } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";

const works = [
  {
    tagline: "Education for All",
    title: "Kirby Place School",

    icon: <FaSchool className="text-cso-indigo  text-3xl" />,
    color: "cso-indigo",
    description: (
      <>
        Transforming lives through accessible education in New Delhi’s
        underserved communities.
        <br />
        <p className="mt-2 font-semibold">Key Highlights:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Free education for underprivileged children</li>
          <li>Daily nutritious meals to fuel learning</li>
          <li>
            Focused programs on literacy, numeracy, and scientific curiosity
          </li>
          <li>Personalized mentoring and guidance for every child</li>
          <li>Building strong foundations for lifelong learning</li>
        </ul>
        <a
          href="/our-work/kirby-place-school"
          className=" mt-4 text-cso-celtic-blue font-semibold hover:underline flex items-center gap-2 w-fit"
        >
          Learn More <FaArrowRightLong />
        </a>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", // school education
  },
  {
    tagline: "Making Science Accessible",
    title: "Scientific Outreach Programs",
    icon: <FaMicroscope className="text-cso-orange text-3xl" />,
    color: "cso-orange",
    description: (
      <>
        We aim to make science exciting, approachable, and inspiring for
        thousands of students across India. Our outreach programs bridge the gap
        between curiosity and knowledge, encouraging young minds to explore the
        wonders of science.
        <br />
        <p className="mt-2 font-semibold">Key Highlights:</p>
        <ul className="list-disc list-inside  space-y-1">
          <li>Interactive science workshops in schools and colleges</li>
          <li>Public science talks, exhibitions, and demonstrations</li>
          <li>Teacher training programs to enhance STEM education</li>
          <li>Citizen science projects fostering community participation</li>
          <li>Community-based learning initiatives</li>
        </ul>
        <a
          href="/our-work/kirby-place-school"
          className=" mt-4 text-cso-celtic-blue font-semibold hover:underline flex items-center gap-2 w-fit"
        >
          Learn More <FaArrowRightLong />
        </a>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1698808342955-500cb9b9a25e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // science outreach
  },
  {
    tagline: "Aviation & Technology Awareness",
    title: "National Aviation Olympiad 2026",
    icon: <ImAirplane className="text-cso-celtic-blue  text-3xl" />,
    color: "cso-celtic-blue",
    description: (
      <>
        Preparing India’s youth for careers in the fast-growing aviation and
        aerospace sector, the National Aviation Olympiad is a platform that
        combines learning, competition, and career preparation.
        <br />
        <p className="mt-2 font-semibold">Key Highlights:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>India’s first large-scale aviation-focused Olympiad</li>
          <li>
            Connecting students with industry experts, academia, and
            policymakers
          </li>
          <li>
            Career guidance and preparation for aviation and aerospace
            professions
          </li>
          <li>
            National platform for talent recognition and skill development
          </li>
          <li>Nurturing the next generation of aviation professionals</li>
        </ul>
        <a
          href="/our-work/kirby-place-school"
          className=" mt-4 text-cso-celtic-blue font-semibold hover:underline flex items-center gap-2 w-fit"
        >
          Learn More <FaArrowRightLong />
        </a>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1530545124313-ce5e8eae55af?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // aviation
  },
];

export default function WorkInAction() {
  return (
    <section className="w-full bg-white pt-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl max-w-6xl mx-auto md:text-[3.5rem] font-extrabold font-roboto text-cso-dark-grey mb-4 text-center"
        >
          Our Work in Action
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl font-roboto text-cso-mid-grey mb-12 max-w-4xl mx-auto leading-relaxed text-center"
        >
          From classroom education to national aviation olympiad, we are
          committed to making science accessible, engaging, and inspiring for
          communities across India. Our initiatives reach students from all
          backgrounds, empowering them to explore, learn, and achieve their
          potential.
        </motion.p>

        {works.map((work, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 mb-16 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 font-roboto text-cso-dark-grey">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={` h-fit w-fit shrink-0 bg-${work.color}/20 p-4 rounded-xl group-hover:scale-115 transition-all duration-300`}
                  >
                    {work.icon}
                  </span>{" "}
                  <div>
                    <span className=" font-semibold text-cso-dark-grey">
                      {work.tagline}
                    </span>
                    <h3
                      className={`text-[1.6rem] font-bold  text-${work.color}`}
                    >
                      {work.title}
                    </h3>
                  </div>
                </div>
                <div className="text-cso-mid-grey text-lg leading-relaxed">
                  {work.description}
                </div>
              </div>
              <img
                src={work.imgUrl}
                alt={work.title}
                loading="lazy"
                className="rounded-lg w-full max-h-[30rem] md:w-1/2 object-cover shadow-lg"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
