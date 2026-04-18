import { forwardRef } from "react";
import CarsItems from "./CarsItems";
import Title from "./common/Title";

const textColor = { color: "#741906" };
function Cars({ forwardRef }) {
  return (
    <div
      className="px-4 py-16 mx-auto w-full max-w-[1300px] min-h-screen"
      id="cars"
      ref={forwardRef}
    >
      <Title title="cars" subtitle="cars" style={textColor} />
      <div className="w-full mt-8">
        <CarsItems />
      </div>
    </div>
  );
}

export default forwardRef(Cars);
