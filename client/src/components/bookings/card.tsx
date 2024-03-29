import { Button } from "antd";
import Image from "next/image";
import React from "react";

type Props = {
  id: string;
  source: string;
  destination: string;
  price: number | string;
  email: string;
  startTime: string;
  endTime: string;
  cabImage: string;
  loading: boolean;
  onDelete: (id: string) => void;
};

const BookingCard = ({
  id,
  source,
  destination,
  price,
  email,
  startTime,
  endTime,
  cabImage,
  loading,
  onDelete,
}: Props) => {
  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 cursor-pointer mt-4 overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <div className="relative w-80 aspect-[4/3]">
          <Image objectFit="contain" src={cabImage} fill alt="cab image" />
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {source} to {destination}
          </h5>
          <p className="flex text-xl items-center gap-1.5 font-sans font-normal leading-relaxed text-blue-gray-900 antialiased">
            ₹ {price}
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-4 items-center font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            <p className="col-span-1">Email</p> <p className="font-medium col-span-3">{email}</p>
          </div>
        </div>
        <div className="grid grid-cols-4 items-center font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
          <p className="col-span-1">From</p> <p className="font-medium col-span-3">{startTime}</p>
        </div>
        <div className="grid grid-cols-4 items-center font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
          <p className="col-span-1">To</p>
          <span className="font-medium col-span-3">{endTime}</span>
        </div>
      </div>
      <div className="p-6 flex gap-4 pt-3">
        <Button
          disabled={loading}
          onClick={() => onDelete(id)}
          size="large"
          style={{ background: "#f56565", width: "100%" }}
          type="primary"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BookingCard;
