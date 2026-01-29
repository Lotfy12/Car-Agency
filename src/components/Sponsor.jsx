import { sponsor as sponsorData } from "../../public/data/data";

function Sponsor() {
  return (
    <div className=" bg-slate-300">
      <div className="container m-auto grid items-center justify-center gap-5
	py-[3rem]  grid-cols-8">
      {sponsorData.map((item, key) => (
        <div key={key} className="pt-3 ">
          <img
            src={item.img}
            alt={item.alt}
            className="mp-6  h-[5rem]   w-[5rem]  "
            />
        </div>
      ))}
      </div>
    </div>
  );
}

export default Sponsor;
