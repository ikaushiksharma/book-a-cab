import React from "react";

import { navLinks } from "@/data/content";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Logo from "@/shared/Logo";

import NavigationItem from "./NavItem";
import MenuBar from "./menuBar";

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between lg:justify-normal">
      <div className="lg:w-[20%]">
        <Logo />
      </div>
      <div className="hidden w-[60%] items-center justify-center gap-7 lg:flex">
        {navLinks.map((navLink) => (
          <NavigationItem
            className="hover:text-button-primary"
            menuItem={navLink}
            key={navLink.id}
          />
        ))}
      </div>
      <div className="flex items-center justify-end lg:w-[20%]">
        <ButtonPrimary
          href="/booking/create"
          sizeClass="px-6 py-4"
          className="hidden self-center lg:block"
        >
          Create Booking
        </ButtonPrimary>
        <div className="lg:hidden">
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
