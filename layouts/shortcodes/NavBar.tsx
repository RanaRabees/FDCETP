import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../components/Logo';
import config from "../../config/config.json";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { logo } = config.site;
  return (
    <div>
      <nav className="w-full lg:bg-transparent md:bg-transparent bg-theme-light top-0 left-0 right-0 z-10">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Logo src={logo} />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/images/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/images/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="lg:pb-2 md:pb-2 pb-6 text-xl lg:text-black md:text-black text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-blue-900  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="lg:pb-2 md:pb-2 pb-6 text-xl lg:text-black md:text-black text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="lg:pb-2 md:pb-2 pb-6 text-xl lg:text-black md:text-black text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/faq" onClick={() => setNavbar(!navbar)}>
                    FAQ
                  </Link>
                </li>
                <li className="lg:pb-2 md:pb-2 pb-6 text-xl lg:text-black md:text-black text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="lg:pb-2 md:pb-2 pb-6 text-xl lg:text-black md:text-black text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-blue-600  border-blue-900  md:hover:text-blue-600 md:hover:bg-transparent">
                  <Link className="btn btn-primary z-0 py-[14px]" href="/pricing" rel="">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
