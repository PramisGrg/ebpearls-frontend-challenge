import { motion } from "framer-motion";
import { navbarData } from "../../data/navbar-data";

interface MobileNavbarProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export const MobileNavbar = ({ open, setOpen }: MobileNavbarProps) => {
  if (!open) return null;

  return (
    <motion.div
      key="mobile-menu"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      exit={{ y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 w-full bg-white z-40 px-6 py-8 shadow-md lg:hidden"
    >
      <ul
        onClick={() => setOpen(false)}
        className="flex flex-col gap-4 text-center text-gray-800 text-lg"
      >
        {navbarData.map((item) => (
          <li className="cursor-pointer hover:text-button" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col items-center gap-3">
        <button className="text-button underline underline-offset-2 cursor-pointer">
          Login
        </button>
        <button className="bg-button text-white px-6 py-3 rounded-full cursor-pointer">
          Request a demo
        </button>
      </div>
    </motion.div>
  );
};
