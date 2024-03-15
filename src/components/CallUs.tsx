"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "./reusables/Button";
import Modal from "./reusables/Modal";
import { HELPLINE } from "@/constants/constants";

export default function CallUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(HELPLINE);
  };

  return (
    <section className="hidden md:flex items-center justify-between p-4 rounded-xl bg-[#FFFAF1] border border-[#FFE483]">
      {isModalOpen && (
        <Modal onCloseClick={() => setIsModalOpen(false)}>
          <div className="flex flex-col flex-grow justify-center gap-6 items-center">
            <p className="flex items-center justify-center text-center font-semibold">
              Our support team is always active to help you resolve your queries
              and access a better experience.To connect, call on the helpline
              number shown below. <br /> To connect, call on the helpline number
              shown below
            </p>
            <div
              className="p-4 rounded-xl bg-[#FFFAF1] border border-[#FFE483] cursor-pointer"
              onClick={() => handleCopyNumber()}
            >
              <p className="flex gap-4 text-[#212529] font-semibold">
                {HELPLINE}{" "}
                <Image
                  src="https://img.icons8.com/external-aficons-studio-basic-outline-aficons-studio/32/external-copy-user-interface-aficons-studio-basic-outline-aficons-studio.png"
                  alt="Copy"
                  height={24}
                  width={24}
                />
              </p>
            </div>
          </div>
        </Modal>
      )}
      <p className="text-[#212529] font-semibold">Need help? Call us!</p>
      <Button
        bordered={false}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Image
          src="https://img.icons8.com/glyph-neue/64/ffffff/phone.png"
          alt="Phone"
          height={18}
          width={18}
        />
        Call Helpline
      </Button>
    </section>
  );
}
