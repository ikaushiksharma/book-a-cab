import BookingCard from "@/components/bookings/card";
import Heading from "@/shared/Heading";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="min-h-screen pb-64 h-fit">
      <div className="flex items-center justify-center my-6">
        <Heading isMain className="text-7xl">
          All Bookings
        </Heading>
      </div>
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {new Array(5).fill(0).map((_, idx) => (
          <BookingCard
            source="Amritsar"
            destination="Pune"
            price={300}
            email="kaushik445566@gmail.com"
            startTime={new Date().toLocaleString()}
            endTime={new Date().toLocaleString()}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
