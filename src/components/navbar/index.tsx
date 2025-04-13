import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import DesktopNavbar from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="lg:px-24 px-6 py-4 flex items-center justify-between relative z-50">
        <DesktopNavbar />

        <div className="lg:hidden flex w-full justify-between">
          <header className="flex gap-4 items-center">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <p className="font-bold text-neutral-600 text-2xl">FinanceRestro</p>
          </header>
          <button
            className="relative w-8 h-8 flex items-center justify-center
            cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </div>

      <MobileNavbar open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
