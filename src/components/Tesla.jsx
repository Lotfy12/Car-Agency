import { Tesla as TeslaService } from "../../public/data/data";

function Tesla() {
  return (
    <div
      className={`mb-[150px] mt-[120px] grid h-[700px]  w-full  grid-cols-3  `}
    >
      {TeslaService.map((item, key) => (
        <div key={key} className="relative">
          <div className="h-full ">
            <img
              src={item.img}
              alt={item.brand}
              className="h-full brightness-50 hover:duration-300 group-hover:brightness-50 "
            />
            <div className="absolute top-1/4 rounded-md bg-black bg-opacity-50 px-4 py-2 text-3xl capitalize text-slate-50 opacity-0 transition-opacity hover:opacity-100 hover:duration-300">
              <h1 className="font-medium text-red-800 ">{item.brand}</h1>
              <p className="text-xl"> {item.description}</p>
              <button className="top-3 ml-8 mt-8 rounded-xl border-2 px-6 py-3 text-right text-xl capitalize duration-300 hover:scale-x-110 hover:scale-y-105 hover:border-red-800">
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
