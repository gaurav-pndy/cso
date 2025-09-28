import { motion } from "framer-motion";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="w-full   bg-white ">
      <div className="max-w-7xl xl:h-screen py-16 md:pt-28  h-full mx-auto  px-4  flex flex-col-reverse md:flex-row items-center md:space-x-12">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold  text-cso-dark-grey mb-2">
            Centre for{" "}
            <span className="text-cso-orange"> Scientific Outreach (CSO) </span>
          </h1>
          <p className="text-cso-mid-grey  md:text-xl  mb-2 italic">
            सा विद्या या विमुक्तये —{" "}
            <span className="text-cso-indigo font-semibold ">
              {" "}
              That is knowledge which liberates.
            </span>
          </p>
          <p className="text-cso-mid-grey text-base md:text-lg  mb-2 mt-6">
            At CSO, we believe that science and technology should be within
            everyone’s reach. We are a not-for-profit organization committed to
            breaking barriers and opening doors of opportunity.
          </p>
          <p className="text-cso-mid-grey text-base md:text-lg  mb-2">
            {" "}
            From nurturing curiosity in young minds from underserved communities
            to empowering the next generation of scientists, innovators, and
            aviators, CSO is creating pathways where knowledge meets
            possibility.
          </p>
          <p className="text-cso-dark-grey italic text-base md:text-lg  font-medium mb-4 ">
            Together, we’re not just spreading education — we’re igniting
            futures.
          </p>
          <p className="text-cso-green md:text-2xl font-medium flex  text-left gap-2 md:gap-4 ">
            <FaHandHoldingHeart className="text-cso-red text-2xl md:text-3xl" />
            500+ lives already impacted — and counting.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-6 justify-center md:justify-start">
            <a
              href="#discover"
              className="px-6 py-3 rounded-lg bg-cso-celtic-blue hover:bg-cso-indigo text-white text-lg   shadow-md transition-all duration-300 font-semibold"
            >
              Discover More &rarr;
            </a>
            <a
              href="#video"
              className="px-6 py-3 rounded-lg bg-white text-cso-celtic-blue border border-cso-celtic-blue hover:bg-cso-indigo hover:text-white hover:border-cso-indigo  text-lg  transition-all duration-300 font-semibold"
            >
              Watch Our Story
            </a>
          </div>
        </motion.div>
        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full  h-full md:mb-0 md:w-1/2 flex justify-center py-5"
        >
          <img
            src="/hero.jpg" // Replace with actual hero image or illustration path
            alt="CSO Outreach"
            className=" w-full h-full rounded-xl shadow-lg object-cover bg-cso-light-grey"
          />
        </motion.div>
      </div>
    </section>
  );
}
