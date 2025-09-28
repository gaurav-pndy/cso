import { motion } from "framer-motion";

export default function PriPolicy() {
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
          Privacy Policy
        </motion.h1>
        <motion.div
          className="prose max-w-none text-lg text-cso-mid-grey"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p>
            Protecting your privacy is important to us. This Privacy Policy
            describes the types of personal information we collect, how we use
            it, and the rights you have over your data.
          </p>
          <h2 className="mt-4 font-bold text-xl">Information We Collect</h2>
          <p>
            We collect information you provide directly to us such as your name,
            email, and any messages you send through our site.
          </p>
          <h2 className="mt-4 font-bold text-xl">Use of Information</h2>
          <p>
            We use your information to respond to inquiries, improve our
            services, and communicate updates relevant to your interests.
          </p>
          <h2 className="mt-4 font-bold text-xl">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information.
          </p>
          <h2 className="mt-4 font-bold text-xl">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            Contact us anytime for assistance.
          </p>
          <h2 className="mt-4 font-bold text-xl">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We recommend
            reviewing it regularly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
