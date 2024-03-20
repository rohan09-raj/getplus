import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Schemes from "@/components/Schemes";
import SharkTank from "@/components/SharkTank";
import Working from "@/components/Working";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Mentions from "@/components/Mentions";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";
import LiveGoldPrice from "@/components/LiveGoldPrice";
import Image from "next/image";
import CallUs from "@/components/CallUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Image
        className="w-full md:h-6 object-cover mt-[80px]"
        src="https://plusgold.in/images/banner_shark_tank_india.png"
        alt="Shark Tank India"
        height={50}
        width={1000}
      />
      <LiveGoldPrice />
      <Hero />
      <Features />
      <section className="flex justify-center m-6">
        <section className="flex flex-col max-w-7xl w-full gap-12">
          <Working />
          <SharkTank />
          <Schemes />
          <Partners />
          <Testimonials />
          <Mentions />
          <DownloadApp />
          <CallUs />
        </section>
      </section>
      <Footer />
    </main>
  );
}
