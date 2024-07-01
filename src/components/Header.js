import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex items-center bg-slate-900 flex-grow p-1 py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        <div className=" hidden sm:flex items-center h-10 flex-grow rounded-md cursor-pointer   bg-[yellow] hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none px-4 "
            type="text"
          />
          <SearchIcon className="h-12 p-4   " />
        </div>
        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>hello daniel</p>
            <p className="font-extrabold md:text-sm">Account and list</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">and Order</p>
          </div>
          <div className=" relative link flex items-center ">
            <span className="absolute right-0 top-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className="hidden font-extrabold md:text-sm md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-3 p-2 pl-6 items-center bg-slate-700 text-white text-sm">
        <MenuIcon className="h-6 mr-1" />
        <p className="link flex items-center">All</p>
        <p className="link">Prime video</p>
        <p className="link">Amazon business</p>
        <p className="link">Todays view</p>
        <p className="link hidden lg:inline-flex">ELectronics</p>
        <p className="link hidden lg:inline-flex">Food and Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy again </p>
        <p className="link hidden lg:inline-flex">Shopper toolkit</p>
        <p className="link hidden lg:inline-flex">Health and personal care</p>
      </div>
    </header>
  );
}

export default Header;
