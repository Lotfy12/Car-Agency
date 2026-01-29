import NavBar from "./NavBar";
import bg from "../../public/cars/bg.png";

function Hero() {
  return (

     <div className="w-full h-screen " id="home">
      <img
        src={bg}
        alt="Car background"
        className="absolute inset-0 object-cover object-center w-full h-full -z-10"
      />
      <NavBar />
      <section className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-end text-slate-50">
        <div className="py-20 text-right">
          <h1 className="mb-8 text-6xl font-bold leading-tight">
            Find the perfect car
            <br /> for you at YourCar
          </h1>

          <p className="p-3 text-3xl font-medium">
            We offer a wide range of cars <br />
            that cater to your needs <br />
            and budget. Visit us today and <br />
            drive away with your dream car
          </p>

          <button className="mt-5 btn">Discover ✔</button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
