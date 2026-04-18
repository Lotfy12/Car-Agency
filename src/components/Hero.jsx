import NavBar from "./NavBar";
import bg from "../../public/cars/bg.png";

function Hero() {
  return (
    <div className="w-full h-screen" id="home">
      <img
        src={bg}
        alt="Car background"
        className="absolute inset-0 object-cover object-center w-full h-full -z-10"
      />
      <NavBar />
      <section className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-center lg:justify-end text-slate-50 px-6 sm:px-8 lg:px-12 pt-20">
        <div className="py-20 text-center lg:text-right">
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Find the perfect car
            <br className="hidden sm:block" /> for you at YourCar
          </h1>

          <p className="p-3 text-lg sm:text-2xl lg:text-3xl font-medium">
            We offer a wide range of cars <br className="hidden sm:block" />
            that cater to your needs <br className="hidden sm:block" />
            and budget. Visit us today and <br className="hidden sm:block" />
            drive away with your dream car
          </p>

          <button className="mt-5 btn w-full max-w-[200px] mx-auto lg:mx-0 lg:ml-auto">Discover ✔</button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
