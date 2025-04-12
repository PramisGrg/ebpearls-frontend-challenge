import { useState } from "react";
import logo from "../assets/icons/logo.svg";
import { motion } from "framer-motion";
import { navbarData } from "../data/navbar-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="lg:px-24 px-6 py-4 flex items-center justify-between relative z-50">
        <header className="flex gap-4 items-center">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <p className="font-bold text-neutral-600 text-2xl">FinanceRestro</p>
        </header>

        <ul className="hidden lg:flex gap-6 items-center">
          {navbarData.map((item) => (
            <li className="cursor-pointer hover:text-primary" key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <section className="hidden lg:flex gap-4">
          <button className="text-primary underline cursor-pointer underline-offset-2">
            Login
          </button>
          <button className="bg-primary px-6 py-3 rounded-full text-white cursor-pointer">
            Request a demo
          </button>
        </section>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            className="relative w-8 h-8 flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {/* Top Line */}
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            {/* Middle Line */}
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Bottom Line */}
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu (pushes below navbar) */}
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          exit={{ y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-white z-40 px-6 py-8 shadow-md"
        >
          <ul
            onClick={() => setOpen(false)}
            className="flex flex-col gap-4 text-center text-gray-800 text-lg"
          >
            {navbarData.map((item) => (
              <li className="cursor-pointer hover:text-primary" key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-center gap-3">
            <button className="text-primary underline underline-offset-2">
              Login
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              Request a demo
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
