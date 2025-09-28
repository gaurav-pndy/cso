import { motion } from "framer-motion";
import { FaBookOpen, FaLeaf, FaMicroscope } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { IoBookOutline } from "react-icons/io5";

const pillars = [
  {
    title: "Education for All",
    icon: <FaBookOpen className="text-cso-indigo  text-2xl" />,
    color: "cso-indigo",
    description: (
      <>
        At the Centre for Scientific Outreach (CSO), we believe education is the
        true foundation of empowerment. At our school in Kirby Place, New Delhi,
        we provide underprivileged children with free, holistic education that
        combines learning, care, and opportunity.
        <br />
        <p className="mt-2 font-semibold">What We Do:</p>
        <ul className="list-disc list-inside  space-y-1">
          <li>
            Quality education supporting both academic and personal growth
          </li>
          <li>Nutritious daily meals to boost health and focus</li>
          <li>Mentoring and guidance tailored to each child</li>
          <li>Strong literacy and numeracy foundations</li>
          <li>Early exposure to science to spark curiosity and confidence</li>
        </ul>{" "}
        <p className="mt-2">
          Through Education for All, we offer not just classrooms but futures
          full of possibility.
        </p>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", // education
  },
  {
    title: "Scientific Outreach",
    icon: <FaMicroscope className="text-cso-orange text-2xl" />,
    color: "cso-orange",
    description: (
      <>
        We believe that science should be exciting, engaging, and accessible to
        all. Our programs go beyond textbooks, bringing science to life for
        schools and communities across Delhi and India.
        <br />
        <p className="mt-2 font-semibold">What We Do:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Hands-on workshops in schools and colleges that ignite curiosity.
          </li>
          <li>
            Public talks, exhibitions, and festivals that make science exciting
            for all ages
          </li>
          <li>Training for teachers to use creative ways of teaching STEM</li>
          <li>Citizen science projects where communities join real research</li>
          <li>
            Easy-to-understand activities that make science relatable and
            inspiring
          </li>
        </ul>
        <p className="mt-2">
          Through Scientific Outreach, we turn learning into exploration and
          discovery.
        </p>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1562411052-105105232432?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // science outreach
  },
  {
    title: "Aviation & Technology Awareness",
    icon: <ImAirplane className="text-cso-celtic-blue  text-2xl" />,
    color: "cso-celtic-blue",
    description: (
      <>
        India is entering a new era in aviation and aerospace, and CSO is
        helping prepare the next generation for it. Through our initiatives, we
        bring together students, educators, industry experts, and policymakers
        to build a future-ready ecosystem.
        <br />
        <p className="mt-2 font-semibold">What We Do:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Hosting India’s first National Aviation Olympiad 2026, a platform to
            discover and celebrate young talent
          </li>
          <li>
            Connecting academia, industry, and policy to create real
            opportunities for students
          </li>
          <li>
            Offering mentoring, exposure, and skill-building programs for
            aviation and aerospace careers
          </li>
          <li>
            Recognising talent nationally, encouraging innovators and dreamers
            to aim high
          </li>
          <li>
            Raising awareness about emerging technologies like drones and
            sustainable aviation
          </li>
        </ul>
        <p className="mt-2">
          Through Aviation & Technology Awareness, CSO is shaping the path for
          India’s future aviators, engineers, and innovators.
        </p>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1728049123679-829bcdb1f879?q=80&w=1117&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // aviation tech
  },
  {
    title: "Sustainability & Innovation",
    icon: <FaLeaf className="text-cso-green text-2xl" />,
    color: "cso-green",
    description: (
      <>
        At the CSO, we believe science must serve both humanity and the
        environment. Our sustainability and innovation programs empower
        communities while advancing eco-friendly solutions for India’s future.
        <br />
        <p className="mt-2 font-semibold">What We Do:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Run waste recycling and management projects for cleaner cities
          </li>
          <li>Launch green technology initiatives with local communities</li>
          <li>
            Create employment opportunities through eco-conscious enterprises
          </li>
          <li>Promote environmental awareness with science-based education</li>
          <li>Develop innovation labs focused on sustainable technologies</li>
        </ul>
        <p className="mt-2">
          Through Sustainability & Innovation, CSO is building a future where
          scientific progress and environmental responsibility go hand in hand.
        </p>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1515344905723-babc01aac23d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // sustainability
  },
];

export default function FourPillars() {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-roboto text-cso-dark-grey mb-10 text-center">
          Our Four Pillars in Detail
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg md:text-xl font-roboto text-cso-mid-grey mb-16">
          At the Centre for Scientific Outreach (CSO), our mission is to make
          science accessible, meaningful, and transformative. Guided by four
          core pillars, we work across Delhi, India, and beyond to create
          lasting impact and empower future generations through science
          education and outreach.
        </p>

        {pillars.map((pillar, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={pillar.title}
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
                    className={` h-fit w-fit shrink-0 bg-${pillar.color}/20 p-3 rounded-xl group-hover:scale-115 transition-all duration-300`}
                  >
                    {pillar.icon}
                  </span>{" "}
                  <h3
                    className={`text-[1.6rem] font-bold  text-${pillar.color}`}
                  >
                    {pillar.title}
                  </h3>
                </div>
                <div className="text-cso-mid-grey leading-relaxed">
                  {pillar.description}
                </div>
              </div>
              <img
                src={pillar.imgUrl}
                alt={pillar.title}
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
