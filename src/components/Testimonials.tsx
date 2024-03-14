import Button from "./reusables/Button";
import PartnerCard from "./cards/PartnerCard";
import TestimonialCard from "./cards/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Durga Prasad",
      testimonial:
        "Given 5 Star rating, for the experience the app gives. The interface is easy to use and it's crisp and clear with guiding the user why he opened app and what he wants from it is clear on the Homepage itself",
      rating: 5,
    },
    {
      name: "Shree Siddhi Nair",
      testimonial:
        "This is a great platform to save and invest in gold. I recommended it to my mom too and she loves it. The platform is really easy and user friendly.",
      rating: 5,
    },
    {
      name: "Prashant Dubey",
      testimonial:
        "Impressive app that beautifully merges jewelry savings and a user-friendly interface. A must-try for smart jewelry enthusiasts. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-10">
      <p className="text-4xl text-[#868E96] font-bold mt-8 text-center md:text-3xl">
        Meet our happy customers
      </p>
      <section className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            rating={testimonial.rating}
          />
        ))}
      </section>
    </section>
  );
}
