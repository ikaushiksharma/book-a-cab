import Link from "next/link";
import React from "react";
import { AiFillCar } from "react-icons/ai";

import ButtonCircle from "../Button/ButtonCircle";

const Logo: React.FC = () => {
  return (
    <Link className="flex cursor-pointer items-center gap-1 font-medium" href="/">
      <ButtonCircle className="" size="w-10 h-10">
        <AiFillCar className="text-2xl" />
      </ButtonCircle>
      <span>Cab Booking</span>
    </Link>
  );
};

export default Logo;
