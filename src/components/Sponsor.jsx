import { sponsor as sponsorData } from "../../public/data/data";

function Sponsor() {
  return (
    <div className="bg-slate-300">
      <div className="container mx-auto grid items-center justify-items-center gap-6 py-12 px-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
      {sponsorData.map((item, key) => (
        <div key={key} className="p-2 transition-transform hover:scale-110">
          <img
            src={item.img}
            alt={item.alt}
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain grayscale hover:grayscale-0 transition-opacity"
            />
        </div>
      ))}
      </div>
    </div>
  );
}

export default Sponsor;
