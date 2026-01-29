import { forwardRef } from "react";
import about from "../../public/cars/aboutCar.png";
import Title from "./common/Title";

function About({ forwardRef }) {
  const textColor = { color: "#741906" };

  return (
    <div
      id="about"
      className="mx-8  mt-8 flex h-[100vh]	max-w-[1300px]	content-center  justify-center   space-x-9"
      ref={forwardRef}
    >
      <div className="relative ">
        <header>
          <Title title="about us" subtitle="about" style={textColor} />
        </header>
        <p className="para">
          YourCar is a luxury car dealership that offers a personalized and
          first-class experience to its clients. Our team of experienced
          professionals is dedicated to providing exceptional service and
          finding the perfect vehicle to match our clients' unique preferences
          and requirements. We have an extensive selection of high-end vehicles,
          ranging from sports cars to SUVs, all of which are maintained to the
          highest standards of quality and safety.
          <br />
          <br />
          At YourCar, we are committed to creating a stress-free and enjoyable
          car buying experience. We understand that purchasing a luxury car can
          be a significant investment, which is why we offer flexible financing
          options to make the process more manageable. Our team is available to
          answer any questions and provide guidance throughout the entire buying
          process. We take pride in our outstanding customer service and
          attention to detail, and we are confident that our clients will be
          satisfied with their experience at YourCar.
        </p>
      </div>
      <img src={about} alt="about car" className="h-full " />
    </div>
  );
}

export default forwardRef(About);
