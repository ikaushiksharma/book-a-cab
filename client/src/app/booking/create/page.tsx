"use client";
import React, { useId, useState } from "react";
import { Button } from "antd";
import axios from "axios";

import BookingForm from "@/components/forms/bookingForm";
import Heading from "@/shared/Heading";
import { CabType } from "@/types";
import { createToast, updateErrorToast, updateSuccessToast } from "@/lib/notification";
import ViewCabCard from "@/components/cabs/viewCab";

const Page = () => {
  const key = useId();
  const [cabs, setCabs] = useState<null | Array<CabType>>(null);
  const [data, setData] = useState<{ email: string; source: string; destination: string }>();
  const [minTime, setMinTime] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [selectedCab, setSelectedCab] = useState(null);

  const getAvailableCabs = async () => {
    setLoading(true);
    setDisabled(true);
    const toast = createToast("loading");
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API}/cab/available-cabs`);
      console.log(response);
      const cabs = response.data;
      updateSuccessToast(toast, "Cabs Fetched Successfully");
      setCabs(cabs);
    } catch (error) {
      updateErrorToast(toast, "something went wrong");
      console.error(error);
    }
    setLoading(false);
  };

  const handleSubmit = async () => {
    const toast = createToast("loading");
    try {
      setLoading(true);
      if (!data || !selectedCab) {
        throw new Error("Data not available");
      }
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API}/booking/create`, {
        ...data,
        cabId: selectedCab,
      });
      console.log(response);
      updateSuccessToast(toast, "Booking Confirmed");
      getAvailableCabs();
      setDisabled(false);
    } catch (error) {
      updateErrorToast(toast, "something went wrong");
      console.error(error);
    }
    setLoading(false);
  };

  const getShortestTime = async (data: any) => {
    setLoading(true);
    const toast = createToast("loading");
    try {
      console.log(data);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/path/shortest-path`,
        data,
      );
      const { time } = response.data;
      updateSuccessToast(toast, "success");
      setData(data);
      setMinTime(time);
    } catch (error) {
      updateErrorToast(toast, "something went wrong");
      console.error(error);
    }
    setLoading(false);
  };
  const handleReset = () => {
    setMinTime(-1);
    setCabs(null);
    setSelectedCab(null);
  };

  return (
    <div className="min-h-screen pb-64 h-fit p-6">
      <div className="flex items-center justify-center my-6">
        <Heading isMain className="text-7xl">
          Book Your Cab
        </Heading>
      </div>
      <div className="flex flex-col mt-12 max-w-3xl gap-4 mx-auto items-center justify-center">
        <BookingForm disabled={disabled} onSubmit={getShortestTime} onReset={handleReset} />
        <div className="flex flex-col gap-12">
          {minTime != -1 && (
            <div className="flex items-center justify-center flex-col gap-4">
              <div className="flex flex-col items-center justify-center">
                <h2 className="sm:text-xl capitalize">Minimum Time Required to reach location</h2>
                <p className="text-2xl font-medium">{`${minTime} minutes`}</p>
              </div>
              <Button
                size="large"
                disabled={loading}
                style={{ background: "#24a0ed" }}
                type="primary"
                onClick={getAvailableCabs}
              >
                Get Available Cabs
              </Button>
            </div>
          )}
          {cabs &&
            (cabs.length == 0 ? (
              <h2 className="text-xl text-center capitalize">No cabs available</h2>
            ) : (
              <div className="flex flex-col gap-6 items-center justify-center">
                <h2 className="text-xl capitalize">Available Cabs</h2>
                <div className="grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
                  {cabs.map((cab: any) => {
                    return (
                      <ViewCabCard
                        onSelect={setSelectedCab}
                        selected={selectedCab === cab.id}
                        key={cab.id}
                        {...cab}
                      />
                    );
                  })}
                </div>
                <Button
                  size="large"
                  disabled={loading}
                  style={{ background: "#24a0ed" }}
                  type="primary"
                  onClick={handleSubmit}
                >
                  Confirm Booking
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
