import React from "react";

import SectionHeader from "@/components/landing/heroSection";
import AboutUs from "@/components/landing/aboutUs";
import LocationSlider from "@/components/landing/locationSlider";

const Page = () => {
  return (
    <div className="relative">
      <div className="rounded-2xl bg-custom-gray py-20">
        <SectionHeader />
      </div>

      <div className="rounded-2xl bg-custom-gray py-24">
        <AboutUs />
      </div>

      <div className="relative mb-28 mt-7 bg-custom-black">
        <LocationSlider />
      </div>
    </div>
  );
};

export default Page;
