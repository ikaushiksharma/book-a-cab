"use client";
import React, { useEffect, useState } from "react";
import BookingCard from "@/components/bookings/card";
import Heading from "@/shared/Heading";
import axios from "axios";
import { handleBookingData } from "@/lib/helper";
import { BookingType } from "@/types";

type Props = {};

const Page = (props: Props) => {
  const [bookings, setBookings] = useState<Array<BookingType>>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/booking/all`);
        console.log(response.data);
        const bookings = handleBookingData(response.data)
        console.log(bookings)
        setBookings(bookings);
        
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      setBookings([]);
    };
  }, []);

  return (
    <div className="min-h-screen pb-64 h-fit">
      <div className="flex items-center justify-center my-6">
        <Heading isMain className="text-7xl">
          All Bookings
        </Heading>
      </div>
      {bookings.length <= 0 ? (
        <div className="flex items-center justify-center">
          <Heading className="text-4xl">No Bookings</Heading>
        </div>
      ) : (
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {bookings.map(
            ({ source, destination, price, email, cabImage, startTime, endTime, id }) => (
              <BookingCard
                key={id}
                source={source}
                destination={destination}
                price={price}
                email={email}
                startTime={startTime}
                endTime={endTime}
                cabImage={cabImage}
              />
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
