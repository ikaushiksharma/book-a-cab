import type { ButtonHTMLAttributes } from 'react';
import React from 'react';

export interface ButtonCircleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  href?: string;
}

const ButtonCircle: React.FC<ButtonCircleProps> = ({
  className = '',
  size = ' w-9 h-9 ',
  ...args
}) => {
  return (
    <button
      type="button"
      className={`ttnc-ButtonCircle flex items-center justify-center rounded-full bg-button-primary !leading-none text-neutral-50 focus:ring-transparent disabled:bg-opacity-70 ${className} ${size} `}
      {...args}
    />
  );
};

export default ButtonCircle;
