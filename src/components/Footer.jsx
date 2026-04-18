import { forwardRef } from "react";
import { footerIcon as footerIconData } from "../../public/data/data";
import HeaderFooter from "./common/HeaderFooter";
import { Link } from "react-scroll";
import up from "../../public/footer/up-arrow.png";




function Footer({ forwardRef }) {
  return (
    <footer id="contact" ref={forwardRef} className="relative">
      <div className="flex h-auto min-h-[40vh] justify-center py-16">
        <form className="mx-auto w-full px-6 max-w-[1200px] grid justify-center justify-items-center md:justify-items-start gap-12 text-center md:text-left grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <HeaderFooter
              thirdHeader="YourCar"
              thirdParagraph="We are known for luxurious and premium chauffeur services worldwide. We are simply the best you can find."
            />
            <HeaderFooter thirdParagraph="We are dedicated to providing our customers with a first-class car buying, selling, and renting experience." />
          </div>
          <div className="flex flex-col items-center md:items-start w-full">
            <HeaderFooter
              thirdHeader="News Letter"
              thirdParagraph="Subscribe to our newsletter for updates, news and exclusive offers"
            />
            <div className="flex flex-col sm:flex-row items-center w-full mt-4 gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-3/5 px-4 py-3 border border-red-800 outline-none focus:outline-red-800"
              />
              <button type="submit" className="w-full sm:w-auto px-6 py-3 sm:-ml-1 bg-red-800 border border-red-800 font-bold text-slate-50 hover:bg-slate-50 hover:text-red-800 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <HeaderFooter thirdHeader="Contact" />

            {footerIconData.slice(0, 3).map((item, key) => (
              <div key={key} className="flex py-3 items-center">
                <img
                  src={item.img}
                  alt={item.type}
                  className="mr-4 object-contain w-6 h-6"
                />
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center gap-6 mt-8 pb-8 border-b-4 border-b-red-800 relative w-full">
        {footerIconData.slice(3, 6).map((item, key) => (
          <div key={key} className="transition-transform hover:scale-110 cursor-pointer">
            <img src={item.img} alt={item.type} className="w-8 h-8" />
          </div>
        ))}
        <Link
          className="absolute right-6 lg:right-12 -top-4 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full duration-300 hover:-translate-y-4 cursor-pointer"
          to="home"
          smooth={true}
          duration={800}
          delay={200}
        >
          <img src={up} alt="up" className="w-6 h-6 object-contain" />
        </Link>
      </div>
      <p className="pt-5 pb-8 text-2xl font-light text-center ">
        © Copyright 2023
        <span className="font-medium text-gray-700"> YourCar </span>All rights
        reserved
      </p>
    </footer>
  );
}

export default forwardRef(Footer);
