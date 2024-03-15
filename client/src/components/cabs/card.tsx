import { cn } from "@/lib/utils";
import { Button } from "antd";
import Image from "next/image";
import React from "react";
import EditCabModal from "./editCabModal";
import { createToast, updateErrorToast, updateSuccessToast } from "@/lib/notification";
import axios from "axios";

type Props = {
  id: string;
  price: string;
  name: string;
  image: string;
  selected?: boolean;
  onSelect?: (name: string) => void;
  updated: number;
  setUpdated: (number: number) => void;
};

const CabCard = ({
  id,
  image,
  name,
  price,
  selected = false,
  onSelect,
  updated,
  setUpdated,
}: Props) => {
  const [editingMode, setEditingMode] = React.useState(false);
  const onFinish = async (values: any) => {
    const toast = createToast("loading");
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_API}/cab/${id}`, values);
      console.log(response);
      updateSuccessToast(toast, "Cab Details Updated");
      setUpdated(updated + 1);
    } catch (error) {
      updateErrorToast(toast, "something went wrong");
      console.error(error);
    }
    return;
  };
  return (
    <>
      <div
        onClick={() => onSelect && onSelect(id)}
        className={cn([
          "w-full max-w-sm mx-auto px-4 py-2 rounded-lg bg-white transition-all cursor-pointer aspect-[3/4] shadow",
          selected ? " border border-blue-500 scale-105" : " border border-gray-200",
        ])}
      >
        <div className="relative h-[80%]">
          <Image objectFit="contain" src={image} fill alt="cab image" />
        </div>
        <div className="flex items-center justify-between">
          <h5 className="text-gray-900">{name}</h5>
          <div className="font-semibold">{`₹${price}/min`}</div>
        </div>
        <div className="w-full border mt-4">
          <Button
            size="large"
            style={{ background: "#24a0ed", width: "100%" }}
            type="primary"
            onClick={() => setEditingMode(true)}
          >
            Edit
          </Button>
        </div>
      </div>
      <EditCabModal
        isModalOpen={editingMode}
        handleCancel={() => setEditingMode(false)}
        onFinish={onFinish}
        onFinishFailed={() => setEditingMode(false)}
        updated={updated}
        data={{ name, image, price }}
      />
    </>
  );
};

export default CabCard;
