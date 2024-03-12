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
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm border border-[#9D002B] ${
        bordered ? "bg-[#FFFFFF] text-[#9D002B]" : "bg-[#9D002B] text-white"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
