import Image from "next/image";

export default function PartnerCard({
  image,
  title,
}: {
  image: string,
  title: string,
}) {
  return (
    <div className="flex items-center flex-col gap-3">
      <Image
        className="rounded-2xl"
        src={image}
        width={290}
        height={200}
        alt="Partner"
      />
      <p className="text-[#181A1C] text-center font-semibold">{title}</p>
    </div>
  );
}
