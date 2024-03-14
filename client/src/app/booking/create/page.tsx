import BookingForm from "@/components/forms/bookingForm";
import { bookingForm } from "@/data/content";
import Heading from "@/shared/Heading";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="min-h-screen pb-64 h-fit">
      <div className="flex items-center justify-center my-6">
        <Heading isMain className="text-7xl">
          {bookingForm.heading}
        </Heading>
      </div>
      <div className="flex flex-col mt-12 max-w-3xl mx-auto items-center justify-center">
        <BookingForm />
        <div> shortest distance is 32min</div>
        <div>cabs available are:</div>
      </div>
    </div>
  );
};

export default Page;
