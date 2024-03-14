"use client";
import Link from "next/link";
import React from "react";

import { footerData, socials } from "@/data/content";
import ButtonCircle3 from "@/shared/Button/ButtonCirclel3";
import Logo from "@/shared/Logo";

const UpperSection = () => {
  return (
    <div className="relative justify-between  gap-10 text-neutral-100 max-sm:flex-col flex">
      <div className="sm:max-w-96  space-y-5">
        <Logo />
        <p className="font-light text-neutral-200">{footerData.description}</p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <ButtonCircle3 key={social.type} className="bg-custom-dark-gray" size="w-10 h-10">
              {social}
            </ButtonCircle3>
          ))}
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-5 md:grid-cols-2 ">
        {footerData.footerLinks.map((section) => (
          <div key={section.title} className="space-y-5">
            <div className="text-xl font-medium">{section.title}</div>
            <div className="flex flex-col items-start justify-center gap-5">
              {section.links.map((link) => (
                <div className="relative inline-block" key={link.name}>
                  <Link className="underline-text" href={link.href}>
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperSection;
