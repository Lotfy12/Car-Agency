import { testimonials as serviceTestimonials } from "../../public/data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Title from "./common/Title";
import star from "../../public/cars/star.png";

function Testimonials() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    pauseOnHover: true,
  };

  return (
    <section className="py-16 bg-sky-950">
      <div className="w-full max-w-6xl px-6 mx-auto xl:mt-24">
        <Title
          title="Testimonials"
          subtitle="What our clients say"
          style={{ color: "#f8f8f8", textAlign: "center" }}
        />

        <Slider {...settings}>
          {serviceTestimonials.map((item, index) => (
            <div key={item.id || index} className="px-3">
              <div className="p-6 text-center bg-white shadow-2xl rounded-3xl sm:p-8">
                <p className="text-base italic leading-relaxed text-gray-700 sm:text-lg md:text-xl">
                  {item.description}
                </p>

                <div className="flex justify-center gap-2 mt-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      key={i}
                      src={star}
                      alt="star rating"
                      className="w-5 h-5 sm:h-6 sm:w-6"
                      loading="lazy"
                    />
                  ))}
                </div>

                <div className="mt-6">
                  <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {item.name}
                  </h2>
                  <span className="text-sm text-gray-500 sm:text-base">
                    {item.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
