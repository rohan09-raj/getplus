import Image from "next/image";

export default function IconCard({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 h-28 max-w-xs sm:h-16">
      <Image
        className="h-11 w-11"
        src={icon}
        alt={text}
        height={48}
        width={48}
      />
      <p className="text-[#000000B3] font-semibold">{text}</p>
    </div>
  );
}
