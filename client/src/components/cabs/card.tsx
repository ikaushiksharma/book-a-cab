import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  id: string;
  price: string;
  name: string;
  image: string;
  selected?: boolean;
  onSelect?: (name: string) => void;
};

const CabCard = ({ id, image, name, price, selected = false, onSelect }: Props) => {
  return (
    <div
      onClick={() => onSelect && onSelect(id)}
      className={cn([
        "w-full max-w-sm mx-auto px-4 py-2 rounded-lg bg-white transition-all cursor-pointer aspect-square shadow",
        selected ? " border border-blue-500 scale-105" : " border border-gray-200",
      ])}
    >
      <div className="relative h-[90%]">
        <Image objectFit="contain" src={image} fill alt="cab image" />
      </div>
      <div className="flex items-center justify-between">
        <h5 className="text-gray-900">{name}</h5>
        <div className="font-semibold">{`₹${price}/min`}</div>
      </div>
    </div>
  );
};

export default CabCard;
