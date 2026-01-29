// import { carrental } from "../icons/carrental.svg";
// import { carsales } from "../icons/carsales.svg";
// import { carselling } from "../icons/carselling.svg";
import car1 from "../cars/car1.png";
import car2 from "../cars/car2.png";
import car3 from "../cars/car3.png";
import car4 from "../cars/car4.png";
import car5 from "../cars/car5.png";
import car6 from "../cars/car6.png";

import test1 from "../cars/test1.webp";
import test2 from "../cars/test2.webp";
import test3 from "../cars/test3.webp";
import test4 from "../cars/test4.webp";
import test5 from "../cars/test5.webp";
import test6 from "../cars/test6.webp";
import test7 from "../cars/test7.webp";
import test8 from "../cars/test8.webp";
import test9 from "../cars/test9.webp";

import logo1 from "../sponsor/logo (1).svg";
import logo2 from "../sponsor/logo (2).svg";
import logo3 from "../sponsor/logo (3).svg";
import logo4 from "../sponsor/logo (4).svg";
import logo5 from "../sponsor/logo (5).svg";
import logo6 from "../sponsor/logo (6).svg";
import logo7 from "../sponsor/logo (7).svg";
import logo8 from "../sponsor/logo (8).svg";

import location from "../../public/footer/loc.svg";
import twitter from "../../public/footer/twt.svg";
import telephone from "../../public/footer/tel.svg";
import email from "../../public/footer/mail.svg";
import instagram from "../../public/footer/inst.svg";
import faceBook from "../../public/footer/fb.svg";

import star from "../cars/star.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "cars",
    title: "Cars",
  },
  {
    id: "contact",
    title: "Contact us",
  },
];

