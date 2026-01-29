import { forwardRef } from "react";
import Title from "./common/Title";
import { services as serviceData } from "../../public/data/data";

const textColor = { color: "#000000" };
function Services({ forwardRef }) {
  return (
    <div
      className="flex items-center justify-center bg-gray-400/40 "
      id="service"
      ref={forwardRef}
    >
      <div className="max-w-[1000px] bg-[url('../../public/cars/ctabg.png')] bg-cover bg-fixed bg-center  py-12 text-center">
        <Title title="Services" subtitle="Services" style={textColor} />
        <div className="container grid w-full grid-cols-3 gap-6 py-6 mx-auto rounded-lg">
          {serviceData.map((service, index) => (
            <div key={index} className=" rounded-xl">
              <i className="inline-block ">{service.icon}</i>
              <h3 className="mb-3 font-semibold xl:text-2xl ">
                {service.title}
              </h3>
              <p className="text-xl text-gray-900 ">
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
