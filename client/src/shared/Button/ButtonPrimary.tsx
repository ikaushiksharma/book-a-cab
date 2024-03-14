import React from "react";

import type { ButtonProps } from "@/shared/Button";
import Button from "@/shared/Button";

export interface ButtonPrimaryProps extends ButtonProps {
  href?: any;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ className = "", ...args }) => {
  return (
    <Button
      className={`transitionEffect rounded-full bg-button-primary hover:bg-button-primary/80 disabled:bg-opacity-70 ${className}`}
      {...args}
    />
  );
};

export default ButtonPrimary;
