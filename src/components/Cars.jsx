import { forwardRef } from "react";
import CarsItems from "./CarsItems";
import Title from "./common/Title";

const textColor = { color: "#741906" };
function Cars({ forwardRef }) {
  return (
    <div
      className="mx-9 max-w-[1300px] h-[100vh]"
      id="cars"
      ref={forwardRef}
    >
      <Title title="cars" subtitle="cars" style={textColor} />
      <CarsItems />
    </div>
  );
}

export default forwardRef(Cars);
