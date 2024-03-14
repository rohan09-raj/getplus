import FeatureCard from "./cards/FeatureCard";
import SchemeCard from "./cards/SchemeCard";
import CustomCarousel from "./reusables/Carousel";

export default function Schemes() {
  const schemes = [
    {
      image:
        "https://storage.googleapis.com/getplus.in/images/Wedding%20Saving%20Scheme%20.png",
      title: "Wedding Saving Scheme",
      description: "Up to 22% returns",
    },
    {
      image:
        "https://storage.googleapis.com/getplus.in/images/dhanteras%20scheme.png",
      title: "Dhanteras Special Scheme",
      description: "Up to 22% returns",
    },
    {
      image:
        "https://storage.googleapis.com/getplus.in/images/anniversary%20scheme.png",
      title: "Anniversary Gift Scheme",
      description: "Up to 22% returns",
    },
    {
      image:
        "https://storage.googleapis.com/getplus.in/images/akshay%20tritya%20scheme.png",
      title: "Akshaya Tritya Scheme",
      description: "Up to 22% returns",
    },
  ];

  const features = [
    {
      image: "https://storage.googleapis.com/getplus.in/images/image24k.png",
      title: "Buy Gold Coins",
      description: "At best rates from trusted jewellers",
      theme: "bg-[#942828]",
    },
    {
      image: "https://storage.googleapis.com/getplus.in/images/movieTicket.png",
      title: "Gold Rush Contest",
      description: "Participate in contests to win exciting rewards",
      theme: "bg-[#208158]",
    },
    {
      image: "https://storage.googleapis.com/getplus.in/images/winnerCup.png",
      title: "Buy Gold Coins",
      description: "At best rates from trusted jewellers",
      theme: "bg-[#3E2894]",
    },
    {
      image: "https://storage.googleapis.com/getplus.in/images/coupon.png",
      title: "Buy Gold Coins",
      description: "At best rates from trusted jewellers",
      theme: "bg-[#FFD47B]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-10">
      <h1 className="text-4xl text-[#868E96] font-bold mt-8 text-center md:text-3xl">
        Explore Schemes
      </h1>
      <section className="flex flex-wrap justify-center gap-8">
        {schemes.map((scheme, index) => (
          <SchemeCard
            key={index}
            image={scheme.image}
            title={scheme.title}
            description={scheme.description}
          />
        ))}
      </section>
      <section className="w-full">
        <CustomCarousel>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              theme={feature.theme}
            />
          ))}
        </CustomCarousel>
      </section>
    </section>
  );
}
