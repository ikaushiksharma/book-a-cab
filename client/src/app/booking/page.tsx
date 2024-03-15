"use client";
import React, { useEffect, useState } from "react";
import BookingCard from "@/components/bookings/card";
import Heading from "@/shared/Heading";
import axios from "axios";
import { handleBookingData } from "@/lib/helper";
import { BookingType } from "@/types";
import Loader from "@/shared/Loader";
import { createToast, updateErrorToast, updateSuccessToast } from "@/lib/notification";

type Props = {};

const Page = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [bookings, setBookings] = useState<Array<BookingType>>([]);
  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/booking/all`);
      console.log(response.data);
      const bookings = handleBookingData(response.data);
      console.log(bookings);
      setBookings(bookings);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
    return () => {
      setBookings([]);
    };
  }, []);
  const handleDelete = async (id: string) => {
    setDisabled(true);
    const toast = createToast("Loading!");
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_API}/booking/${id}`);
      console.log(response.data);
      await fetchBookings();
      updateSuccessToast(toast, "Deleted Successfully!");
    } catch (error) {
      updateErrorToast(toast, "Something went wrong!");
      console.error(error);
    }
    setDisabled(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen pb-64 h-fit">
      <div className="flex items-center justify-center my-6">
        <Heading isMain className="text-7xl">
          All Bookings
        </Heading>
      </div>
      {bookings.length <= 0 ? (
        <div className="flex items-center py-[20vh] justify-center">
          <Heading className="text-sm text-zinc-500">No Bookings!</Heading>
        </div>
      ) : (
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {bookings.map(
            ({ source, destination, price, email, cabImage, startTime, endTime, id }) => (
              <BookingCard
                loading={loading}
                onDelete={handleDelete}
                key={id}
                id={id}
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
