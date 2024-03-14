import BookingForm from "@/components/forms/bookingForm";
import Heading from "@/shared/Heading";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="min-h-screen pb-64 h-fit">
      <div className="flex items-center justify-center my-6">
        <Heading isMain className="text-7xl">
          Book Your Cab
        </Heading>
      </div>
      <div className="flex flex-col mt-12 max-w-3xl mx-auto items-center justify-center">
        <BookingForm />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl capitalize">Minimum Time Required to reach location</h2>
            <p className="text-2xl font-medium">{20 + " min"}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl capitalize">Available Cabs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
