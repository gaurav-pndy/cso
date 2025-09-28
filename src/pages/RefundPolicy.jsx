// RefundPolicy.jsx
import { motion } from "framer-motion";

export default function RefundPolicy() {
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
          Refund Policy
        </motion.h1>
        <motion.div
          className="prose max-w-none text-lg text-cso-mid-grey"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p>
            Refunds are considered on a case-by-case basis for program fees or
            donations.
          </p>
          <h2 className="mt-4 font-bold text-xl">Eligibility</h2>
          <p>
            Refunds may be granted for errors in billing, duplicate payments, or
            program cancellation.
          </p>
          <h2 className="mt-4 font-bold text-xl">Requesting a Refund</h2>
          <p>Contact our support team promptly to initiate a refund request.</p>
          <h2 className="mt-4 font-bold text-xl">Processing Time</h2>
          <p>Refunds are usually processed within 14 business days.</p>
          <h2 className="mt-4 font-bold text-xl">Non-Refundable Situations</h2>
          <p>Donations are non-refundable once processed.</p>
        </motion.div>
      </div>
    </section>
  );
}