export const services = [
  {
    title: "Car sales",
    icon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 104 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.546 89.1428H89.5153V96.5714H60.546V89.1428Z"
          fill="#12273D"
        />
        <path d="M60.546 74.2858H104V81.7143H60.546V74.2858Z" fill="#12273D" />
        <path d="M60.546 59.4286H104V66.8572H60.546V59.4286Z" fill="#12273D" />
        <path
          d="M69.7762 34.2346L53.3035 0L36.8308 34.2346L0 39.7243L26.6518 66.3743L20.3582 104L46.0612 90.142V81.7477L29.9796 90.4206L33.7891 67.6297L34.4336 63.778L31.7069 61.0554L15.5638 44.9094L37.8737 41.5851L41.6397 41.0243L43.3272 37.5217L53.3035 16.7849L63.2798 37.5217L64.9673 41.0243L68.7333 41.5851L95.7254 45.6151L96.7574 38.2571L69.7762 34.2346Z"
          fill="#12273D"
        />
      </svg>
    ),
    text: "At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.",
  },
  {
    title: "Car rental",
    icon: (
      <svg
        width="90"
        height="90"
        viewBox="0 0 107 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.47 5.029C16.371 7.704 8.88103 10.165 5.88503 10.593C2.14003 11.021 0.535034 11.663 0.535034 12.84C0.535034 16.157 10.379 14.659 23.754 9.202L36.38 4.066L46.759 9.309L57.138 14.445L62.702 23.54C65.805 28.569 68.373 33.277 68.373 33.919C68.587 37.236 64.949 34.668 58.636 26.964C52.537 19.688 51.039 18.511 45.796 16.799C38.199 14.445 36.166 14.445 32.742 17.227C29.211 20.009 29.104 23.861 32.635 27.285C34.882 29.639 36.166 29.96 42.479 29.96C53.179 29.96 63.986 35.952 60.241 39.697C59.278 40.66 57.138 40.66 51.039 39.59C45.047 38.627 41.409 38.52 35.631 39.483C23.647 41.302 21.507 41.088 14.552 36.808C10.593 34.347 6.84803 32.849 4.38703 32.742C-0.962966 32.635 -0.641966 35.203 4.81503 36.915C7.16903 37.557 11.128 39.483 13.482 41.088C19.26 44.833 23.647 45.475 34.668 43.87C46.438 42.265 49.22 42.8 49.22 47.08C49.22 49.434 50.076 50.611 52.43 52.109C55.533 53.928 55.64 54.249 55.64 61.632C55.64 70.085 57.245 72.76 62.274 72.76C66.768 72.76 68.48 69.764 68.48 61.418C68.48 54.356 68.587 53.928 71.69 52.216C74.686 50.504 74.9 49.969 74.9 43.977C74.9 40.446 74.472 37.236 73.83 36.915C73.295 36.594 72.76 35.203 72.76 34.026C72.76 32.742 69.871 27.071 66.233 21.293L59.813 10.807L48.792 5.35C42.693 2.461 36.915 0 35.738 0.107002C34.668 0.213997 28.676 2.354 22.47 5.029ZM44.405 20.972C47.508 21.935 50.397 23.54 51.039 24.503C52.002 26.001 51.253 26.215 44.298 25.894C36.273 25.466 33.384 24.075 34.668 20.865C35.417 18.832 37.557 18.832 44.405 20.972ZM70.406 44.084C70.085 47.936 69.657 48.685 67.41 49.22C64.842 49.862 64.735 50.183 64.414 59.171C64.093 67.624 63.879 68.48 62.06 68.48C60.134 68.48 59.92 67.731 59.92 59.278V50.183L56.71 49.113C54.998 48.471 53.5 47.187 53.5 46.331C53.5 45.154 54.677 44.833 59.171 45.154C64.521 45.475 64.735 45.368 65.056 42.479C65.377 40.232 65.912 39.59 68.052 39.59C70.513 39.59 70.727 39.911 70.406 44.084Z"
          fill="#12273D"
        />
        <path
          d="M72.7601 73.402C68.5871 75.007 62.5951 76.398 57.7801 76.719C50.8251 77.254 48.5781 76.933 41.9441 74.472C31.9931 70.941 28.4621 70.941 25.2521 74.365C23.8611 75.863 21.7211 77.04 20.5441 77.04C15.8361 77.04 13.2681 84.851 16.9061 88.061C19.1531 90.094 39.9111 99.082 53.6071 103.897L63.7721 107.428L75.0071 103.469C86.4561 99.403 91.6991 98.654 95.3371 100.687C98.1191 102.078 100.794 101.222 99.9381 99.082C99.1891 97.156 93.9461 95.23 89.1311 95.23C87.2051 95.23 80.4641 96.942 74.2581 99.082L63.0231 103.041L53.7141 99.51C48.5781 97.584 38.7341 93.625 31.8861 90.736C19.6881 85.6 16.9061 83.246 20.9721 81.641C23.3261 80.785 40.3391 86.242 44.4051 89.131C50.5041 93.625 80.7851 92.448 80.7851 87.74C80.7851 86.563 79.8221 86.242 77.5751 86.456C66.5541 87.419 52.1091 87.847 49.7551 87.312C46.6521 86.563 46.2241 83.995 49.0061 82.604C49.9691 82.069 54.2491 81.32 58.3151 80.999C62.4881 80.678 69.2291 79.18 73.2951 77.575C82.2831 74.151 86.0281 74.472 97.1561 79.18C104.86 82.39 107 82.604 107 79.822C107 78.003 87.7401 70.62 83.2461 70.62C81.3201 70.727 76.6121 71.904 72.7601 73.402ZM38.8411 77.789C42.3721 79.073 43.8701 80.143 43.5491 81.32C43.1211 83.139 42.3721 83.032 34.0261 80.036C27.9271 77.896 26.7501 75.97 31.3511 75.97C32.6351 75.97 36.0591 76.826 38.8411 77.789Z"
          fill="#12273D"
        />
      </svg>
    ),
    text: "If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience.",
  },
  {
    title: "Car selling",
    icon: (
      <svg
        height="90"
        width="90"
        viewBox="0 0 104 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83.9286 0C80.6194 0 23.7252 0 20.0773 0L0 27.378L52.2157 96.1977L104 27.3701L83.9286 0ZM28.5454 30.3858L43.2566 74.336L9.91022 30.3858H28.5454ZM34.9542 30.3858H69.0697L52.129 81.6966L34.9542 30.3858ZM75.4698 30.3858H94.1262L60.8812 74.5722L75.4698 30.3858ZM80.8487 6.07716L94.2184 24.3086H75.4738L69.4917 6.07716H80.8487ZM63.0957 6.07716L69.0778 24.3086H34.9278L40.91 6.07716H63.0957ZM23.1568 6.07716H34.5138L28.5316 24.3086H9.78706L23.1568 6.07716Z"
          fill="#12273D"
        />
      </svg>
    ),
    text: "At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get  your vehicle with minimal effort.",
  },
];

