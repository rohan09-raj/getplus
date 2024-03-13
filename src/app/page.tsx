import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Schemes from "@/components/Schemes";
import SharkTank from "@/components/SharkTank";
import Working from "@/components/Working";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <section className="flex justify-center m-6">
        <section className="flex flex-col max-w-7xl w-full gap-12">
          <Working />
          <SharkTank />
          <Schemes />
          <Partners />
          <Testimonials />
        </section>
      </section>
    </main>
  );
}
