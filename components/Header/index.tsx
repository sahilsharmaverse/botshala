"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-gray-dark/90 shadow-sticky-dark backdrop-blur-sm transition"
            : "absolute bg-gray-dark"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="block">
                <Image
                  src="/images/logo/fulllogo botshala.svg"
                  alt="Botshala Logo"
                  width={140}
                  height={30}
                  className="w-auto h-14"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center space-x-8">
              {menuData.map((menuItem, index) => (
                <li key={index} className="group relative list-none">
                  {menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      className={`text-base font-medium transition-colors ${
                        usePathName === menuItem.path
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => handleSubmenu(index)}
                        className="flex items-center text-base font-medium text-white/70 hover:text-white"
                      >
                        {menuItem.title}
                        <span className="ml-1">
                          <svg width="16" height="16" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`absolute left-0 top-full mt-2 w-[200px] rounded-md bg-dark p-3 shadow-lg transition-all ${
                          openIndex === index ? "block" : "hidden"
                        } lg:invisible lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100`}
                      >
                        {menuItem.submenu.map((submenuItem, i) => (
                          <Link
                            href={submenuItem.path}
                            key={i}
                            className="block py-2 text-sm text-white/70 hover:text-white"
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnZvSrYbEwId5b0X742L_kkDzNAYBrz-ClnkNyjLgvhzCDxQ/viewform"
                className="hidden md:inline-flex items-center justify-center h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Get Started
              </Link>
              
              <ThemeToggler />
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={navbarToggleHandler}
                className="lg:hidden text-white focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {navbarOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div
            className={`lg:hidden fixed inset-0 z-50 bg-dark transform ${
              navbarOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={navbarToggleHandler}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-6">
              <ul className="space-y-4">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`block py-2 text-lg ${
                          usePathName === menuItem.path
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                        }`}
                        onClick={navbarToggleHandler}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="flex items-center justify-between w-full py-2 text-lg text-white/70 hover:text-white"
                        >
                          {menuItem.title}
                          <span>
                            <svg width="16" height="16" viewBox="0 0 25 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                        <div
                          className={`pl-4 ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu.map((submenuItem, i) => (
                            <Link
                              href={submenuItem.path}
                              key={i}
                              className="block py-2 text-sm text-white/70 hover:text-white"
                              onClick={navbarToggleHandler}
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href="/signup"
                    className="flex items-center justify-center h-12 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                    onClick={navbarToggleHandler}
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;