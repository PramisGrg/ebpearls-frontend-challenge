import logo from "../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav className="max-w-[1300px] mx-auto py-2 flex justify-between">
      <header className="flex gap-4 items-center">
        <img src={logo} alt="This is logo image" />
        <p>FinanceRestro</p>
      </header>

      <ul className="flex gap-4 items-center">
        <li>Products</li>
        <li>Solutions</li>
        <li>Help center</li>
        <li>Get started</li>
      </ul>

      <section className="flex gap-4">
        <button>Login</button>
        <button className="bg-blue-600 p-2 rounded-md text-white">
          Request a demo
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
