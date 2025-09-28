import { motion } from "framer-motion";
import { FaMicroscope, FaSchool } from "react-icons/fa";
import { ImAirplane, ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const stories = [
  {
    title: "From Kirby Place to Confidence",
    icon: <FaSchool className="text-cso-indigo text-3xl" />,
    color: "cso-indigo",
    quote: `Before joining CSO's school, I was afraid to speak in class. Now I can explain how a microscope works to my younger sister. The teachers here believe in us and show us that learning can be fun.`,
    author: "Priya, Age 12",
    role: "Student at Kirby Place School",
    desc1:
      "Priya’s journey is a testament to the transformative power of accessible, engaging education. Since joining Kirby Place School, she has not only improved academically but also gained the confidence and skills to inspire others.",
    achievements: [
      "300% improvement in reading level",
      "Became a peer tutor helping younger students",
      "Developed a passion for science and discovery",
    ],
    desc2:
      "Priya’s story highlights how CSO’s programs empower students to reach their full potential, fostering curiosity, confidence, and a love for learning.",
    link: "/impact-stories/priya",
  },
  {
    title: "Science Comes Alive",
    icon: <FaMicroscope className="text-cso-orange text-3xl" />,
    color: "cso-orange",
    quote: `The CSO workshop at our school was amazing! We learned about chemistry by making safe volcanoes and explored physics through fun experiments. Science is not boring anymore – it's magical!`,
    author: "Arjun, Age 15",
    role: "Student from Government High School, Delhi",
    desc1:
      "Arjun’s experience reflects how CSO’s interactive workshops transform learning. Hands-on experiments and engaging activities have not only improved his academic performance but also ignited a passion for STEM subjects.",
    achievements: [
      "40% increase in science scores",
      "Founded a science club at his school",
      "Preparing to pursue the science stream for higher studies",
    ],
    desc2:
      "Arjun’s journey illustrates how our programs make science accessible, exciting, and empowering for students across India.",
    link: "/impact-stories/arjun",
  },
  {
    title: "Aviation Dreams Taking Flight",
    icon: <ImAirplane className="text-cso-celtic-blue text-3xl" />,
    color: "cso-celtic-blue",
    quote: `The National Aviation Olympiad has opened my eyes to career possibilities I never knew existed. I'm now studying aerodynamics and dream of becoming an aerospace engineer.`,
    author: "Meera, Age 17",
    role: "Olympiad Participant from Mumbai",
    desc1:
      "Meera’s journey demonstrates how the National Aviation Olympiad empowers students to explore STEM careers, gain scholarships, and become role models for others.",
    achievements: [
      "Ranked among the Top 100 participants in the National Olympiad",
      "Awarded a ₹50,000 scholarship to pursue engineering",
      "Mentors 20+ junior students, inspiring the next generation of innovators",
    ],
    desc2:
      "Meera’s story reflects how CSO’s programs open doors to new opportunities, nurture talent, and foster leadership in young students across India.",
    link: "/impact-stories/meera",
  },
];

export default function Stories() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        {stories.map(
          (
            {
              title,
              icon,
              color,
              quote,
              author,
              role,
              desc1,
              achievements,
              desc2,
              link,
            },
            idx
          ) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={` rounded-xl p-4 md:p-8 bg-${color}/10`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={` h-fit w-fit shrink-0 bg-${color}/20 p-4 rounded-xl group-hover:scale-115 transition-all duration-300`}
                >
                  {icon}
                </span>
                <h3
                  className={`text-2xl md:text-[2rem]  font-bold font-roboto text-${color} `}
                >
                  {title}
                </h3>
              </div>

              <blockquote className="italic text-lg text-cso-dark-grey md:text-2xl mb-4 leading-relaxed ">
                <ImQuotesLeft
                  className={`text-4xl mb-3  inline text-${color}`}
                />
                &nbsp;
                <span className=""> {quote} </span>&nbsp;
                <ImQuotesRight
                  className={`text-4xl mb-3 inline-block text-${color}`}
                />
                <footer className=" text-xl not-italic text-cso-mid-grey">
                  - {author}, <p className="not-italic text-base">{role}</p>
                </footer>
              </blockquote>
              <p className="text-lg mb-2">{desc1}</p>
              <div className="mb-2  font-roboto text-cso-dark-grey">
                <p className="mb-2 text-xl font-bold">Key Achievements:</p>
                <ul className="list-disc text-lg list-inside space-y-1">
                  {achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-lg mb-6">{desc2}</p>

              <a
                href={link}
                className="text-cso-celtic-blue text-xl font-bold hover:underline font-roboto"
              >
                Read More Stories &rarr;
              </a>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
