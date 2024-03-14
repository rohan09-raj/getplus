import Image from "next/image";

export default function SchemeCard({
  image,
  title,
  description,
  onClick,
}: {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="flex flex-col gap-1 md:w-2/5 cursor-pointer">
      <Image
        className="rounded-2xl"
        src={image}
        width={290}
        height={200}
        alt={title}
      />
      <p className="text-[#181A1C] font-semibold mt-2 sm:text-sm">{title}</p>
      <span className="flex text-[#267F29] text-sm items-center sm:text-xs">
        <Image
          src="https://storage.googleapis.com/getplus.in/images/greenTick.png"
          height={20}
          width={20}
          alt="Green Tick"
        />{" "}
        {description}
      </span>
    </div>
  );
}
