import Image from "next/image";

export default function ArticleCard({
  image,
  title,
  logo,
  link,
}: {
  image: string;
  title: string;
  logo: string;
  link: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-72 bg-[#FFFAF1] border border-[#FFE483] rounded-2xl p-6">
      <Image
        className="rounded-2xl"
        src={image}
        width={290}
        height={200}
        alt={title}
      />
      <div className="flex items-center">
        <p className="text-[#181A1C] text-sm font-semibold">{title}</p>
        <Image src={logo} height={20} width={40} alt="Orange Tick" />
      </div>
      <a
        href={link}
        className="text-[#9D002B] font-semibold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read full article ➔
      </a>
    </div>
  );
}
