"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/navbar/Navbar";
import LogoDark from "../../components/logo/LogoDark";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
      <div className="global-container">
        <div className="flex items-center justify-between gap-x-8">
          <LogoDark />
          <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="button hidden rounded-[50px] border-[#7F8995] bg-transparent text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block"
            >
              Login
            </Link>
            <Link
              href="#"
              className="button hidden rounded-[50px] border-black bg-black text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block"
            >
              Sign up free
            </Link>
            <div className="block lg:hidden">
              <button onClick={() => setMobileMenu(true)} className="mobile-menu-trigger is-black">
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