export const cars = [
  {
    id: 1,
    name: "Porsche 911",
    type: "Sports Car",
    description:
      "The Porsche 911 is a true icon in the sports car world, known for its sleek design, impressive performance, and superior handling. It's a two-door, two-seat coupe that's perfect for those who love to feel the wind in their hair and the road beneath their wheels.",
    seats: 2,
    luggage: 2,
    image: car1,
  },
  {
    id: 2,
    name: "BMW 7 Series",
    type: "Luxury Car",
    description:
      "The BMW 7 Series is the ultimate luxury car, offering unparalleled comfort, style, and technology. With its sleek exterior and spacious interior, this four-door sedan is perfect for those who demand the very best in automotive design and performance.",
    seats: 5,
    luggage: 3,
    image: car2,
  },
  {
    id: 3,
    name: "Range Rover Sport",
    type: "SUV",
    description:
      "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
    seats: 7,
    luggage: 4,
    image: car3,
  },
  {
    id: 4,
    name: "Mercedes-Benz S-Class",
    type: "Luxury Car",
    description:
      "The Mercedes-Benz S-Class is the epitome of luxury and style, with its sleek lines and advanced technology. It's a four-door sedan that's perfect for those who demand the very best in automotive design , performance and The exterior design seamlessly blends .",
    seats: 5,
    luggage: 2,
    image: car4,
  },
  {
    id: 5,
    name: "Tesla Model S",
    type: "Electric Car",
    description:
      "The Tesla Model S is a high-performance electric car that's perfect for those who want to combine luxury with sustainability. With its sleek design and advanced technology, this four-door sedan offers a smooth and quiet ride. It also has plenty of space for passengers and luggage.",
    seats: 5,
    luggage: 2,
    image: car5,
  },
  {
    id: 6,
    name: "Bentley Bentayga",
    type: "Luxury SUV",
    description:
      "The Bentley Bentayga is the ultimate luxury SUV, offering unparalleled comfort, style, and performance. With its powerful engine and advanced technology, this vehicle can handle any terrain with ease. It's also incredibly spacious space.",
    seats: 7,
    luggage: 4,
    image: car6,
  },
];

export const testimonials = [
  {
    name: "John Moo",
    description:
      "I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.",
    city: "London",
    img: star,
  },
  {
    name: "Sarah Ahmed",
    description:
      "YourCar made selling my car a breeze. They handled all the paperwork and negotiations, and I received a fair price for my vehicle. I would definitely use their services again in the future.",
    city: "Cairo",
    img: star,
  },
  {
    name: "Michael Khalil",
    description:
      "I had a wonderful experience renting a car from YourCar. The car was in excellent condition and the pickup and drop-off process was seamless. I highly recommend them for anyone in need of a luxury car rental.",
    city: "Toronto",
    img: star,
  },
  {
    name: "Emily Han",
    description:
      "YourCar exceeded my expectations in every way. From the moment I walked in, I felt like a valued customer. The staff went above and beyond to ensure that I found the car of my dreams. I couldn't be happier with my purchase and I highly recommend YourCar to anyone in the market for a luxury vehicle.",
    city: "New York",
  },
];

export const Tesla = [
  {
    img: test1,
    brand: "tesla model 1",
    description: "Innovative, expressive of boldness, futuristic, ambitious. ",
  },
  {
    img: test2,
    brand: "tesla model 2",
    description:
      "Pioneering, unconventional, advanced, carving its place in the future. ",
  },
  {
    img: test3,
    brand: "tesla model 3",
    description:
      "Innovative, characterized by boldness and uniqueness, moving towards the future ",
  },
  {
    img: test4,
    brand: "tesla model 4",
    description:
      "Advanced, innovative, possessing the spirit of boldness and progress, surpassing expectations.",
  },
  {
    img: test5,
    brand: "tesla model 5",
    description:
      "Unconventional, characterized by innovation and technological superiority, paving the way for the future ",
  },
  {
    img: test6,
    brand: "tesla model 6",
    description:
      "Advanced, embodying innovation and renewal, possessing the spirit of uniqueness and leadership.",
  },
  {
    img: test7,
    brand: "tesla model 7",
    description:
      "Distinguished by boldness, innovation, and progress, expressing uniqueness and advanced technology. ",
  },
  {
    img: test8,
    brand: "tesla model 8",
    description:
      "Reflects leadership and innovation, occupying a leading position in the automotive world ",
  },
  {
    img: test9,
    brand: "tesla model 9",
    description:
      "Unconventional, demonstrating initiative and excellence, distinguished by continuous development and innovation ",
  },
];

export const sponsor = [
  { img: logo1, type: "sponsor 1" },
  { img: logo2, type: "sponsor 2" },
  { img: logo3, type: "sponsor 3" },
  { img: logo4, type: "sponsor 4" },
  { img: logo5, type: "sponsor 5" },
  { img: logo6, type: "sponsor 6" },
  { img: logo7, type: "sponsor 7" },
  { img: logo8, type: "sponsor 8" },
];

export const footerIcon = [
  {
    img: telephone,
    type: "telephone Icon",
    description: "2038 2nd Avenue,Las Vegas, United States",
  },
  {
    img: location,
    type: "location Icon",
    description: "01444773421423,  01477678449405",
  },
  { img: email, type: "email Icon", description: "info@YourCar.com  " },

  { img: twitter, type: "twitter Icon", description: "" },
  { img: instagram, type: "instagram Icon", description: "" },
  { img: faceBook, type: "faceBook Icon", description: "" },
];
