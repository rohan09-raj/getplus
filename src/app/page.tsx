import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Working from "@/components/Working";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Features />
      <section className="flex justify-center m-6">
        <section className="flex max-w-7xl w-full">
          <Working />
        </section>
      </section>
    </main>
  );
}
