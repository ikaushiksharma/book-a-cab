import React from "react";
import { MdCopyright } from "react-icons/md";
import UpperSection from "@/components/footer/upperSection";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="relative -z-10 -mt-40 bg-custom-black pt-64">
        <div className="container">
          <UpperSection />
          <div className="mt-5 flex flex-col items-center justify-center gap-5 border-t border-white/10 py-6 md:flex-row md:justify-between md:gap-0 2xl:py-10">
            <div className="flex justify-center md:justify-start">
              <p className="flex items-center text-sm text-gray-400 md:items-start lg:items-center lg:text-base">
                <span>
                  <MdCopyright />
                </span>
                Cab Booking App. All rights reserved.
              </p>
            </div>

            <div className="flex items-center justify-center gap-5 text-sm text-neutral-400 md:justify-end lg:text-base">
              <p className="effect-underline">Privacy Policy</p>
              <p className="effect-underline">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
