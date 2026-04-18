import { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import CartModal from "./CartModal";

function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [navBar, setNavBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector((state) => state.cars.cartItems);

  const cartTotalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navbarStyle = {
    transition: "0.3s",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "home", label: "Home", offset: 0, duration: 800 },
    { to: "about", label: "About", offset: -150, duration: 500 },
    { to: "service", label: "Service", offset: -100, duration: 600 },
    { to: "cars", label: "Cars", offset: -100, duration: 700 },
    { to: "contact", label: "Contact Us", offset: -96, duration: 800 },
  ];

  return (
    <>
      <nav
        className="w-full fixed left-0 top-0 z-[999] transition-all duration-300"
        style={
          navBar
            ? {
                backgroundColor: "#FAFAFA",
                color: "#12273D",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }
            : {
                ...navbarStyle,
                backgroundColor: "transparent",
                color: "#F8FAFC",
              }
        }
      >
        <div className="flex w-full items-center justify-between px-8 py-4 sm:px-6 xl:px-8 xl:py-6 max-w-[1400px] mx-auto">
          <div className="text-2xl font-bold sm:text-3xl">
            Your<span className="text-red-700">Car</span>
          </div>

          <ul className="items-center hidden gap-6 text-xl font-bold xl:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={link.duration}
                  offset={link.offset}
                  className={`cursor-pointer rounded-md px-3 py-2 transition-colors ${
                    activeLink === link.to ? "bg-red-800 text-white" : ""
                  }`}
                  onClick={() => setActiveLink(link.to)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-red-600 rounded-full sm:text-base hover:bg-red-700"
            >
              Cart ({cartTotalQuantity})
            </button>

            <button
              className="block focus:outline-none xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden bg-white text-[#12273D] shadow-lg absolute top-full left-0 w-full flex flex-col items-center gap-6 py-8 font-bold text-lg border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={link.duration}
                offset={link.offset}
                className={`cursor-pointer rounded-md px-4 py-3 w-4/5 text-center transition-colors ${
                  activeLink === link.to ? "bg-red-800 text-white" : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveLink(link.to);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* ✅ Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default forwardRef(NavBar);
