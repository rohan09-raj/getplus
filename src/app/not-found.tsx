import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl pt-10 pb-4 font-bold">404 | Page Not Found</h1>
      <Link className="hover:underline hover:font-semibold" href="/">Back to Home</Link>
    </section>
  );
}
