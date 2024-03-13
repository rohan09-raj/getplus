import Image from "next/image";

export default function FeatureCard({
  image,
  title,
  description,
  theme,
}: {
  image: string;
  title: string;
  description: string;
  theme: string;
}) {
  return (
    <section className={`w-64 rounded-xl ${theme}`}>
      <div className="w-full h-full bg-gradient-to-t from-transparent to-[#FFFFFF33]">
        <Image
          className="h-1/2 w-auto ml-auto"
          src={image}
          width={240}
          height={150}
          alt={title}
        />
        <div className="h-1/2 flex flex-col justify-between pb-8 px-4 pt-4">
          <h1 className="text-xl text-white font-semibold">{title}</h1>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </section>
  );
}
