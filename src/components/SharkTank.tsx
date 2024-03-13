import Image from "next/image";

export default function SharkTank() {
  return (
    <section className="flex p-8 rounded-2xl border md:flex-col md:p-6 gap-4">
      <div className="flex flex-col w-1/2 gap-4 justify-center lg:w-2/5 md:w-full">
        <p className="text-[#212529] font-semibold">Plus appearance in</p>
        <Image
          src="https://plusgold.in/images/sharktankindia.png"
          height={48}
          width={360}
          alt="Shark Tank India"
        />
        <p className="text-[#212529] font-semibold">
          Watch our Shark Tank pitch
        </p>
      </div>
      <video
        className="w-1/2 h-auto rounded-2xl lg:w-3/5 md:w-full"
        controls
        poster="https://getplus-backend-prod.s3.ap-south-1.amazonaws.com/media/thumbnail.png"
      >
        <source
          src="https://getplus-backend-prod.s3.ap-south-1.amazonaws.com/media/Plus+Gold+_+Thankyou+for+watching+.mp4"
          type="video/mp4"
        />
        <p>
          Your browser does not support HTML5 video. Please upgrade your browser
          or use a different one.
        </p>
      </video>
    </section>
  );
}
