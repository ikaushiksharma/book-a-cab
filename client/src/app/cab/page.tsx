"use client";
import React, { useEffect, useState } from "react";
import BookingCard from "@/components/bookings/card";
import Heading from "@/shared/Heading";
import axios from "axios";
import { handleBookingData } from "@/lib/helper";
import { BookingType, CabType } from "@/types";
import CabCard from "@/components/cabs/card";

type Props = {};

const Page = (props: Props) => {
  const [cabs, setCabs] = useState<Array<CabType>>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/cab/all`);
        console.log(response.data);
        setCabs(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      setCabs([]);
    };
  }, []);

  return (
    <div className="min-h-screen pb-64 h-fit">
      <div className="flex items-center justify-center my-6">
        <Heading isMain className="text-7xl">
          All Cabs
        </Heading>
      </div>
      {cabs.length <= 0 ? (
        <div className="flex items-center justify-center">
          <Heading className="text-4xl">No Cabs Available</Heading>
        </div>
      ) : (
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {cabs.map(({ name, price, image, id }) => (
            <CabCard key={id} name={name} price={price} image={image} id={id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
