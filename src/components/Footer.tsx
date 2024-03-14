import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center p-6 bg-gradient-to-b from-transparent via-[#FFFAF1] to-[#FFFAF1]">
      <div className="flex flex-col max-w-7xl w-full gap-8">
        <div className="flex items-center md:flex-col">
          <div className="flex flex-col w-1/2 gap-4 md:w-3/4 md:items-center">
            <p className="text-3xl text-[#212529] md:text-center md:text-2xl sm:text-xl">
              Your money is 100% secure!
            </p>
            <p className="text-[#212529] md:text-center sm:text-sm">
              Your asset is stored in secured vaults at Augmont and available to
              withdraw anytime
            </p>
            <div className="flex gap-10">
              <Partners
                image="https://storage.googleapis.com/getplus.in/images/RbiFooter.png"
                text="RBI Approved"
              />
              <Partners
                image="https://storage.googleapis.com/getplus.in/images/lendboxfooter.png"
                text="Lending Partner"
              />
              <Partners
                image="https://storage.googleapis.com/getplus.in/images/LOGO-2023-white.png"
                text="Gold Partner"
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-center md:w-full">
            <Image
              className="w-1/2"
              src="https://storage.googleapis.com/getplus.in/images/BankSafe.png"
              alt="Bank Safe"
              height={200}
              width={200}
            />
          </div>
        </div>
        <div className="flex md:flex-col gap-6">
          <div className="flex flex-col w-1/2 md:w-full md:items-center gap-4">
            <Image
              src="https://storage.googleapis.com/getplus.in/images/plusNewLogo%20.png"
              alt="Plus"
              height={50}
              width={95}
            />
            <p className="md:text-center sm:text-sm">
              Plus, a revolutionary app that helps Indian homemakers to pre-plan
              their jewellery purchase by saving monthly & gaining 10% IRR
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/PlusGold.in"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="sm:h-8 sm:w-8"
                  src="https://img.icons8.com/ios-filled/50/facebook--v1.png"
                  alt="Facebook"
                  height={40}
                  width={40}
                />
              </Link>
              <Link
                href="https://www.instagram.com/plusgold.in/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="sm:h-8 sm:w-8"
                  src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png"
                  alt="Instagram"
                  height={40}
                  width={40}
                />
              </Link>
              <Link
                href="https://x.com/getplushq?s=21&t=HSN_D4Tl94Xcu5l2jezTXg"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="sm:h-8 sm:w-8"
                  src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
                  alt="Twitter"
                  height={40}
                  width={40}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/getplusofficial/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="sm:h-8 sm:w-8"
                  src="https://img.icons8.com/ios-filled/50/linkedin.png"
                  alt="LinkedIn"
                  height={40}
                  width={40}
                />
              </Link>
              <Link
                href="https://www.youtube.com/@Plus-App/featured"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="sm:h-8 sm:w-8"
                  src="https://img.icons8.com/ios-filled/50/youtube-play.png"
                  alt="YouTube"
                  height={40}
                  width={40}
                />
              </Link>
            </div>
            <div className="flex gap-4 md:justify-center">
              <Link
                href="https://play.google.com/store/apps/details?id=com.fs.getplus"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="h-full"
                  src="https://storage.googleapis.com/getplus.in/images/download_play_store.png"
                  alt="Play Store"
                  width={200}
                  height={50}
                />
              </Link>
              <Link
                href="https://apps.apple.com/in/app/plus-save-for-jewellery/id6443759619"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="https://storage.googleapis.com/getplus.in/images/download_app_store.png"
                  alt="App Store"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-1/2 md:w-full gap-16">
            <div className="flex flex-col gap-2">
              <Link className="sm:text-sm" href="/">
                About Us
              </Link>
              <Link className="sm:text-sm" href="/">
                Privacy Policy
              </Link>
              <Link className="sm:text-sm" href="/">
                Terms & Conditions
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link className="sm:text-sm" href="/">
                FAQs
              </Link>
              <Link className="sm:text-sm" href="/">
                Blogs
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 sm:text-sm">
          <p>© FinShakti Solutions Pvt. Ltd.</p>
          <p className="text-center text-sm sm:text-xs">
            <strong>Address :</strong> B.No 19, H.No 1413, R.S. Pal, Near
            Mahatma Gandhi School, Nagpur, Maharashtra, 440014
          </p>
          <p className="text-center text-sm sm:text-xs">
            <strong>Email : </strong> founders@getplus.in{" "}
            <strong>Phone : </strong> +91-9035202565
          </p>
        </div>
      </div>
    </footer>
  );
}

function Partners({ image, text }: { image: string; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="flex-grow"
        src={image}
        alt={text}
        height={60}
        width={60}
      />
      <p className="text-[#212529] text-center font-semibold sm:text-sm">{text}</p>
    </div>
  );
}
