"use client";
import Image from "next/image";
import { useState } from "react";
import IconCardWithBg from "./cards/IconCardWithBg";
import Button from "./reusables/Button";
import Modal from "./reusables/Modal";

export default function Working() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const working = [
    {
      icon: "https://storage.googleapis.com/getplus.in/images/no_penalty1.png",
      text: "No Penalty",
    },
    {
      icon: "https://plusgold.in/images/withdrawAnytime.png",
      text: "Withdraw anytime",
    },
    {
      icon: "https://plusgold.in/images/fivepercentExtra.png",
      text: "Guaranteed 5% extra",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center">
      {isModalOpen && (
        <Modal onCloseClick={() => setIsModalOpen(false)}>
          <p className="flex-grow flex items-center justify-center text-center font-bold">
            Modal
          </p>
        </Modal>
      )}
      <p className="text-4xl text-[#868E96] font-bold mb-8 text-center md:text-3xl">
        How does the app work?
      </p>
      <div className="flex gap-16 lg:flex-col lg:items-center md:gap-6">
        <iframe
          title="Plus Gold Video"
          className="w-1/2 h-80 rounded-2xl aspect-video lg:w-full sm:h-60"
          src="https://www.youtube.com/embed/cENtAAm7EKk?si=t99y1qyizGWPP0mG"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="flex flex-col gap-10 justify-center md:gap-6">
          <WorkingPoint
            index={1}
            title="Save with Plus & Get 1gm Extra"
            description="Save in gold in one time or SIP, & get up to 1gm extra on your savings"
          />
          <WorkingPoint
            index={2}
            title="Safe and secure"
            description="Your gold is 100% secured in regulated vaults"
          />
          <WorkingPoint
            index={3}
            title="Redeem at our partner jewellers"
            description="With more than 300+ partner jewellers to choose from, get your favourite jewellery at best rate"
          />
        </div>
      </div>
      <div className="flex w-full my-16 justify-between md:my-8 gap-2">
        {working.map((work, index) => (
          <IconCardWithBg
            key={index}
            icon={work.icon}
            text={work.text}
            onClick={() => setIsModalOpen(true)}
          />
        ))}
      </div>
      <Button
        bordered={true}
        onClick={() => {
          window.open("https://www.youtube.com/watch?v=cENtAAm7EKk", "_blank");
        }}
      >
        <Image
          src="https://plusgold.in/images/youtubeiconred.png"
          width={24}
          height={24}
          alt="Youtube"
        />
        Watch video to learn more
      </Button>
    </section>
  );
}

function WorkingPoint({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex md:flex-col">
      <p className="text-[#FFD788] w-12 font-bold text-5xl sm:text-4xl">
        {index}.
      </p>
      <div className="flex flex-col">
        <p className="text-base text-[#212529] font-semibold sm:text-sm">
          {title}
        </p>
        <p className="text-sm text-[#212529] sm:text-xs">{description}</p>
      </div>
    </div>
  );
}
