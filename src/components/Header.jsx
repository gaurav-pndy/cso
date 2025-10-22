import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Impact Stories", href: "/impact-stories" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDonate, setShowDonate] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((open) => !open);

  return (
    <header className="w-full fixed top-0 border-b border-cso-light-grey z-50 bg-white shadow-none">
      <motion.nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/logo-color.svg"
              alt="CSO Logo"
              className="h-16 md:h-22"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
          {navLinks.map(({ label, href }) => {
            const isActive =
              location.pathname === href ||
              (href !== "/" && location.pathname.startsWith(href));
            return (
              <Link
                key={label}
                to={href}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-cso-light-grey text-cso-celtic-blue"
                    : "text-cso-dark-grey hover:bg-cso-light-grey hover:text-cso-celtic-blue"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <button
            onClick={() => setShowDonate(true)}
            className="ml-1 px-4 py-2 rounded-lg bg-gradient-to-r from-cso-orange to-cso-yellow text-white font-bold shadow-md hover:scale-105 transition-transform"
          >
            Donate Now
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="text-cso-dark-grey md:hidden focus:outline-none focus:ring-2 focus:ring-cso-celtic-blue p-2 rounded"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <HiX className="h-8 w-8" />
          ) : (
            <HiMenu className="h-8 w-8" />
          )}
        </button>
      </motion.nav>

      {/* Mobile Navigation Panel */}
      <motion.div
        className={`md:hidden bg-white border-t border-cso-light-grey shadow-lg z-40 w-full fixed top-20 left-0 ${
          mobileOpen ? "block" : "hidden"
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <nav
          className="flex flex-col space-y-1 px-4 py-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ label, href }) => {
            const isActive =
              location.pathname === href ||
              (href !== "/" && location.pathname.startsWith(href));
            return (
              <Link
                key={label}
                to={href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-cso-light-grey text-cso-celtic-blue"
                    : "text-cso-dark-grey hover:bg-cso-light-grey hover:text-cso-celtic-blue"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setMobileOpen(false);
              setShowDonate(true);
            }}
            className="block px-3 py-2 rounded-lg bg-gradient-to-r from-cso-orange to-cso-yellow text-white font-bold shadow-md text-center mt-2"
          >
            Donate Now
          </button>
        </nav>
      </motion.div>

      {/* Animated Donate Modal */}
      <AnimatePresence>
        {showDonate && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-[9999] px-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white overflow-hidden rounded-2xl shadow-2xl max-w-3xl w-full relative"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <button
                onClick={() => setShowDonate(false)}
                className="absolute top-3 right-7 text-gray-600 hover:text-black text-3xl font-bold"
              >
                ×
              </button>
              <iframe
                width="100%"
                height="700"
                src="https://zohosecurepay.in/checkout/fq35wqxe-8t0it3x73g4s1/Donate-Now"
                style={{ border: "none" }}
                title="Donate Now"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
