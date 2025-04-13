import { navbarData } from "../../data/navbar-data";
import logo from "../../assets/icons/logo.svg";

const DesktopNavbar = () => {
  return (
    <div className="hidden lg:flex w-full justify-between items-center gap-6">
      <header className="flex gap-4 items-center">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <p className="font-bold text-neutral-600 text-2xl">FinanceRestro</p>
      </header>
      <ul className="flex gap-6 items-center">
        {navbarData.map((item) => (
          <li className="cursor-pointer hover:text-button" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>

      <div className="flex gap-4">
        <button className="text-button underline cursor-pointer underline-offset-2">
          Login
        </button>
        <button className="bg-button px-6 py-3 rounded-full text-white cursor-pointer">
          Request a demo
        </button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
