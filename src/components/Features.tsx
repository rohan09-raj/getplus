import IconCard from "./cards/IconCard";

export default function Features() {
  const features = [
    {
      icon: "https://storage.googleapis.com/getplus.in/images/extraOffer.png",
      text: "Up to 0.5gm extra instantly",
    },
    {
      icon: "https://storage.googleapis.com/getplus.in/images/redeem.png",
      text: "Redeem at 300+ partner jewellers",
    },
    {
      icon: "https://storage.googleapis.com/getplus.in/images/12months.png",
      text: "In 12 months get 1gm extra",
    },
    {
      icon: "https://storage.googleapis.com/getplus.in/images/trusted.png",
      text: "Trusted by 25,000+ users",
    },
  ];

  return (
    <section className="grid p-12 gap-10 grid-cols-4 lg:grid-cols-2 sm:text-xs md:p-6 sm:gap-2 rounded-t-3xl border-t border-t-[#FFE483] bg-gradient-to-b from-[#FFFAF1]">
      {features.map((feature, index) => (
        <IconCard key={index} icon={feature.icon} text={feature.text} />
      ))}
    </section>
  );
}
