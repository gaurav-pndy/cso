import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function GetStarted() {
  return (
    <section className="w-full bg-white py-16 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold font-roboto text-cso-dark-grey mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-roboto text-cso-mid-grey mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Take the first step toward making science accessible to everyone.
          Connect with us today to learn how you can contribute, collaborate,
          support our programs and make a difference
        </motion.p>

        <div className="grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-xl group  p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4 shrink-0 bg-cso-indigo/20 p-5 rounded-full group-hover:scale-110 transition-all duration-300">
              <FaEnvelope className="text-cso-indigo text-4xl" />
            </div>
            <div>
              <div className="text-2xl font-bold  text-cso-indigo mb-2">
                Email Us:
              </div>
              <div className="font-roboto text-cso-mid-grey md:text-lg">
                General Inquiries:{" "}
                <a
                  href="mailto:info@cso.in"
                  className="text-cso-celtic-blue underline"
                >
                  info@cso.in
                </a>
                <br />
                Partnerships & Sponsorships:{" "}
                <a
                  href="mailto:partner@cso.in"
                  className="text-cso-celtic-blue underline"
                >
                  partner@cso.in
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-xl group  p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4 shrink-0 bg-cso-orange/20 p-5 rounded-full group-hover:scale-110 transition-all duration-300">
              <FaPhoneAlt className="text-cso-orange text-3xl" />
            </div>
            <div>
              <div className="text-2xl font-bold  text-cso-orange mb-2">
                Call Us:
              </div>
              <div className="font-roboto text-cso-mid-grey md:text-lg">
                +91 9211229927
                <br />
                Monday – Friday, 9:00 AM – 6:00 PM
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-xl group  p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4 shrink-0 bg-cso-celtic-blue/20 p-5 rounded-full group-hover:scale-110 transition-all duration-300">
              <FaMapMarkerAlt className="text-cso-celtic-blue text-3xl" />{" "}
            </div>
            <div>
              <div className="text-2xl font-bold  text-cso-celtic-blue mb-2">
                {" "}
                Visit Us:
              </div>
              <div className="font-roboto text-cso-mid-grey md:text-lg">
                B-1, Third Floor, Greater Kailash Enclave – II, New Delhi -
                110048
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
