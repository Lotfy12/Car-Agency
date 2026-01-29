import { forwardRef } from "react";
import { footerIcon as footerIconData } from "../../public/data/data";
import HeaderFooter from "./common/HeaderFooter";
import { Link } from "react-scroll";
import up from "../../public/footer/up-arrow.png";




function Footer({ forwardRef }) {
  return (
    <footer id="contact" ref={forwardRef}>
      <div className="flex  h-[40vh] justify-evenly">
        <form className="mx-9 mt-9  grid max-w-[1200px] justify-center  justify-items-center gap-9 text-center  grid-cols-3">
          <div>
            <HeaderFooter
              thirdHeader="YourCar"
              thirdParagraph="We are known for luxurious and premium chauffeur services worldwide. We are simply the best you can find."
            />
            <HeaderFooter thirdParagraph="We are dedicated to providing our customers with a first-class car buying, selling, and renting experience." />
          </div>
          <div>
            <HeaderFooter
              thirdHeader="News Letter"
              thirdParagraph="Subscribe to our newsletter for updates, news and exclusive offers"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-3/5 px-4 py-3 border border-red-800 outline-none hover:outline-offset-0 hover:outline-red-800"
            />
            <label className="px-6 py-3 ml-3 bg-red-800 border text-slate-50 hover:bg-slate-50 hover:text-red-800 hover:duration-300">
              subscribe
            </label>
          </div>
          <div>
            <HeaderFooter thirdHeader="Contact" />

            {footerIconData.slice(0, 3).map((item, key) => (
              <div key={key} className="flex py-3">
                <img
                  src={item.img}
                  alt={item.type}
                  className="self-center mr-3"
                />
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </form>
      </div>

      <div className="flex justify-center mt-0 border-b-4 border-b-red-800">
        {footerIconData.slice(3, 6).map((item, key) => (
          <div key={key} className="px-12 end-5 right-5 top-3/4 py-7">
            <img src={item.img} alt={item.type} />
          </div>
        ))}
        <Link
          className="absolute duration-300 btn1 right-12 hover:-translate-y-4 "
          to="home"
          smooth={true}
          duration={800}
          delay={200}
        >
          <img src={up} alt="up" />
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
