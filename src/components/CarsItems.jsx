import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { cars as carsData } from "../../public/data/data";
import { addItem, decreaseItemQuantity } from "./CarsSlice";


function CarsItems() {
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const handleAddToCart = (car) => {
    dispatch(
      addItem({
        id: car.id,
        image: car.image,
        name: car.name,
        type: car.type,
      }),
    );
  };

  return (
    <Slider {...settings}>
      {carsData.map((car) => (
        <div className="h-full px-2 lg:px-4 py-4 text-center" key={car.id}>
          <div className="p-6 bg-white shadow-2xl rounded-xl aria-checked:bg-red-800 transition-transform duration-300 hover:-translate-y-1" >
            <img
              src={car.image}
              alt={car.type}
              className="mb-4 h-[150px] sm:h-[180px] w-full max-w-[300px] mx-auto rounded-lg object-cover"
            />
            <h3 className="relative mb-2 text-xl sm:text-2xl font-bold text-red-800">
              {car.name}
            </h3>
            <blockquote className="text-xl sm:text-2xl italic font-semibold text-center text-slate-900">
              Buy now
              <span className="relative rounded-l-lg before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-800">
                <span className="relative text-slate-50">{car.type}</span>
              </span>
            </blockquote>
            <p className="px-3 py-3 my-4 font-light rounded text-sm sm:text-base text-gray-600">
              {car.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t gap-4 sm:gap-0">
              <div className="flex flex-row sm:flex-col gap-4 sm:gap-0 w-full sm:w-auto justify-center">
                <span className="text-sm font-medium text-gray-700">Seats: {car.seats}</span>
                <span className="text-sm font-medium text-gray-700">
                  Luggage: {car.luggage}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-4 py-2 font-bold text-white bg-red-800 rounded-lg transition-transform hover:scale-105 active:scale-95" onClick={() => handleAddToCart(car)}>
                  +
                </button>

                <button
                  className="px-4 py-2 font-bold text-white bg-red-800 rounded-lg transition-transform hover:scale-105 active:scale-95"
                  onClick={() => dispatch(decreaseItemQuantity(car.id))}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CarsItems;
