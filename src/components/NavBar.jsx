import  { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import CartModal from "./CartModal";

function NavBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [navBar, setNavBar] = useState(false);

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

  return (
    <>
      <nav className="w-full">
        <ul
          className="flex w-full items-center justify-between px-6 py-6 text-slate-50 xl:fixed xl:left-0 xl:top-0 xl:z-[999]"
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
                }
          }
        >
          <li className="text-3xl font-bold sm:text-2xl">
            Your<span className="text-red-700">Car</span>
          </li>

          <li className="items-center justify-between text-xl font-bold xl:flex xl:gap-6">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className={`cursor-pointer rounded-md px-3 py-2 ${
                activeLink === "home" ? "bg-red-800 text-white" : ""
              }`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </Link>

            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-150}
              className={`cursor-pointer rounded-md px-3 py-2 ${
                activeLink === "about" ? "bg-red-800 text-white" : ""
              }`}
              onClick={() => setActiveLink("about")}
            >
              About
            </Link>

            <Link
              to="service"
              smooth={true}
              duration={600}
              offset={-100}
              className={`cursor-pointer rounded-md px-3 py-2 ${
                activeLink === "service" ? "bg-red-800 text-white" : ""
              }`}
              onClick={() => setActiveLink("service")}
            >
              Service
            </Link>

            <Link
              to="cars"
              smooth={true}
              duration={700}
              offset={-100}
              className={`cursor-pointer rounded-md px-3 py-2 ${
                activeLink === "cars" ? "bg-red-800 text-white" : ""
              }`}
              onClick={() => setActiveLink("cars")}
            >
              Cars
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-96}
              className={`cursor-pointer rounded-md px-3 py-2 ${
                activeLink === "contact" ? "bg-red-800 text-white" : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Contact Us
            </Link>
          </li>

          <li>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center px-4 py-2 font-bold text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              Cart ({cartTotalQuantity})
            </button>
          </li>
        </ul>
      </nav>

      {/* ✅ Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default forwardRef(NavBar);
