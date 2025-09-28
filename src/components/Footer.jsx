import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-cso-dark-grey text-cso-light-grey pt-8 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-[1.2fr_0.7fr_1.1fr_0.8fr] gap-8 pb-8">
        <div>
          <img src="/logo-white.svg" alt="Logo" className="h-24" />
          <p className="font-roboto pl-6 text-cso-crystal-blue leading-relaxed max-w-xs">
            सा विद्या या विमुक्तये <br />
            <span className="italic">That is knowledge which liberates.</span>
          </p>
        </div>

        <div>
          <h4 className="font-roboto font-semibold text-cso-yellow mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/our-work"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="/get-involved"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                to="/impact-stories"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                Impact Stories
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-roboto font-semibold text-cso-yellow mb-3">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-cso-crystal-blue" />
              <a
                href="mailto:info@cso.in"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                info@cso.in
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-cso-crystal-blue" />
              <span>+91 9211229927</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-cso-crystal-blue" />
              <span>
                B-1, Third Floor, Greater Kailash Enclave – II, <br /> New Delhi
                - 110048
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-roboto font-semibold text-cso-yellow mb-3">
            Resources
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/refund-policy"
                className="hover:text-cso-crystal-blue transition-colors"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
          <h4 className="font-roboto font-semibold text-cso-yellow mb-3 mt-8">
            Follow Us
          </h4>
          <div className="flex space-x-4 text-cso-light-grey">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-cso-crystal-blue transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-cso-crystal-blue transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-cso-crystal-blue transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-cso-crystal-blue transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="py-6 border-t border-cso-light-grey pt-6 text-center text-xs text-cso-mid-grey font-roboto">
        &copy; {new Date().getFullYear()} Centre for Scientific Outreach. All
        rights reserved.
      </div>
    </footer>
  );
}
