import React from "react";
import logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Find a Property",
    href: "#",
  },
  {
    name: "Tours",
    href: "#",
  },
  {
    name: "Special Offers",
    href: "#",
  },
  {
    name: "List a Property",
    href: "#",
  },
];

export function Navbar({ bg }: { bg: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`relative w-full ${bg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 border-b border-gray-300">
        <div className="inline-flex items-center space-x-2">
        <Link to={"/"}>
          <img src={logo} alt="alt" className="w-[190px]"/>
        </Link>
        </div>
        <div className="hidden lg:block mt-2">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-white hover:text-gray-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex gap-5">
          <button
            type="button"
            className="mt-4 w-full rounded-sm px-6 py-2 text-sm font-semibold border border-white text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Login
          </button>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-[#0351FC]  px-6 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
          >
            Register
          </button>
        </div>
        <div className="lg:hidden">
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu text-white"
          >
            <line x1={4} y1={12} x2={20} y2={12} />
            <line x1={4} y1={6} x2={20} y2={6} />
            <line x1={4} y1={18} x2={20} y2={18} />
          </svg>
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#1a5ef0f5] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                  <img src={logo} alt="alt" className="w-[190px]"/>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm px-3 py-2 text-sm border border-black font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-[#0351FC] border border-black  px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
