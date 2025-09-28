import { motion } from "framer-motion";

export default function Terms() {
  return (
    <section className="w-full bg-white py-20 md:pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl max-w-6xl mx-auto md:text-[3.5rem] font-extrabold font-roboto text-cso-dark-grey mb-4  text-center"
        >
          Terms & Conditions
        </motion.h1>
        <motion.div
          className="prose max-w-none text-lg text-cso-mid-grey"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p>
            By accessing or using the CSO website, you agree to comply with
            these Terms and Conditions.
          </p>
          <h2 className="mt-4 font-bold text-xl">Use of Site</h2>
          <p>
            You may use the site for lawful purposes only and must not misuse or
            interfere with its operation.
          </p>
          <h2 className="mt-4 font-bold text-xl">Intellectual Property</h2>
          <p>
            Content on this site is owned by CSO and may not be copied or
            redistributed without permission.
          </p>
          <h2 className="mt-4 font-bold text-xl">Limitations of Liability</h2>
          <p>
            CSO is not responsible for damages resulting from use of the site or
            linked resources.
          </p>
          <h2 className="mt-4 font-bold text-xl">Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Continued
            use of the site implies acceptance of changes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
