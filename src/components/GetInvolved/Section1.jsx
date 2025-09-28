import { motion } from "framer-motion";
import { FaMicroscope, FaSchool, FaUser } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCorporateFare } from "react-icons/md";

const involvementPaths = [
  {
    title: "Educational Partnerships – For Schools",
    icon: <FaSchool className="text-cso-indigo  text-2xl" />,
    color: "cso-indigo",
    description: (
      <>
        Partner with CSO to bring hands-on science workshops, competitions, and
        Olympiads directly to your students. Together, we can spark curiosity,
        enhance STEM learning, and inspire the innovators of tomorrow.
        <br />
        <p className="mt-2 font-semibold">What We Do:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Conduct interactive science workshops for students</li>
          <li>
            Facilitate teacher training and professional development programs
          </li>
          <li>
            Encourage participation in the National Aviation Olympiad 2026
          </li>
          <li>Provide customized STEM curriculum support for classrooms</li>
          <li>Guide students in science fairs and exhibitions</li>
        </ul>
        <a
          href="/our-work/kirby-place-school"
          className=" mt-4 text-cso-celtic-blue font-semibold hover:underline flex items-center gap-2 w-fit"
        >
          Partner With Us <FaArrowRightLong />
        </a>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1510531704581-5b2870972060?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Contribute Your Time, Knowledge, and Mentorship",
    icon: <FaUser className="text-cso-orange text-2xl" />,
    color: "cso-orange",
    description: (
      <>
        Help us reach more communities and inspire young minds by sharing your
        expertise, passion, and time.
        <br />
        <p className="mt-2 font-semibold">What We Do:</p>
        <ul className="list-disc list-inside  space-y-1">
          <li>
            Teach at Kirby Place School and empower students with quality
            education
          </li>
          <li>Lead science workshops and hands-on demonstrations</li>
          <li>Mentor students in STEM subjects and nurture their curiosity</li>
          <li>Help organize community outreach events</li>
          <li>Contribute to curriculum development for impactful learning</li>
        </ul>
        <a
          href="/our-work/kirby-place-school"
          className=" mt-4 text-cso-celtic-blue font-semibold hover:underline flex items-center gap-2 w-fit"
        >
          Volunteer With Us <FaArrowRightLong />
        </a>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhY2hlcnxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    title: "Invest in Future Scientists",
    icon: <FaMicroscope className="text-cso-celtic-blue  text-2xl" />,
    color: "cso-celtic-blue",
    description: (
      <>
        Support our mission financially and create a lasting impact in
        underserved communities.
        <br />
        <p className="mt-2 font-semibold">What We Do:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Fund education for underprivileged children</li>
          <li>Sponsor science equipment, materials, and lab resources</li>
          <li>
            Support the National Aviation Olympiad and other STEM initiatives
          </li>
          <li>Enable teacher training programs</li>
          <li>Create scholarships for deserving students</li>
        </ul>
        <a
          href="/our-work/kirby-place-school"
          className=" mt-4 text-cso-celtic-blue font-semibold hover:underline flex items-center gap-2 w-fit"
        >
          Donate Now <FaArrowRightLong />
        </a>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1758685734153-132c8620c1bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVuY2UlMjBzdHVkZW50c3xlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    title: "Corporate Partnerships – Amplify Your Impact",
    icon: <MdCorporateFare className="text-cso-green text-2xl" />,
    color: "cso-green",
    description: (
      <>
        Join as a corporate partner to expand our reach and strengthen STEM
        education in India, while creating meaningful social impact for your
        organization.
        <br />
        <p className="mt-2 font-semibold">What We Do:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Explore CSR partnership opportunities aligned with science education
          </li>
          <li>Launch employee volunteer programs to engage your team</li>
          <li>Sponsor major events, competitions, and science fairs</li>
          <li>Co-develop educational content and curriculum initiatives</li>
          <li>Gain brand visibility in the education and STEM sector</li>
        </ul>
        <a
          href="/our-work/kirby-place-school"
          className=" mt-4 text-cso-celtic-blue font-semibold hover:underline flex items-center gap-2 w-fit"
        >
          Partner With Us <FaArrowRightLong />
        </a>
      </>
    ),
    imgUrl:
      "https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHNoYWtlfGVufDB8fDB8fHwy",
  },
];

export default function Section1() {
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
          Get Involved with CSO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl font-roboto text-cso-mid-grey mb-12 max-w-4xl mx-auto leading-relaxed text-center"
        >
          Join our mission to make science accessible to everyone. Whether
          you’re an educator, student, volunteer, or organization, there’s a way
          for you to contribute. Find the path that aligns with your passion and
          skills.
        </motion.p>

        {involvementPaths.map((path, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 font-roboto text-cso-dark-grey">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={` h-fit w-fit shrink-0 bg-${path.color}/20 p-3 rounded-xl group-hover:scale-115 transition-all duration-300`}
                  >
                    {path.icon}
                  </span>{" "}
                  <h3 className={`text-[1.6rem] font-bold  text-${path.color}`}>
                    {path.title}
                  </h3>
                </div>
                <div className="text-cso-mid-grey text-lg leading-relaxed">
                  {path.description}
                </div>
              </div>
              <img
                src={path.imgUrl}
                alt={path.title}
                loading="lazy"
                className="rounded-lg w-full max-h-[28rem] md:w-1/2 object-cover shadow-lg"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
