import React from "react";

import { countries } from "@/data/content";

const LocationSlider = () => {
  return (
    <div className="relative flex -rotate-2 gap-10 overflow-clip bg-button-primary py-5 text-3xl font-semibold text-neutral-100">
      <div className=" flex animate-marquee items-center gap-10 whitespace-nowrap">
        {countries.map((country) => (
          <span className="" key={country}>
            {country}
          </span>
        ))}
      </div>

      <div className="absolute flex animate-marquee2 items-center gap-10 whitespace-nowrap pl-10">
        {countries.map((country) => (
          <span className="" key={country}>
            {country}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LocationSlider;
