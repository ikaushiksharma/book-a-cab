import Image from "next/image";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { aboutUsData } from "@/data/content";
import aboutUsImage from "@/images/taxi-map.svg";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Heading from "@/shared/Heading";

const AboutUs = () => {
  return (
    <div className="container">
      <div className="items-center justify-between space-y-10 md:flex md:space-y-0">
        <div className="relative mx-auto flex h-[300px] w-[300px] items-center justify-center md:mx-0 lg:h-[500px] lg:w-[500px] ">
          <Image src={aboutUsImage} alt="taxi map" className="z-10 h-full w-full object-cover" />
        </div>
        <div className="md:w-[50%]">
          <Heading desc={aboutUsData.description}>
            {aboutUsData.headingStart}{" "}
            <span className="text-button-primary">{aboutUsData.spanText} </span>
            {aboutUsData.headingEnd}
          </Heading>
          <div className="mb-5 space-y-3 lg:mb-10">
            {aboutUsData.list.map((item) => (
              <div key={item} className="flex items-center gap-1 text-sm text-neutral-500">
                <BsFillCheckCircleFill className="text-xl text-button-primary" /> {item}
              </div>
            ))}
          </div>
          <ButtonPrimary sizeClass="px-6 py-4" href={aboutUsData.downloadHref}>
            Book A Cab Now
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
