import Image from "next/image";
import React from "react";

import { headingData } from "@/data/content";
import taxi from "@/images/taxi.svg";

const SectionHeader = () => {
  return (
    <div className="container">
      <div className="items-center justify-between space-y-10 md:flex md:space-y-0">
        <div className="space-y-5 md:w-[50%]">
          <div>
            <span className="text-xl text-button-primary">-</span> {headingData.description}
          </div>
          <div className="w-[80%] text-3xl font-medium lg:text-5xl" style={{ lineHeight: "1.2em" }}>
            {headingData.title} <span className="text-button-primary">{headingData.spanText}</span>
          </div>
          <div className="w-[90%] text-sm text-neutral-500">{headingData.subtext}</div>
        </div>
        <div className="md:w-[48%]">
          <Image src={taxi} alt="taxi-app" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
