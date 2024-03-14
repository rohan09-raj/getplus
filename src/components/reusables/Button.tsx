'use client';
import { ReactNode } from "react";

export default function Button({
  children,
  bordered,
  onClick,
}: {
  children: ReactNode;
  bordered: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm active:translate-y-px transition-all border border-[#9D002B] ${
        bordered ? "bg-white text-[#9D002B] hover:bg-[#FEEEEE]" : "bg-[#9D002B] text-white hover:bg-[#7F001F]"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
