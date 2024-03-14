import { User2, UserSquare } from "lucide-react";
import React from "react";

type Props = {
  source: string;
  destination: string;
  price: number | string;
  email: string;
  startTime: string;
  endTime: string;
};

const BookingCard = ({ source, destination, price, email, startTime, endTime }: Props) => {
  return (
    <div className="relative mx-auto flex w-full max-w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 group cursor-pointer mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          alt="cab image"
        />
        <div className="to-bg-black-10 group-hover:hidden transition-all absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {source} to {destination}
          </h5>
          <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            ₹ {price}
          </p>
        </div>
        <div className="">
          <h5 className="font-sans flex text-base gap-2 leading-snug tracking-normal text-blue-gray-900 antialiased">
            <User2 /> <span className="font-medium"> {email}</span>
          </h5>
        </div>
        <div className="grid grid-cols-4 items-center font-sans text-base border font-light leading-relaxed text-gray-700 antialiased">
          <p className="col-span-1">From</p> <p className="font-medium col-span-3">{startTime}</p>
        </div>
        <div className="grid grid-cols-4 items-center font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
          <p className="col-span-1">To</p>
          <span className="font-medium col-span-3">{endTime}</span>
        </div>
      </div>
      <div className="p-6 flex gap-4 pt-3">
        <button
          className="block w-full select-none rounded-lg bg-red-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Delete
        </button>
        <button
          className="block w-full select-none rounded-lg bg-blue-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
