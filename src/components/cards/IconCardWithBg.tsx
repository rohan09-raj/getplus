import Image from "next/image";

export default function IconCardWithBg({
  icon,
  text,
  onClick
}: {
  icon: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="cursor-pointer flex w-80 lg:w-56 sm:w-40 items-center justify-center gap-4 p-8 sm:p-4 lg:flex-col bg-[#FFFAF1] hover:bg-[#FEF4E1] border border-[#FFE483] rounded-2xl">
      <Image src={icon} className="sm:w-12 sm:h-12" alt={text} height={80} width={80} />
      <p className="text-[#000000B3] font-semibold text-center sm:text-xs">{text}</p>
    </div>
  );
}
