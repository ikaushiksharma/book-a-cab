import Link from "next/link";
import React from "react";
import { MdClose } from "react-icons/md";

import { navLinks } from "@/data/content";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input";
import Logo from "@/shared/Logo";

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  return (
    <div className="h-screen w-full divide-y divide-neutral-300 overflow-y-auto bg-white py-2 shadow-lg ring-1 transition">
      <div className="px-5 py-2">
        <Logo />
        {/* eslint-disable */}
        <span className="absolute border rounded-full m-3 right-2 top-2 p-1" onClick={onClickClose}>
          {/* eslint-disable */}
          <MdClose />
        </span>
      </div>
      <ul className="flex flex-col space-y-5 px-5 py-6">
        {navLinks.map((item) => (
          <Link href={item.href} key={item.id} className="capitalize">
            {item.name}
          </Link>
        ))}
      </ul>
      <div className="px-5 pt-5">
        <ButtonPrimary
          className="flex items-center gap-x-2 self-center"
          href=""
          sizeClass="px-4 py-3 sm:px-5"
        >
          Book A Cab
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default NavMobile;
