import Image from "next/image";
import Link from "next/link";

export default function DownloadApp() {
  return (
    <section className="flex md:flex-col-reverse gap-8 items-center bg-[#FFFAF1] border border-[#FFE483] rounded-2xl p-14 sm:p-6">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-3xl text-[#212529] font-semibold sm:text-2xl md:text-center">
          Download the app
        </h1>
        <p className="text-[#212529] md:text-center">
          Plus, a revolutionary app that helps Indian homemakers to pre-plan
          their jewellery purchase by saving monthly & gaining 10% IRR
        </p>
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
      <Image
        className="w-1/2 md:w-full"
        src="https://storage.googleapis.com/getplus.in/images/phoneDownload.png"
        alt="App Screens"
        width={500}
        height={500}
      />
    </section>
  );
}
