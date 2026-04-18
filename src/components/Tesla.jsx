import { Tesla as TeslaService } from "../../public/data/data";

function Tesla() {
  return (
    <div
      className={`mb-20 mt-16 grid w-full max-w-[1400px] mx-auto px-4 lg:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:mb-[150px] lg:mt-[120px] lg:h-[700px]`}
    >
      {TeslaService.map((item, key) => (
        <div
          key={key}
          className="group relative h-[400px] w-full md:h-[500px] lg:h-full overflow-hidden rounded-xl"
        >
          <div className="h-full w-full">
            <img
              src={item.img}
              alt={item.brand}
              className="h-full w-full object-cover brightness-50 hover:duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 mx-4 flex flex-col items-center justify-center rounded-md bg-black  bg-opacity-70 px-6 py-6 text-center text-2xl capitalize text-slate-50 opacity-100 transition-opacity hover:duration-300 sm:text-3xl lg:inset-x-0 lg:bottom-auto lg:top-1/4 lg:mx-4 lg:items-start lg:bg-opacity-50 lg:text-left lg:opacity-0 lg:group-hover:opacity-100">
              <h1 className="mb-2 font-medium text-red-500 lg:text-red-800">
                {item.brand}
              </h1>
              <p className="mb-4 text-lg font-light sm:text-xl">
                {item.description}
              </p>
              <button className="mt-2 rounded-xl border-2 bg-red-800 px-6 py-3 text-lg capitalize duration-300 hover:scale-105 hover:border-red-800 sm:text-xl lg:ml-8 lg:bg-transparent">
                contact
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tesla;
