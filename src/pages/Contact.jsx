import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setSubmitted(true);
    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="w-full bg-white py-20 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl max-w-6xl mx-auto text-center md:text-[3.5rem] font-extrabold font-roboto text-cso-dark-grey mb-10"
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-col xl:flex-row gap-10">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="border xl:w-2/3 border-cso-light-grey rounded-xl p-4 md:p-6  grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted && (
              <div className="mb-4 text-green-600 font-semibold">
                Thank you for reaching out! We will get back to you soon.
              </div>
            )}
            <div className="flex flex-col">
              <label
                className="font-roboto font-semibold text-cso-dark-grey mb-2"
                htmlFor="firstName"
              >
                FIrst Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className=" p-3 rounded border border-cso-light-grey focus:outline-none focus:ring-2 focus:ring-cso-celtic-blue bg-white"
                placeholder="Your First Name"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-roboto font-semibold text-cso-dark-grey mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className=" p-3 rounded border border-cso-light-grey focus:outline-none focus:ring-2 focus:ring-cso-celtic-blue bg-white"
                placeholder="Your Last Name"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="font-roboto font-semibold text-cso-dark-grey mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className=" p-3 rounded border border-cso-light-grey focus:outline-none focus:ring-2 focus:ring-cso-celtic-blue bg-white"
                placeholder="Your Phone Number"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="font-roboto font-semibold text-cso-dark-grey mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                className=" p-3 rounded border border-cso-light-grey focus:outline-none focus:ring-2 focus:ring-cso-celtic-blue bg-white"
                placeholder="Your Email Address"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label
                className="font-roboto font-semibold text-cso-dark-grey mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className=" p-3 rounded border border-cso-light-grey focus:outline-none focus:ring-2 focus:ring-cso-celtic-blue bg-white"
                placeholder="Subject"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label
                className="font-roboto font-semibold text-cso-dark-grey mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className=" p-3 rounded border border-cso-light-grey focus:outline-none focus:ring-2 focus:ring-cso-celtic-blue bg-white resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-cso-celtic-blue text-white rounded-lg py-3 font-semibold font-roboto hover:bg-cso-indigo transition-all duration-300 cursor-pointer md:col-span-2"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="xl:w-1/3  max-w-6xl mx-auto flex flex-col justify-between"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-xl group  p-4 border border-cso-light-grey flex flex-col items-center text-center"
            >
              <div className="mb-2 shrink-0 bg-cso-indigo/20 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <FaEnvelope className="text-cso-indigo text-3xl" />
              </div>
              <div>
                <div className="text-xl font-bold  text-cso-indigo ">
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
              className="rounded-xl group  p-4 border border-cso-light-grey flex flex-col items-center text-center"
            >
              <div className="mb-2 shrink-0 bg-cso-orange/20 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <FaPhoneAlt className="text-cso-orange text-2xl" />
              </div>
              <div>
                <div className="text-xl font-bold  text-cso-orange ">
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
              className="rounded-xl group  p-4 border border-cso-light-grey flex flex-col items-center text-center "
            >
              <div className="mb-2 shrink-0 bg-cso-celtic-blue/20 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <FaMapMarkerAlt className="text-cso-celtic-blue text-2xl" />{" "}
              </div>
              <div>
                <div className="text-2xl font-bold  text-cso-celtic-blue ">
                  {" "}
                  Visit Us:
                </div>
                <div className="font-roboto text-cso-mid-grey md:text-lg">
                  B-1, Third Floor, Greater Kailash Enclave – II, New Delhi -
                  110048
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
