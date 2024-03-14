"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./reusables/Button";
import Rating from "./reusables/Rating";
import Modal from "./reusables/Modal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex justify-center">
      {isModalOpen && (
        <Modal onCloseClick={() => setIsModalOpen(false)}>
          <p className="flex-grow flex items-center justify-center text-center font-bold">
            Modal
          </p>
        </Modal>
      )}
      <section className="flex max-w-7xl w-full m-6 justify-center gap-10 md:flex-col">
        <div className="flex flex-col gap-4 justify-center w-1/2 md:w-full">
          <div className="flex gap-2">
            <span className="flex text-[#F76707] items-center">
              <Image
                src="https://storage.googleapis.com/getplus.in/images/orange_tick.png"
                height={20}
                width={20}
                alt="Orange Tick"
              />{" "}
              24K pure gold
            </span>
            <span className="flex text-[#1E63BE] items-center">
              <Image
                src="https://storage.googleapis.com/getplus.in/images/blueTimer.png"
                height={20}
                width={20}
                alt="Blue Clock"
              />{" "}
              Maturity: 12 months
            </span>
          </div>
          <h1 className="text-[#212529] text-5xl leading-tight md:text-3xl">
            10gm + 1gm Golden Bonanza
          </h1>
          <p className="text-[#495057] text-2xl leading-normal md:text-base">
            Get upto 1 gm gold extra on every 10gm of gold investment
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[#686868] text-sm mt-1">Rated 4.9</p>
            <Rating rating={4} totalRating={5} />
          </div>
          <div className="flex items-center">
            <Image
              className="gap-2"
              src="/images/avatars.png"
              width={80}
              height={26}
              alt="Avatars"
            />
            <span className="text-[#686868] text-xs rounded-xl border border-[#DEE2E6] p-1">
              Trusted by 1000+ of homemakers
            </span>
          </div>
          <div className="flex gap-4 items-center my-4 md:my-0">
            <Button
              bordered={false}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Purchase Scheme
            </Button>
            <Button
              bordered={true}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              View Details
            </Button>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-xs text-[#686868]">Powered by</p>
            <Image
              className="h-auto"
              src="https://storage.googleapis.com/getplus.in/images/npciIcon.png"
              width={60}
              height={25}
              alt="NPCI"
            />
            <Image
              src="https://storage.googleapis.com/getplus.in/images/yeshbankLogo.png"
              width={60}
              height={25}
              alt="Yes Bank"
            />
            <Image
              src="https://storage.googleapis.com/getplus.in/images/lendbox.png"
              width={60}
              height={25}
              alt="Lendbox"
            />
            <Image
              src="https://storage.googleapis.com/getplus.in/images/augmont.png"
              width={60}
              height={25}
              alt="Augmont"
            />
          </div>
        </div>
        <div className="w-1/2 md:w-full">
          <Image src="/images/hero.avif" width={700} height={700} alt="Hero" />
        </div>
      </section>
    </section>
  );
}
