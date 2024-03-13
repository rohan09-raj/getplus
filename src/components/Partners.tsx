"use client";
import Button from "./reusables/Button";
import PartnerCard from "./cards/PartnerCard";

export default function Partners() {
  const partners = [
    {
      image:
        "https://storage.googleapis.com/getplus.in/images/lagu%20bandhu.png",
      title: "Lagu Bandhu",
    },
    {
      image:
        "https://storage.googleapis.com/getplus.in/images/om%20jewellers.png",
      title: "Om Jewellers",
    },
    {
      image: "https://storage.googleapis.com/getplus.in/images/Orra.png",
      title: "Orra Fine Jewellery",
    },
    {
      image: "https://storage.googleapis.com/getplus.in/images/melorra.png",
      title: "Mellora Fine Jewellery",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-10">
      <h1 className="text-4xl text-[#868E96] font-bold mt-8">
        Explore Partners
      </h1>
      <section className="flex flex-wrap justify-center gap-8">
        {partners.map((partner, index) => (
          <PartnerCard key={index} image={partner.image} title={partner.title} />
        ))}
      </section>
      <Button bordered={true} onClick={() => {}}>
        Become a Partner
      </Button>
    </section>
  );
}