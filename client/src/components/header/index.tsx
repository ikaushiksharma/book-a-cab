import type { FC } from 'react';
import React from 'react';

import MainNav from './mainNav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="nc-Header sticky inset-x-0 top-0 z-40 w-full bg-white py-4 lg:py-6">
      <MainNav />
    </div>
  );
};

export default Header;
