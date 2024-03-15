"use client";
import Image from "next/image";
import Button from "./reusables/Button";

export default function CallUs() {
  return (
    <section className="hidden md:flex items-center justify-between p-4 rounded-xl bg-[#FFFAF1] border border-[#FFE483]">
      <p className="text-[#212529] font-semibold">Need help? Call us!</p>
      <Button bordered={false} onClick={() => {}}>
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
