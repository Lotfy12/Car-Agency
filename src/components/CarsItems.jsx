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
        <div className="h-full px-2 text-center" key={car.id}>
          <div className="p-8 bg-white shadow-2xl rounded-xl aria-checked:bg-red-800 " >
            <img
              src={car.image}
              alt={car.type}
              className="mb-4 h-[150px] w-[300px] rounded-lg object-cover"
            />
            <h3 className="relative mb-2 text-2xl font-bold text-red-800">
              {car.name}
            </h3>
            <blockquote className="text-2xl italic font-semibold text-center text-slate-900">
              Buy now
              <span className="relative rounded-l-lg before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-red-800">
                <span className="relative text-slate-50">{car.type}</span>
              </span>
            </blockquote>
            <p className="px-3 py-3 my-4 font-light rounded">
              {car.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t ">
              <div className="flex flex-col">
                <span className="text-sm font-medium">Seats: {car.seats}</span>
                <span className="text-sm font-medium">
                  Luggage: {car.luggage}
                </span>
              </div>

              <button className="btn1" onClick={() => handleAddToCart(car)}>
                +
              </button>

              <button
                className="btn1"
                onClick={() => dispatch(decreaseItemQuantity(car.id))}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default CarsItems;
