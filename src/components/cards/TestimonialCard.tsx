import Rating from "../reusables/Rating";

export default function TestimonialCard({
  name,
  testimonial,
  rating,
}: {
  name: string;
  testimonial: string;
  rating: number;
}) {
  return (
    <div className="flex flex-col w-80 gap-3 bg-[#FFFAF1] border border-[#FFE483] rounded-2xl p-6">
      <p className="text-2xl text-[#212529] font-semibold">{name}</p>
      <p className="text-[#212529] flex-grow">{testimonial}</p>
      <Rating rating={rating} totalRating={5} />
    </div>
  );
}
