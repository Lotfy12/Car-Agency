import { forwardRef } from "react";
import Title from "./common/Title";
import { services as serviceData } from "../../public/data/data";

const textColor = { color: "#000000" };
function Services({ forwardRef }) {
  return (
    <div
      className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gray-400/40 min-h-screen"
      id="service"
      ref={forwardRef}
    >
      <div className="w-full max-w-[1000px] bg-[url('../../public/cars/ctabg.png')] bg-cover bg-fixed bg-center py-12 px-6 rounded-xl text-center">
        <Title title="Services" subtitle="Services" style={textColor} />
        <div className="container grid w-full grid-cols-1 gap-8 py-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 rounded-lg">
          {serviceData.map((service, index) => (
            <div key={index} className="rounded-xl p-4 bg-white/10 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none transition duration-300">
              <i className="inline-block text-4xl mb-4">{service.icon}</i>
              <h3 className="mb-3 font-semibold text-xl xl:text-2xl text-red-800">
                {service.title}
              </h3>
              <p className="text-lg xl:text-xl text-gray-900 font-medium">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Services);
