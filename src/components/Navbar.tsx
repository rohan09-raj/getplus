"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./reusables/Modal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex bg-[#FFFAF1] p-4 justify-center">
      {isModalOpen && (
        <Modal onCloseClick={() => setIsModalOpen(false)}>
          <p>Modal</p>
        </Modal>
      )}
      <div className="max-w-7xl flex w-full items-center justify-between">
        <Image
          className="h-auto w-auto md:h-6"
          src="https://storage.googleapis.com/getplus.in/images/plusNewLogo%20.png"
          width={125}
          height={35}
          alt="Plus"
        />
        <div className="hidden md:flex">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#9D002B] text-white px-4 py-2 rounded-lg md:text-sm"
          >
            Download App
            <Image
              src="https://plusgold.in/images/playstore.png"
              width={16}
              height={16}
              alt="Playstore"
            />
            <Image
              src="https://plusgold.in/images/appstore.png"
              width={16}
              height={16}
              alt="Appstore"
            />
          </button>
          <button
            className="flex items-center p-3"
            onClick={() => handleToggle()}
          >
            <svg
              className="block h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div
          className={`flex gap-10 items-center md:flex-col ${
            isMenuOpen
              ? "md:absolute w-11/12 top-24 bg-[#FFFAF1] p-4 rounded-lg"
              : "md:hidden"
          }`}
        >
          <Link className="text-[#000000A6]" href="/">
            Home
          </Link>
          <Link className="text-[#000000A6]" href="/">
            About
          </Link>
          <Link className="text-[#000000A6]" href="/">
            Partner With Us
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#9D002B] text-white px-4 py-2 rounded-lg md:hidden"
          >
            Download App
            <Image
              src="https://plusgold.in/images/playstore.png"
              width={16}
              height={16}
              alt="Playstore"
            />
            <Image
              src="https://plusgold.in/images/appstore.png"
              width={16}
              height={16}
              alt="Appstore"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
